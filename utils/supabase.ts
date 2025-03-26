import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://tuhllcjeughmikycnwvp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1aGxsY2pldWdobWlreWNud3ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjUwNTcsImV4cCI6MjA1NzkwMTA1N30.xuBw7qVxmix5rESJHTuMkXFwwEAIgtS9DgeLP9dOVRI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
