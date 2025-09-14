import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Support from "./components/Support";
import Footer from "./components/Footer";
import PerformanceSection from "./components/PerformanceSection";
import ProductSupportSection from "./components/ProductSupportSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PerformanceSection /> 
      <ProductSupportSection />
      <Features />
      <Support />
      <Footer />
    </>
  );
}

export default App;
