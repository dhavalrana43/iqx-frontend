"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

import SearchIcon from "@/_svg/Search Icon";
import BLogMenu from "@/_svg/BLogMenu";
import HeroSection from "@/_components/hero-section/HeroSection";
import BlogCard from "@/_components/blog-card/BlogCard";

const OurThoughtsPage = ({
  blogs,
  heroBannerData,
  topics,
  industries,
  types,
}: any) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchBlog, setSearchBlog] = useState("");

  const filteredBlogs = blogs.filter((blog: any) => {
    return (
      (selectedTopic === "" ||
        blog.topics.some((t: any) => t.name === selectedTopic)) &&
      (selectedIndustry === "" ||
        blog.industries.some((i: any) => i.name === selectedIndustry)) &&
      (selectedType === "" ||
        blog.types.some((t: any) => t.name === selectedType)) &&
      (searchBlog === "" ||
        blog.title.toLowerCase().includes(searchBlog.toLowerCase()))
    );
  });

  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection {...(heroBannerData?.heroBanner ?? "")} />

      <div className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full">
              <div className="relative w-full col-span-2 flex items-center gap-3">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  className="w-full px-10 py-3 bg-white text-black border border-neutral-200 rounded focus:outline-none"
                  placeholder="Search for an entry"
                  onChange={(e) => setSearchBlog(e.target.value)}
                />

                <div className="block lg:hidden ml-3">
                  <Popover showArrow offset={10} placement="bottom">
                    <PopoverTrigger>
                      <Button className="bg-transparent">
                        <BLogMenu />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-screen">
                      <div className="px-1 py-2 w-full">
                        <div className="mt-2 flex flex-col gap-5">
                          <select
                            className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                          >
                            <option value="">Topic</option>
                            {topics?.map((topic: any, index: number) => (
                              <option key={index} value={topic.name}>
                                {topic.name}
                              </option>
                            ))}
                          </select>

                          <select
                            className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                            value={selectedIndustry}
                            onChange={(e) =>
                              setSelectedIndustry(e.target.value)
                            }
                          >
                            <option value="">Industry</option>
                            {industries?.map((industry: any, index: number) => (
                              <option key={index} value={industry.name}>
                                {industry.name}
                              </option>
                            ))}
                          </select>

                          <select
                            className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                          >
                            <option value="">Type</option>
                            {types?.map((type: any, index: number) => (
                              <option key={index} value={type.name}>
                                {type.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="hidden lg:block">
                <select
                  className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <option value="">Topic</option>
                  {topics?.map((topic: any, index: number) => (
                    <option key={index} value={topic.name}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden lg:block">
                <select
                  className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  <option value="">Industry</option>
                  {industries?.map((industry: any, index: number) => (
                    <option key={index} value={industry.name}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden lg:block">
                <select
                  className="w-full py-3 px-3 rounded bg-white text-black border border-neutral-200"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Type</option>
                  {types?.map((type: any, index: number) => (
                    <option key={index} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog: any, index: number) => (
                  <BlogCard key={blog.documentId + index} {...blog} />
                ))
              ) : (
                <p className="text-center text-black text-xl font-semibold col-span-3">
                  No blogs found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurThoughtsPage;
