"use client";
import React from "react";

import HeroSection from "@/_components/hero-section/HeroSection";
import ContactUsForm from "@/_components/contact-us-form/ContactUsForm";

import ContactInfo from "./_components/ContactInfo";

const ContactUsPage = (props: any) => {
  const { heroBanner, contactInfo, theme, contactForm } = props;

  return (
    <section className="flex flex-col items-center justify-center">
      {heroBanner && <HeroSection {...(heroBanner ?? "")} theme={theme} />}
      {contactForm && <ContactUsForm {...contactForm} />}
      {contactInfo && <ContactInfo addressData={contactInfo} />}
    </section>
  );
};

export default ContactUsPage;
