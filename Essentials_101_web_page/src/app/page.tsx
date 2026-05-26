import Header from "@/components/sections/header";
import Footer from "@/components/sections/Footer";
import PortfolioGrid from "@/components/sections/portfolio-grid";

export default function Home() {
  return (

    <div className="max-h-screen bg-black text-white">
      <Header />
      <main className="flex flex-col gap-12 py-10">
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  );
}
