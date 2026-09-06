interface BasketballIconProps {
  className?: string;
  strokeWidth?: number;
}

export function BasketballIcon({ className, strokeWidth = 2 }: Readonly<BasketballIconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M12 2a12 12 0 0 0 0 20" />
      <path d="M12 2a12 12 0 0 1 0 20" />
    </svg>
  );
}
