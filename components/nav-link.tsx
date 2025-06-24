"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-300",
        isActive
          ? "text-grey-600 font-medium"
          : "text-gray-500 hover:text-blue-500"
      )}
    >
      {children}
    </Link>
  );
}
