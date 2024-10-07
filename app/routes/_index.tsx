import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar";
import CustomerReviews from "~/sections/CustomerReviews";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";
import PopularProducts from "~/sections/PopularProducts";
import SuperQuality from "~/sections/SuperQuality";
import Services from "~/sections/Services";
import Subscribe from "~/sections/Subscribe";
import SpecialOps from "~/sections/SpecialOps";

export const meta: MetaFunction = () => {
  return [
    { title: "Stride" },
    { name: "description", content: "Welcome to Stride!" },
  ];
};

export default function Index() {
  return (
      <main className="relative">
        <NavBar />
        {/* Check tailwind.css */}
        <div className="xl:padding-1 wide:padding-r padding-b"> 
          <Hero />
        </div>
        <div className="padding">
          <PopularProducts />
        </div>
        <div className="padding">
          <SuperQuality />
        </div>
        <div className="padding-x py-10">
          <Services />
        </div>
        <div className="padding">
          <SpecialOps />
        </div>
        <div className="padding bg-pale-blue">
          <CustomerReviews />
        </div>
        <div className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </div>
        <div className="bg-black padding-x padding-t pb-8 text-white">
          <Footer />
        </div>
      </main>
  );
}

