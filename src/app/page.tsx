"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Headers from "@/components/headers";
import { useRouter } from "next/navigation";
import HeroSection from '@/components/home-page/hero-section';
import HomeStories from '@/components/home-page/home-stories';
import ShopNow from "@/components/home-page/shop-now";
import Mission from "@/components/home-page/mission";
import VisitShop from "@/components/home-page/visit-shop";
import ProductReview from "@/components/home-page/product-review";
import Footer from "@/components/footer";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Headers />
      <HeroSection router={router}/>
      <HomeStories router={router}/>
      <ShopNow router={router}/>
      <Mission/>
      <VisitShop router={router}/>
      <ProductReview />
      <Footer router={router} />
    </>
  );
}
