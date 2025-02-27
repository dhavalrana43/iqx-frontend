"use client";
import axios from "axios";
import clsx from "clsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { saveContactFormData } from "@/_service/contact";
import CustomButton from "@/_components/custom-button/CustomButton";
import CustomImage from "@/_components/custom-image/CustomImage";
import FallbackImage from "@/_images/default.jpg";

const ContactForm = (props: any) => {
  const { contactFormTitle, contactFormEmail, variant, contactFormImage } =
    props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFormSubmit = async (formData: any) => {
    setIsSubmitting(true);
    try {
      await saveContactFormData({ data: formData });

      await axios.post("/api/email", {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        subject: "New Inquiry from Contact Form",
        toEmail: contactFormEmail,
        formData,
      });

      reset();
    } catch (error) {
      throw new Error(
        (error as Error).message || "Error during form submission",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-label="Contact Form"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-8 lg:pr-12">
            {contactFormTitle && (
              <h2
                dangerouslySetInnerHTML={{ __html: contactFormTitle }}
                className="text-xl font-medium lg:text-2xl"
              />
            )}
            <form
              className="grid lg:grid-cols-2 grid-cols-1 gap-6"
              name="contact"
              onSubmit={handleSubmit(onFormSubmit)}
            >
              <div className="flex flex-col gap-1.5">
                <div className="text-neutral-800 text-base font-bold">Name</div>
                <input
                  className="w-full py-2.5 px-4 rounded bg-white text-neutral-800 border border-neutral-200 hover:border-steel focus:border-steel"
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
                <div className="text-neutral-800 text-base font-bold">
                  Email
                </div>
                <input
                  className="w-full py-2.5 px-4 rounded bg-white text-neutral-800 border border-neutral-200 hover:border-steel focus:border-steel"
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

              <div className="flex flex-col gap-1.5 lg:col-span-2">
                <div className="text-neutral-800 text-base font-bold">
                  Query type
                </div>
                <select
                  className="w-full py-2.5 px-4 rounded bg-white text-neutral-800 border border-neutral-200 hover:border-steel focus:border-steel"
                  {...register("service", { required: true })}
                >
                  <option disabled>Select</option>
                  <option>General Enquiry</option>
                  <option>Consulting Service</option>
                  <option>Career Opportunities</option>
                  <option>IQ business insights</option>
                  <option>Midnight</option>
                </select>
                {errors.service && (
                  <span className="text-red-600 font-medium	">
                    Select a query type
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5 lg:col-span-2">
                <div className="text-neutral-800 text-base font-bold">
                  How can we help you?
                </div>
                <textarea
                  className="w-full py-2.5 px-4 rounded bg-white text-neutral-800 border border-neutral-200 hover:border-steel focus:border-steel"
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
          </div>
          {contactFormImage && (
            <div>
              <CustomImage
                alt={contactFormImage?.alternativeText ?? "image"}
                className="max-w-full h-auto rounded-2xl"
                height={contactFormImage.height ?? 504}
                src={contactFormImage?.url || FallbackImage}
                width={contactFormImage.width ?? 638}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
