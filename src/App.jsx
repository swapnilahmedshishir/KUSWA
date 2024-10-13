import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TnC";
import RefundPolicy from "./components/Refund";
import AthleteForm from "./components/AtheleteForm";
import CoachForm from "./components/CoachForm";
import Event from "./components/Event";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Gallery />
              <Hero />
            </>
          }
        />{" "}
        {/* Home Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route path="/event" element={<Event />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<AthleteForm />} />
        <Route path="/register-coach" element={<CoachForm />} />
        {/* Register Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
        {/* <Route path="/test" element={<TestForm />} /> */}
        {/* Temporary Donate */}
        {/* <Route path="/donate" element={<DonationPage />} /> */}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 errors */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
