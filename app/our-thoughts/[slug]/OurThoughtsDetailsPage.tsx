import React from "react";

import HeroSection from "@/_components/hero-section/HeroSection";

const OurThoughtsDetailsPage = ({ pageData }: any) => {
  const { bannerImage, title, date, readingTime, author, content } = pageData;

  return (
    <>
      <HeroSection image={bannerImage} title={title} />
      <div className="w-full py-16 lg:py-24 bg-white text-steel">
        <div className="container mx-auto ">
          <div className="mb-10">
            <ul className="blogs-meta">
              {date && <li>{new Date(date).toLocaleDateString()}</li>}
              {readingTime && <li>{readingTime} read</li>}
              {author && (
                <li>
                  <strong>Author:</strong> {author}
                </li>
              )}
            </ul>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="content"
          />
        </div>
      </div>
    </>
  );
};

export default OurThoughtsDetailsPage;
