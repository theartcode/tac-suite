import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileCards from "@/components/ProfileCards";
import WhyTAC from "@/components/WhyTAC";
import StackedScrollCards from "@/components/StackedScrollCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfileCards />
      <WhyTAC />
      <StackedScrollCards />
    </>
  );
}
