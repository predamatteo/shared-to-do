import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto';

REACT_NATIVE_SUPABASE_URL = "https://zcxqxtgbuyhdhuylyajj.supabase.co"
REACT_NATIVE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjeHF4dGdidXloZGh1eWx5YWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3OTA1MzcsImV4cCI6MjAxNzM2NjUzN30.qxzlhMettbyVDPMOA-C0yi3odhStsXRKdJqqqRU2_gg"
const supabaseUrl = REACT_NATIVE_SUPABASE_URL;
const supabaseKey = REACT_NATIVE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;