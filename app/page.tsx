import { Hero } from "@/components/hero";
import { Lookbook } from "@/components/lookbook";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Lookbook />
      </main>
      <SiteFooter />
    </>
  );
}
