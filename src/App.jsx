import AboutSection from "./components/AboutSection";
import AvailableSection from "./components/AvailableSection";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import QuestionSection from "./components/QuestionSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <FeatureSection />
      <AvailableSection />
      <AboutSection />
      <CtaSection />
      <QuestionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
