import React from 'react';
import HeroSection from '../Component/Landing/HeroSection';
import FeaturesGrid from '../Component/Landing/FeaturesGrid';
import DemoSection from '../Component/Landing/DemoSection';
import PricingTable from '../Component/Landing/PricingTable'; // Make sure it's imported
import Testimonials from '../Component/Landing/Testimonials';
import CtaSection from '../Component/Landing/CtaSection'
import Faq from '../Component/Landing/Faq';
import Footer from '../Component/Landing/Footer';
import Navbar from '../Component/Landing/Navbar';
import UseCases from '../Component/Landing/UseCases';
import HowItWorks from '../Component/Landing/HowItWorks';
import FeatureComparison from '../Component/Landing/FeatureComparison'
import TrustSection from '../Component/Landing/TrustSection';

const LandingPage = () => {
  return (
    <div className="font-Roboto">
    {/* Navbar with Smooth Scrolling Links */}
    <Navbar />

    {/* Hero Section */}
    <section id="home" className=" bg-white">
      <HeroSection />
    </section>

   {/* Use Cases Section */}
   <section id="use-cases" className=" bg-white">
  <UseCases />
</section>


    {/* Features Section */}
    <section id="features" className=" bg-white">
      <FeaturesGrid />
    </section>

    {/*HowItWors Section*/}
    <section id="how-it-works" className=" bg-white">
      <HowItWorks/>
    </section>

    {/* Demo Section */}
    <section id="demo" className="mb-10">
      <DemoSection />
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="mb-10">
      <PricingTable />
    </section>

    {/* FeatureComparison*/}
    <section id="FeatureComparison">
    <FeatureComparison />
    </section>

     {/*TrustSection*/}
     <section id="trustSection">
     <TrustSection/>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="mb-10">
      <Testimonials />
    </section>

    {/* CTA Section */}
    <section id="cta" className="mb-10">
      <CtaSection />
    </section>

    {/* FAQ Section */}
    <section id="faqs" className="mb-10">
      <Faq />
    </section>

    {/* Footer Section */}
    <section id="footer">
      <Footer />
    </section>
  </div>
  );
};

export default LandingPage;
