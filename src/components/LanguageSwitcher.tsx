"use client";

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();
 
  const languages = [
    {code: "zh", name: "中文"},
    {code: "en", name: "English"},
    {code: "ja", name: "日本語"},
    {code: "ko", name: "한국어"}
  ];
 
  const switchLanguage = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };
 
  return (
    <select
      value={locale}
      onChange={(e) => switchLanguage(e.target.value)}
      className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
