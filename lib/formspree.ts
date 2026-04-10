interface FormspreeResult {
  ok: boolean;
  message: string;
}

export const submitToFormspree = async (
  formId: string,
  payload: Record<string, string | string[]>,
): Promise<FormspreeResult> => {
  if (!formId) {
    return { ok: false, message: "Form endpoint is not configured." };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, message: "Submission failed. Please try again." };
    }

    return { ok: true, message: "Submitted successfully." };
  } catch {
    return { ok: false, message: "Network error. Please retry." };
  }
};

export const submitVolunteerForm = async (
  payload: Record<string, string | string[]>,
): Promise<FormspreeResult> => {
  const result = await submitToFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID ?? "",
    payload,
  );
  if (!result.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const submitNewsletterForm = async (
  payload: Record<string, string | string[]>,
): Promise<FormspreeResult> => {
  const result = await submitToFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID ?? "",
    payload,
  );
  if (!result.ok) {
    throw new Error(result.message);
  }
  return result;
};
