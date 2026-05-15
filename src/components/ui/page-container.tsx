import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn("mx-auto w-full max-w-345 2xl:max-w-475", className)}>{children}</div>;
}
