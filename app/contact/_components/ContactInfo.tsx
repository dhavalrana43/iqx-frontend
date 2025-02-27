import { Chip } from "@heroui/chip";
import Link from "next/link";
import React from "react";

import CustomImage from "@/_components/custom-image/CustomImage";
import FallbackImage from "@/_images/default.jpg";

const ContactInfo = (props: any) => {
  const { addressData } = props;
  const theme = props?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section aria-label="Contact Info" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {addressData &&
            addressData?.map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-5">
                {item?.location && (
                  <Chip
                    classNames={{
                      base: `${themeClassName} rounded-small py-3 px-1 mb-4`,
                      content: "text-white text-base uppercase font-bold",
                    }}
                    size="lg"
                  >
                    {item?.location?.toUpperCase()}
                  </Chip>
                )}

                {item.contact && (
                  <ul className="contact-list">
                    {item.contact.map((item: any, index: number) => (
                      <li key={index}>
                        {item?.address && (
                          <address
                            dangerouslySetInnerHTML={{ __html: item?.address }}
                            className="font-semibold text-white lg:text-sm not-italic"
                          />
                        )}
                        {item.contactLink && (
                          <ul className="contact-links">
                            {item.contactLink.map(
                              (item: any, index: number) => (
                                <li key={index}>
                                  <CustomImage
                                    alt={"image"}
                                    className=""
                                    height={30}
                                    src={item.icon.url || FallbackImage}
                                    width={30}
                                  />
                                  <Link
                                    className="text-base font-semibold underline underline-offset-4 hover:no-underline transition-all"
                                    href={item.url ?? "/"}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
