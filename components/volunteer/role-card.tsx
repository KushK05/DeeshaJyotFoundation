import { VolunteerRole } from "@/lib/volunteer";
import { Icon } from "@/components/ui/icon";

interface RoleCardProps {
  role: VolunteerRole;
}

const iconMap: Record<VolunteerRole["icon"], Parameters<typeof Icon>[0]["name"]> = {
  school: "school",
  camera: "camera",
  truck: "truck",
  digital: "digital",
  fundraising: "fundraising",
};

export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="card-hover rounded-lg bg-surface p-8">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
        <Icon name={iconMap[role.icon]} className="h-5 w-5" />
      </div>
      <h3 className="mb-3 font-headline text-2xl text-on-surface">{role.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
        {role.description}
      </p>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
        {role.commitment}
      </p>
    </article>
  );
}
