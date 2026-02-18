import Navbar from "@/components/design/navbar";
import DesignHero from "@/components/design/hero";
import MethodologySection from "@/components/design/how";
import AdmissionCriteria from "@/components/design/admission";
import CourseEcosystem from "@/components/design/suite";

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <DesignHero />
      <MethodologySection />
      <AdmissionCriteria />
      <CourseEcosystem />
    </>
  );
}
