import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import SchoolsCountWrapper from "./components/SchoolsCountWrapper";
import SchoolImageCardsWrapper from "./components/SchoolImageCardsWrapper";
import Footer from "./components/Footer";

function Main() {
  return (
    <div className="">
      <Header />
      <section className="mb-8">
        <HeroSection />
      </section>
      <div className="px-2 md:px-6">
        <section className="max-w-screen-xl mx-auto mb-8">
          <Search />
        </section>
        <section className="max-w-screen-xl mx-auto">
          <SchoolsCountWrapper />
        </section>
        <section className="max-w-screen-xl mx-auto mb-8 ">
          <SchoolImageCardsWrapper />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
