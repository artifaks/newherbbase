
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { FREE_EBOOK_ID } from "@/components/SubscriptionBanner";

/**
 * Grants the free eBook to the user after subscription
 * @returns Promise<boolean> - Whether the operation was successful
 */
export const grantFreeEbook = async (): Promise<boolean> => {
  try {
    // Get the current user
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      console.error("No authenticated user found");
      return false;
    }

    // Check if the user already has this eBook
    const { data: existingPurchase, error: checkError } = await supabase
      .from("user_ebooks" as any)
      .select("*")
      .eq("user_id", user.id)
      .eq("ebook_id", FREE_EBOOK_ID)
      .single();

    if (checkError && checkError.code !== "PGRST116") { // PGRST116 is "no rows returned"
      console.error("Error checking existing purchase:", checkError);
      return false;
    }

    // If the user already has the eBook, no need to grant it again
    if (existingPurchase) {
      console.log("User already has the free eBook");
      return true;
    }

    // Grant the free eBook to the user by creating a record in user_ebooks table
    const { error: insertError } = await supabase
      .from("user_ebooks" as any)
      .insert({
        user_id: user.id,
        ebook_id: FREE_EBOOK_ID,
        purchase_date: new Date().toISOString(),
        is_free: true
      });

    if (insertError) {
      console.error("Error granting free eBook:", insertError);
      return false;
    }

    console.log("Free eBook granted successfully");
    return true;
  } catch (error) {
    console.error("Exception in grantFreeEbook:", error);
    return false;
  }
};

/**
 * Hook to check if user owns the free eBook
 */
export const useCheckFreeEbook = () => {
  const { toast } = useToast();

  const checkAndGrantFreeEbook = async () => {
    try {
      const isGranted = await grantFreeEbook();
      if (isGranted) {
        toast({
          title: "Free eBook added to your account!",
          description: "You can access your free 'Herbal Medicine Basics' eBook in your account.",
          variant: "default",
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error in checkAndGrantFreeEbook:", error);
      return false;
    }
  };

  return { checkAndGrantFreeEbook };
};
