"use server"

import { supabase } from "@/app/lib/supabase"

type SubscribeResult = {
  success: boolean
  message: string
}

export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Gecerli bir e-posta adresi girin.",
    }
  }

  try {
    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.toLowerCase().trim() })

    if (error) {
      // Duplicate email - show success for UX
      if (error.code === "23505") {
        return {
          success: true,
          message: "Listeye eklendiniz!",
        }
      }

      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Bir hata olustu, lutfen tekrar deneyin.",
      }
    }

    return {
      success: true,
      message: "Listeye eklendiniz!",
    }
  } catch (err) {
    console.error("Subscribe error:", err)
    return {
      success: false,
      message: "Bir hata olustu, lutfen tekrar deneyin.",
    }
  }
}
