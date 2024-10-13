import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import assetImg from "../assets/images/vector/asset2.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "Welcome to the Official Website of the Kushiara Welfare ASSOCIATION (KUSWA)";

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;

    if (!isSmallScreen) {
      // Typewriter effect for larger screens
      let index = 0;
      const timer = setInterval(() => {
        setText(fullText.substring(0, index + 1));
        index += 1;
        if (index === fullText.length) {
          clearInterval(timer);
        }
      }, 50); // Adjust typing speed here

      return () => clearInterval(timer);
    } else {
      // Directly set the full text for small screens
      setText(fullText);
    }
  }, [fullText]);

  return (
    <section className="py-12 sm:px-8 md:px-16 lg:px-24">
      {/* Main Heading with conditional Typewriter Effect */}
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 whitespace-normal text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-red-600">{text}</span>
      </motion.h1>
      <div className="md:flex container m-auto">
        <img
          src={assetImg}
          alt="Taekwondo"
          className="object-contain aspect-auto h-auto w-[28rem]"
        />
        <div className="mx-auto text-justify">
          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed  mx-auto px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Welcome to the official website of the Kushiara Welfare Association
            (KUSWA), a dedicated student welfare association focused on the
            well-being and growth of its members. Our mission is to foster a
            supportive community where students can thrive both academically and
            personally. At KUSWA, we believe in empowering young individuals to
            excel through education, collaboration, and leadership development.
            <br />
            <br />
            As a student welfare association, we offer a variety of programs and
            resources aimed at helping students succeed. From scholarships and
            mentorship opportunities to community service projects, KUSWA is
            committed to making a positive impact on students' lives and their
            future aspirations.
          </motion.p>
        </div>
      </div>
      {/* Closing Note */}
      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl italic text-red-600 mx-auto text-center px-4 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Thank you for visiting our website. Together, let’s continue the legacy
        of excellence in KUSWA. */}
        Thank you for visiting our website and taking the time to learn about
        the Kushiara Welfare Association (KUSWA). Your support and engagement
        are vital to the continued success of our mission to empower students
        and create positive change. Together, we can uphold the legacy of
        excellence that KUSWA stands for, fostering a community where students
        can thrive academically, personally, and socially. We invite you to join
        us on this journey, contribute to our initiatives, and help shape the
        future of our association. Together, let’s continue to make a lasting
        impact through education and collaboration.
      </motion.p>
    </section>
  );
};

export default Hero;
