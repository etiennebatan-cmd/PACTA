import { createClient } from '@supabase/supabase-js'

// TEMPORARY: Hardcoded for testing
const supabaseUrl = 'https://djrpigkobaraykaobzsc.supabase.co'
const supabaseAnonKey = 'sb_publishable_krtlInaZkIbcy9CbCzw_Mg_MmYRxBNZ'

console.log('🔍 Supabase Config Check:');
console.log('URL:', supabaseUrl);
console.log('Key exists:', !!supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey)