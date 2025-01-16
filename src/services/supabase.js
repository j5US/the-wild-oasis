import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://sczaupbajmmtkycxfsje.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemF1cGJham1tdGt5Y3hmc2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODI0MDQsImV4cCI6MjA1MjA1ODQwNH0.X7frUovr5bL1aCzrcSlnp2v3ugE4m-NecIGaujCvoAQ";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;