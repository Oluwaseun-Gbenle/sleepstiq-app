"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopHeroSection from '@/components/shop-page/shop-hero-section'
import ShopProduct from '@/components/shop-page/shop-product';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import React from 'react'

const Shop = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <ShopHeroSection />
      <ShopProduct router={router} />
      <Footer />
    </>
  )
}

export default Shop