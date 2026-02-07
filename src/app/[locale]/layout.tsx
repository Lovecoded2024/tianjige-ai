import {locales} from "../../i18n";
import "../../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
 
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
