import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchUserData = async () => {
  const { data, error } = await supabase
    .from("user-data")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);
  if (error) throw new Error(error.message);
  return data;
};
