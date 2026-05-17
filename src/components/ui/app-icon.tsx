import { cn } from "../../utils/cn";

type AppType =
  | "chrome"
  | "youtube"
  | "teams"
  | "whatsapp"
  | "opera"
  | "instagram"
  | "gmail"
  | "firefox"
  | "x.com"
  | "facebook";

type AppIconProps = {
  app: AppType;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const appConfig: Record<
  AppType,
  { color: string; bgColor: string; letter: string }
> = {
  chrome: {
    color: "text-white",
    bgColor: "bg-gradient-to-br from-green-400 via-yellow-400 to-red-400",
    letter: "C",
  },
  youtube: {
    color: "text-white",
    bgColor: "bg-red-500",
    letter: "Y",
  },
  teams: {
    color: "text-white",
    bgColor: "bg-blue-500",
    letter: "T",
  },
  whatsapp: {
    color: "text-white",
    bgColor: "bg-green-500",
    letter: "W",
  },
  opera: {
    color: "text-white",
    bgColor: "bg-red-400",
    letter: "O",
  },
  instagram: {
    color: "text-white",
    bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    letter: "I",
  },
  gmail: {
    color: "text-white",
    bgColor: "bg-red-400",
    letter: "G",
  },
  firefox: {
    color: "text-white",
    bgColor: "bg-orange-500",
    letter: "F",
  },
  "x.com": {
    color: "text-white",
    bgColor: "bg-slate-800",
    letter: "X",
  },
  facebook: {
    color: "text-white",
    bgColor: "bg-blue-600",
    letter: "F",
  },
};

const sizeClasses = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
};

export function AppIcon({ app, size = "sm", className }: AppIconProps) {
  const config = appConfig[app];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold shadow-sm",
        config.bgColor,
        config.color,
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {config.letter}
    </span>
  );
}