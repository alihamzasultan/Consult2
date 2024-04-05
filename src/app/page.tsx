
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import CardStackDemo from "@/components/cardsection";
import NewSection from "@/components/newsection";
import Reviews from "@/components/reviews";
import Skills from "@/components/skills";




import UpcomingWebinars from "@/components/ui/UpcomingWebinars";






export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) bg-black text-white">
      
      <HeroSection/>
      <NewSection />
      <UpcomingWebinars />
      <CardStackDemo />
      <Skills/>
      <Reviews/>
      <Footer/>
     
   
    </main>


  );
}
