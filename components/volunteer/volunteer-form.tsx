"use client";

import { FormEvent, useMemo, useState } from "react";

import { submitVolunteerForm } from "@/lib/formspree";
import { volunteerRoles } from "@/lib/volunteer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VolunteerFormState {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  roleInterestedIn: string;
  availability: string[];
  motivation: string;
}

const initialState: VolunteerFormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  roleInterestedIn: "",
  availability: [],
  motivation: "",
};

const availabilityOptions = ["Weekdays", "Weekends", "Remote Only"] as const;

export function VolunteerForm() {
  const [form, setForm] = useState<VolunteerFormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const remainingChars = useMemo(() => 300 - form.motivation.length, [form.motivation]);

  const toggleAvailability = (value: string) => {
    setForm((prev) => {
      if (prev.availability.includes(value)) {
        return {
          ...prev,
          availability: prev.availability.filter((option) => option !== value),
        };
      }

      return {
        ...prev,
        availability: [...prev.availability, value],
      };
    });
  };

  const validate = () => {
    if (!form.fullName || !form.email || !form.phone || !form.city) {
      return "Please fill all required fields.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (!form.roleInterestedIn) {
      return "Please choose a role you are interested in.";
    }

    if (!form.motivation.trim()) {
      return "Please tell us why you want to volunteer.";
    }

    if (form.motivation.length > 300) {
      return "Motivation must be within 300 characters.";
    }

    return null;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmitting(true);
    try {
      await submitVolunteerForm({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        city: form.city,
        roleInterestedIn: form.roleInterestedIn,
        availability: form.availability.join(", "),
        motivation: form.motivation,
      });

      setSuccessMessage(
        "Thanks for volunteering. Our team will get in touch shortly.",
      );
      setForm(initialState);
    } catch {
      setErrorMessage("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 rounded-lg bg-surface-container p-8 md:p-12">
      <div className="mb-4 text-center">
        <h2 className="font-headline text-4xl text-on-surface">Your Journey Starts Here</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="vol-full-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Full Name
          </label>
          <Input
            id="vol-full-name"
            value={form.fullName}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, fullName: event.target.value }))
            }
            required
          />
        </div>

        <div>
          <label htmlFor="vol-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Email
          </label>
          <Input
            id="vol-email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </div>

        <div>
          <label htmlFor="vol-phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Phone
          </label>
          <Input
            id="vol-phone"
            type="tel"
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            required
          />
        </div>

        <div>
          <label htmlFor="vol-city" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            City
          </label>
          <Input
            id="vol-city"
            value={form.city}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, city: event.target.value }))
            }
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="vol-role" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Role Interested In
        </label>
        <select
          id="vol-role"
          className="focus-ring h-11 w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-4 text-sm"
          value={form.roleInterestedIn}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, roleInterestedIn: event.target.value }))
          }
          required
        >
          <option value="">Select a role</option>
          {volunteerRoles.map((role) => (
            <option key={role.id} value={role.title}>
              {role.title}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Availability
        </legend>
        <div className="flex flex-wrap gap-6">
          {availabilityOptions.map((option) => (
            <label key={option} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="focus-ring h-4 w-4 rounded border-outline text-primary"
                checked={form.availability.includes(option)}
                onChange={() => toggleAvailability(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="vol-motivation" className="mb-2 block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Why do you want to volunteer?
        </label>
        <textarea
          id="vol-motivation"
          maxLength={300}
          value={form.motivation}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, motivation: event.target.value }))
          }
          className="focus-ring min-h-28 w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-4 py-3 text-sm"
          required
        />
        <p className="mt-2 text-right text-xs text-on-surface-variant">
          {remainingChars} characters left
        </p>
      </div>

      {successMessage ? <p className="text-sm text-secondary">{successMessage}</p> : null}
      {errorMessage ? <p className="text-sm text-error">{errorMessage}</p> : null}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
