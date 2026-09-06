import { useFormatter, useTranslations } from "next-intl";

interface DateRangeProps {
  start: string;
  end: string | null;
}

export function DateRange({ start, end }: Readonly<DateRangeProps>) {
  const format = useFormatter();
  const t = useTranslations("DateRange");

  // Safari needs a full date, so a YYYY-MM value gets the first of the month.
  const formatMonthYear = (month: string) =>
    format.dateTime(new Date(`${month}-01`), { month: "short", year: "numeric" });

  return (
    <p className="text-sm text-muted">
      {formatMonthYear(start)} - {end ? formatMonthYear(end) : t("present")}
    </p>
  );
}
