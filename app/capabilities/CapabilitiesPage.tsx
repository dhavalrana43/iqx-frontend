import Link from "next/link";
import React from "react";

import HeroSection from "@/_components/hero-section/HeroSection";
import CustomImage from "@/_components/custom-image/CustomImage";
import FallbackImage from "@/_images/default.jpg";

const CapabilitiesPage = ({ pageData }: any) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection
        image={{
          alternativeText: "OUR CAPABILITIES",
          url: "/uploads/banner_business_agility_c00864857f.png",
        }}
        title={"OUR CAPABILITIES"}
      />
      <div className="w-full py-16 lg:py-24 bg-chrome">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {pageData.map((item: any, index: number) => {
              return (
                <Link
                  key={item.documentId + index}
                  className="bg-transparent rounded-lg flex flex-col transition-all p-px hover:bg-gradient-to-tr from-light-blue via-light-purple to-pink"
                  href={item.slug ? "/capabilities/" + item.slug : "/"}
                >
                  <div className="bg-white flex flex-col rounded-lg h-full gap-8">
                    <CustomImage
                      className="w-full object-cover h-72 rounded-t-lg bg-steel"
                      src={item.heroBanner?.image?.url || FallbackImage}
                    />
                    <div className="p-6 flex flex-col gap-3 text-steel">
                      <h4 className="text-sm font-semibold">{item?.title}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPage;
