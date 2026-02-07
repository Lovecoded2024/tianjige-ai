"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  
  const links = [
    {href: "/fortune", label: t("fortune")},
    {href: "/artifacts", label: t("artifacts")},
    {href: "/master", label: t("master")}
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            天机阁
          </Link>
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all ${
                  pathname.startsWith(link.href)
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
