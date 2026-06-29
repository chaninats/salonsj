DROP POLICY IF EXISTS "Public can view booking availability" ON public.bookings;
REVOKE SELECT ON public.bookings FROM anon, authenticated;
GRANT SELECT ON public.bookings TO service_role;