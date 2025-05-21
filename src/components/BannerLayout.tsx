
import React, { ReactNode } from "react";

interface BannerLayoutProps {
  className?: string;
  children: ReactNode;
  gradient?: string;
  borderColor?: string;
}

const BannerLayout = ({ 
  className = "",
  children, 
  gradient = "bg-gradient-to-r from-amber-100 to-amber-200",
  borderColor = "border-amber-300" 
}: BannerLayoutProps) => {
  return (
    <div className={`${gradient} border-t border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default BannerLayout;
