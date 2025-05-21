
import React from 'react';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => (
  <div className="mb-8 relative">
    {/* Decorative background leaf pattern */}
    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 bg-contain bg-no-repeat bg-right"
         style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsYW50LTIiPjxwYXRoIGQ9Ik0yIDE1YTYuOTk5IDYuOTk5IDAgMCAxIDEyLTVjLjk0LTIuMzQgMy4zLTMuNzYgNS44LTMuOTQuNTUgMCAxLjEuMDUgMS42NC4xNiAuMzcgMSAuNTYgMi4xNS41NiAzLjM0IDAgNS45NC00LjkyIDEwLjU3LTExIDEwLjU3YTEwLjU3IDEwLjU3IDAgMCAxLTEwLTUuMTN6Ii8+PHBhdGggZD0iTTExIjE1YTMuMiAzLjIgMCAwIDAtMi4xLjcgMi43IDIuNyAwIDAgMC01LjI0LjcgMyAzIDAgMCAwIDMuMSA0LjkgMS43IDEuNyAwIDAgMCAxLjguMTcgNCA0IDAgMCAwIDQtLjUsMiAyIDAgMSAwIDAtNi0yIDIgMCAwIDAtMS41Ni4weiIvPjwvc3ZnPg==')" }}></div>

    <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2 border-b pb-2 border-green-100">
      {icon}
      {title}
    </h2>
    <div className="pl-1">
      {children}
    </div>
  </div>
);

export default Section;
