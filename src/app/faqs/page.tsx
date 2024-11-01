"use client"
import FaqsBody from "@/components/faqs-page/faqs-body"
import FaqsHeroSection from "@/components/faqs-page/faqs-hero-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

const page = () => {
  return (
    <>
      <Header />
      <FaqsHeroSection />
      <FaqsBody/>
      <Footer />
    </>
  )
}

export default page