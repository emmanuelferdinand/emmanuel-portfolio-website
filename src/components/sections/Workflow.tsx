import { Pin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { workflowSteps } from "@/content/workflow";
import { Section } from "@/components/ui/Section";

const connectorLineProps = {
  strokeWidth: 2,
  strokeDasharray: "6 6",
  vectorEffect: "non-scaling-stroke",
  y1: "0",
  y2: "100",
};

const formatStepNumber = (index: number) => String(index + 1).padStart(2, "0");

const getCardClassName = (isLeft: boolean) =>
  isLeft ? "md:-rotate-2" : "md:col-start-2 md:rotate-2";

// The line crosses from one column's centre to the other's.
const getDiagonalEnds = (isLeft: boolean) => (isLeft ? { x1: 25, x2: 75 } : { x1: 75, x2: 25 });

export function Workflow() {
  const locale = useLocale();
  const t = useTranslations("Sections.workflow");

  return (
    <Section id="workflow" eyebrow={t("eyebrow")} title={t("title")}>
      <ol>
        {workflowSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isLast = index === workflowSteps.length - 1;
          const diagonalEnds = getDiagonalEnds(isLeft);

          return (
            <li key={step.id} className="grid md:grid-cols-2">
              <div
                className={`relative w-full max-w-xs reveal justify-self-center rounded-2xl border border-stroke bg-surface p-6 transition hover:-translate-y-1 ${getCardClassName(isLeft)}`}
              >
                <Pin className="absolute -top-3 left-1/2 size-5 -translate-x-1/2 text-accent" />
                <p className="font-display text-3xl text-accent">{formatStepNumber(index)}</p>
                <h3 className="mt-2 text-xl font-medium">{step.title[locale]}</h3>
                <p className="mt-2 text-sm text-muted">{step.detail[locale]}</p>
              </div>
              {!isLast && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="h-20 w-full md:col-span-2"
                >
                  <line
                    {...connectorLineProps}
                    x1="50"
                    x2="50"
                    className="animate-dash stroke-stroke-strong md:hidden"
                  />
                  <line
                    {...connectorLineProps}
                    {...diagonalEnds}
                    className="hidden animate-dash stroke-stroke-strong md:block"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
