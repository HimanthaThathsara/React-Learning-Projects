import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import BottomToTop from "./Animations/BottomToTop";
import Portfolio from "./pages/Portfolio/Portfolio";
import ContactUs from "./pages/ContactUs/ContactUs";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./Hooks/usePreventScrolling";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <ScrollToTop />
        <BottomToTop fromY={100} delay={0.4} duration={0.4}>
          <Navbar />
        </BottomToTop>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
