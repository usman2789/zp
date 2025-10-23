import Header from "@/components/header";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/whatwedo";
import Process from "@/components/process";
import Call from "@/components/call";
import FAQs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WhatWeDo />
      <Process />
      <Call />
      <FAQs />
      <Footer />
    </div>
  );
}