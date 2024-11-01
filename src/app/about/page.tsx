"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutHeroSection from '@/components/about-page/about-hero-section'
import AboutProduct from '@/components/about-page/about-product';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import React from 'react'

const About = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <AboutHeroSection />
      <AboutProduct router={router} />
      <Footer />
    </>
  )
}

export default About