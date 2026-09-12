import { Mail, Phone } from "lucide-react";

interface ContactChannelCardProps {
  label: string;
  description?: string;
  email: string;
  phone: string;
}

export function ContactChannelCard({ label, description, email, phone }: ContactChannelCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold text-text">{label}</h3>
      {description ? <p className="mt-2 text-sm text-text-muted">{description}</p> : null}
      <div className="mt-4 space-y-2">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          {phone}
        </a>
      </div>
    </div>
  );
}
