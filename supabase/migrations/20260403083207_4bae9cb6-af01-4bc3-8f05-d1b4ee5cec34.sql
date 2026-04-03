
-- Create a SECURITY DEFINER function to return only non-PII booking data
CREATE OR REPLACE FUNCTION public.get_booking_availability(
  p_hairdresser_name text,
  p_start_date timestamptz,
  p_end_date timestamptz
)
RETURNS TABLE (
  booking_date timestamptz,
  hairdresser_name text,
  service_type text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT b.booking_date, b.hairdresser_name, b.service_type
  FROM public.bookings b
  WHERE b.hairdresser_name = p_hairdresser_name
    AND b.booking_date >= p_start_date
    AND b.booking_date <= p_end_date;
$$;

-- Remove the public SELECT policy that exposes customer PII
DROP POLICY IF EXISTS "Anyone can view bookings" ON public.bookings;
