import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl bg-(--panel)", className)} {...props}>
      {children}
    </div>
  );
}
