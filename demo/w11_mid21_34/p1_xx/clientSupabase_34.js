const SUPABASE_URL = 'https://wkuwjlgjzkovodskzcca.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdXdqbGdqemtvdm9kc2t6Y2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MTcwNDksImV4cCI6MTk5OTI5MzA0OX0.3U3FHIECaMTBWIgPH-XjcvDA0UBzKMMt2oL37ZfJi-8';

export const _supabase = supabase.createClient
(SUPABASE_URL, SUPABASE_ANON_KEY);
