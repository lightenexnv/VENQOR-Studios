/**
 * Web3Forms submission helper (https://web3forms.com).
 * The access key is a public, form-scoped key (safe to ship to the browser).
 * Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local to change it without touching code.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "73918818-fcaf-45bb-b9a3-8a63603b9a28";

export type SubmitResult = { ok: boolean; message: string };

export async function submitWeb3Form(fields: Record<string, string>, opts: { subject: string; fromName?: string }): Promise<SubmitResult> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: opts.subject,
        from_name: opts.fromName ?? "VENQOR Studios website",
        ...fields,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (res.ok && data.success) return { ok: true, message: data.message ?? "Sent" };
    return { ok: false, message: data.message ?? "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Network error — please check your connection and try again." };
  }
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
