import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const GradientBackground = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
  };
  return (
    <div className={cn("relative p-4 group", containerClassName)}>
      
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
