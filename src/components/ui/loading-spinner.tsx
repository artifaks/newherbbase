
import React from "react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
  textClassName?: string;
}

const LoadingSpinner = ({
  size = "md",
  text,
  className,
  textClassName,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Loader
        className={cn(
          "animate-spin text-herbal-600",
          sizeClasses[size]
        )}
      />
      {text && (
        <p className={cn("mt-2 text-sm text-herbal-700", textClassName)}>
          {text}
        </p>
      )}
    </div>
  );
};

export { LoadingSpinner };
