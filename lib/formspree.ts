interface FormspreePayload {
  [key: string]: string;
}

async function submitToFormspree(formId: string | undefined, payload: FormspreePayload) {
  if (!formId) {
    throw new Error("Missing Formspree form ID.");
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Form submission failed.");
  }

  return response.json().catch(() => ({}));
}

export async function submitVolunteerForm(payload: FormspreePayload) {
  return submitToFormspree(process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID, payload);
}

export async function submitNewsletterForm(payload: FormspreePayload) {
  return submitToFormspree(process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID, payload);
}
