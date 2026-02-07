export const locales = ["zh", "en", "ja", "ko"] as const;
export type Locale = typeof locales[number];
export const defaultLocale = "zh";
