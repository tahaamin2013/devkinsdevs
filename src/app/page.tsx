import AboutSection from "@/components/about";
import ContactForm from "@/components/EmailForm";
import MeetPrincipals from "@/components/Meetour";
import HomepageCarousel from "@/components/page";
import WhyChooseSection from "@/components/why-choose-section";

export default function Home() {
  return (
    <div >
      <HomepageCarousel />
      <MeetPrincipals /> 
      <AboutSection />
            <WhyChooseSection />
      <ContactForm />
    </div>
  );
}
