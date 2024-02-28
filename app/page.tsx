import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statstable from "@/components/Statstable";
import Waitlist from "@/components/Waitlist";
import Collections from "@/components/Collections";

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Waitlist />
      <Collections />
      {/* <Statstable /> */}
      <Footer />
    </>
  );
}
