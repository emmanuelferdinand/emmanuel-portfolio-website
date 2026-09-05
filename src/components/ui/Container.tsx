interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className = "", children }: ContainerProps) {
  return <div className={`mx-auto max-w-300 px-6 md:px-10 lg:px-16 ${className}`}>{children}</div>;
}
