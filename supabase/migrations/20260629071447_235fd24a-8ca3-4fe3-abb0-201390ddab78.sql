
-- 1. Tighten INSERT policy (remove WITH CHECK true)
DROP POLICY IF EXISTS "Anyone can create bookings" ON public.bookings;
CREATE POLICY "Anyone can create bookings"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(customer_name)) BETWEEN 1 AND 100
  AND length(btrim(customer_phone)) BETWEEN 8 AND 20
  AND length(btrim(service_type)) BETWEEN 1 AND 100
  AND length(btrim(hairdresser_name)) BETWEEN 1 AND 100
  AND booking_date > (now() - interval '1 day')
  AND booking_date < (now() + interval '1 year')
);

-- 2. Remove bookings from realtime publication (prevents PII leakage via Realtime)
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime DROP TABLE public.bookings;
EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- 3. Convert SECURITY DEFINER function to SECURITY INVOKER
CREATE OR REPLACE FUNCTION public.get_booking_availability(
  p_hairdresser_name text,
  p_start_date timestamp with time zone,
  p_end_date timestamp with time zone
)
RETURNS TABLE(booking_date timestamp with time zone, hairdresser_name text, service_type text)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path TO 'public'
AS $function$
  SELECT b.booking_date, b.hairdresser_name, b.service_type
  FROM public.bookings b
  WHERE b.hairdresser_name = p_hairdresser_name
    AND b.booking_date >= p_start_date
    AND b.booking_date <= p_end_date;
$function$;

-- 4. Allow public to read ONLY non-PII columns (no customer_name / customer_phone)
CREATE POLICY "Public can view booking availability"
ON public.bookings
FOR SELECT
TO anon, authenticated
USING (true);

REVOKE SELECT ON public.bookings FROM anon, authenticated;
GRANT SELECT (booking_date, hairdresser_name, service_type) ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;
