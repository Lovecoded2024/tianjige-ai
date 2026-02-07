import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    {locale: "zh"},
    {locale: "en"},
    {locale: "ja"},
    {locale: "ko"}
  ];
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Home"});
  const tNav = await getTranslations({locale, namespace: "Navigation"});
  
  const features = [
    {
      title: tNav("fortune"),
      description: locale === "zh" ? "基于传统命理学的AI八字分析" : "AI-powered fortune analysis",
      href: "/fortune",
      icon: "🔮"
    },
    {
      title: tNav("artifacts"),
      description: locale === "zh" ? "根据五行喜用推荐法器" : "Artifacts recommendation",
      href: "/artifacts",
      icon: "🪄"
    },
    {
      title: tNav("master"),
      description: locale === "zh" ? "与AI大师进行命理咨询" : "Chat with AI master",
      href: "/master",
      icon: "💬"
    }
  ];
  
  return (
    <main className="min-h-screen gradient-mesh">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <div className="flex items-center space-x-4">
              <Link href="/fortune" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                {tNav("fortune")}
              </Link>
              <Link href="/artifacts" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                {tNav("artifacts")}
              </Link>
              <Link href="/master" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                {tNav("master")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[float_6s_ease-in-out_infinite]">
              {t("subtitle")}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            {t("description")}
          </p>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{animationDelay: (index * 0.1) + "s"}}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 TianJiGe. {t("description")}</p>
        </div>
      </footer>
    </main>
  );
}
