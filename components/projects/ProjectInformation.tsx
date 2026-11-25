import type { Project } from "@/types";

interface ProjectInformationProps {
  details: NonNullable<Project["details"]>;
}

export default function ProjectInformation({
  details,
}: ProjectInformationProps) {
  const information = [
    {
      label: "My Role",
      value: details.role,
    },
    {
      label: "Development Period",
      value: details.developmentPeriod,
    },
    {
      label: "Team Size",
      value: details.teamSize,
    },
  ].filter((item) => item.value?.trim());

  const hasResponsibilities =
    details.responsibilities && details.responsibilities.length > 0;

  if (information.length === 0 && !hasResponsibilities) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Project Information</h2>
      </div>

      {/* General Information */}
      {information.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {information.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                {item.label}
              </p>

              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Responsibilities */}
      {hasResponsibilities && (
        <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
          <h3 className="mb-5 text-lg font-bold">My Responsibilities</h3>

          <ul className="space-y-3">
            {details.responsibilities!.map((responsibility, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base"
              >
                <span className="mt-1 text-accent">✓</span>

                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
