import AboutSection from "@/components/about";
import ContactForm from "@/components/EmailForm";
import HomepageCarousel from "@/components/page";
import WhyChooseSection from "@/components/why-choose-section";

export default function Home() {
  return (
    <div >
      <HomepageCarousel />
      <AboutSection />
            <WhyChooseSection />
      <ContactForm />

    </div>
  );
}
