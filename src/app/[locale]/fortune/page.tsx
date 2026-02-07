import {getTranslations} from "next-intl/server";

export default async function FortunePage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Fortune"});
  
  return (
    <main className="min-h-screen gradient-mesh pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-display font-bold text-center mb-8">
          {t("title")}
        </h1>
        
        <div className="glass rounded-2xl p-8">
          <p className="text-center text-gray-500">
            八字分析功能开发中...
          </p>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    {locale: "zh"},
    {locale: "en"},
    {locale: "ja"},
    {locale: "ko"}
  ];
}
