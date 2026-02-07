import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileCards from "@/components/ProfileCards";
import WhyTAC from "@/components/WhyTAC";
import StackedScrollCards from "@/components/StackedScrollCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Mentors from "@/components/Mentors";
import Partners from "@/components/Partners";
import StudentWorks from "@/components/StudentWorks";
import Tacathon from "@/components/Tacathon";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTAC />
      <StackedScrollCards />  
      <Partners />
      <Mentors />
      <StudentWorks />
      <Tacathon />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
