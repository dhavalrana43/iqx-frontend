"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Chip } from "@heroui/chip";

import CustomButton from "@/_components/custom-button/CustomButton";
import CustomImage from "@/_components/custom-image/CustomImage";

const AluminiForm = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting] = useState(true);

  const onFormSubmit = () => {};
  const theme = props?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section aria-label="contact us header" className="w-full py-16 lg:py-24 ">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="py-24 px-5 lg:px-10 bg-white">
          <div className="flex flex-col gap-16  max-w-[calc(768px-2.5rem)] lg:ml-auto">
            <div className="flex flex-col gap-6">
              <Chip
                classNames={{
                  base: `${themeClassName} rounded-small py-3 px-1 mb-4`,
                  content: "text-white text-base uppercase font-bold",
                }}
                size="lg"
              >
                JOIN OUR ALUMNI.
              </Chip>
              <h3 className="text-2xl text-black font-medium">
                Experience the power of lifelong connections, join our network
                today.
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-chrome py-24 px-5 lg:px-10 ">
          {!isSubmitting ? (
            <div className="flex flex-col gap-9 max-w-[calc(768px-2.5rem)] lg:mr-auto">
              <div>
                <h2 className="text-lg  lg:text-2xl font-medium text-steel">
                  Sign me up!
                </h2>
                <p className="text-black">
                  Please complete the following to register.
                </p>
              </div>
              <form
                className="grid lg:grid-cols-2 grid-cols-1 gap-6"
                name="contact"
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="text-black text-base font-bold	"> Name</div>
                  <input
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter your name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600 font-medium	">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5 ">
                  <div className="text-black text-base font-bold"> Email</div>
                  <input
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 font-medium	">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="text-black text-base font-bold	">
                    Contact number
                  </div>
                  <input
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter your name"
                    type="text"
                    {...register("contact", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600 font-medium	">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5 ">
                  <div className="text-black text-base font-bold">
                    {" "}
                    Id number
                  </div>
                  <input
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter your email"
                    type="email"
                    {...register("id", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 font-medium	">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 ">
                  <div className="text-black text-base font-bold">
                    Dates of employment at iqbusiness*
                  </div>
                  <input
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter your email"
                    type="email"
                    {...register("employment", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 font-medium	">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5 lg:col-span-2">
                  <div className="text-black text-base font-bold">
                    How can we help you ?
                  </div>
                  <textarea
                    className="w-full py-2.5 px-4 rounded bg-white text-black border border-neutral-200 hover:border-steel focus:border-steel"
                    placeholder="Enter message"
                    rows={3}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-600 font-medium	">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <CustomButton
                    btnText={isSubmitting ? "Submitting..." : "Submit"}
                    disabled={isSubmitting}
                    isExternal={false}
                    type="submit"
                    variant={"gradient"}
                  />
                </div>
              </form>
              <p className="text-black font-semibold	">
                Our Alumni Network is only open to current or previous
                iqbusiness employees!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              <CustomImage
                alt={"image"}
                className="w-full h-auto text-black"
                height={336}
                src={"/uploads/video2_c52b30ba79.jpg"}
                width={616}
              />
              <p className="text-black font-semibold text-sm text-center">
                Thank you for joining the iqbusiness Alumni programme! We look
                forward to connecting with you again.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AluminiForm;
