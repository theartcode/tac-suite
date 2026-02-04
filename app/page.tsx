import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileCards from "@/components/ProfileCards";
import WhyTAC from "@/components/WhyTAC";
import StackedScrollCards from "@/components/StackedScrollCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfileCards />
      <WhyTAC />
      <StackedScrollCards />
      <Testimonials />
      <Footer />
    </>
  );
}
