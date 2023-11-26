import { Inter } from "next/font/google";
import Footer from "@/components/organisms/Footer";
import CustomButton from "../components/atom/Button/CustomButton";
import TitleProduct from "../components/atom/HeadSection/TitleProduct";
import PocoSection from "../components/organisms/Products/PocoSection";
import Header from "@/components/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-[#F7F7F7] h-60 flex flex-col items-center justify-center z-0 md:gap-2 md:p-5">
        <TitleProduct
          SeriesName="Seri Poco"
          Motto="Extreme performance, extreme price"
        />
        <div className="flex justify-center items-center py-4">
          <CustomButton
            to="/poco"
            text="Lihat semua tipe"
            order="text_first"
            icon=">"
            intent="accent_nobg"
            hover="bg_soft"
            media="mediumDark"
          />
        </div>
      </section>
      <PocoSection />
      <Footer />
    </>
  );
}
