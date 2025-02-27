"use client";
import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import { contactUsFormType } from "@/_types/contact-us-form";
import { saveContactFormData } from "@/_service/contact";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";
import CustomButton from "../custom-button/CustomButton";

const ContactUsForm = (props: contactUsFormType) => {
  const { details, form, image, buttonVarient, variant } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const pathName = usePathname();

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const onFormSubmit = async (data: any) => {
    await saveContactFormData({
      title: form?.title,
      key: form?.documentId,
      origin: pathName,
      data: data,
    }).then(() => reset());

    // await axios.post("/api/email", {
    //   data,
    // });
  };

  return (
    <section
      aria-label="contact us form"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 lg:pr-10">
            <div className="flex flex-col gap-8 max-w-screen-xl">
              {details?.title && (
                <h2
                  dangerouslySetInnerHTML={{ __html: details?.title }}
                  className="text-xl font-medium	lg:text-2xl"
                />
              )}
              {details?.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                  className="content"
                />
              )}
              <form
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                onSubmit={handleSubmit(onFormSubmit)}
              >
                {form?.formFields?.map((formItem, index) => {
                  let fieldElement;

                  if (formItem?.__component === "forms.textarea") {
                    fieldElement = (
                      <textarea
                        className="w-full border p-2 rounded bg-white text-black"
                        placeholder={formItem?.placeholder}
                        rows={3}
                        {...register(
                          `${formItem?.label}`,
                          formItem?.required
                            ? {
                                required:
                                  formItem?.errorMessage ||
                                  "This field is required",
                              }
                            : {},
                        )}
                      />
                    );
                  } else if (formItem?.__component === "forms.dropdown") {
                    fieldElement = (
                      <select
                        className="w-full border p-2 rounded bg-white text-black"
                        {...register(
                          `${formItem?.label}`,
                          formItem?.required
                            ? {
                                required:
                                  formItem?.errorMessage ||
                                  "This field is required",
                              }
                            : {},
                        )}
                      >
                        {formItem?.options?.map(
                          (
                            option: { id?: string; description?: string },
                            i: number,
                          ) => (
                            <option
                              key={i}
                              className="text-red"
                              value={option?.description}
                            >
                              {option?.description}
                            </option>
                          ),
                        )}
                      </select>
                    );
                  } else if (formItem?.__component === "forms.input") {
                    fieldElement = (
                      <input
                        className="w-full border p-2 rounded bg-white text-black"
                        placeholder={formItem?.placeholder}
                        type="text"
                        {...register(
                          `${formItem?.label}`,
                          formItem?.required
                            ? {
                                required:
                                  formItem?.errorMessage ||
                                  "This field is required",
                              }
                            : {},
                        )}
                      />
                    );
                  } else {
                    fieldElement = (
                      <input
                        className="w-full border p-2 rounded bg-white text-black"
                        placeholder={formItem?.placeholder}
                        type="text"
                        {...register(
                          `${formItem?.label}`,
                          formItem?.required
                            ? {
                                required:
                                  formItem?.errorMessage ||
                                  "This field is required",
                              }
                            : {},
                        )}
                      />
                    );
                  }

                  return (
                    <div
                      key={index}
                      className={clsx(
                        "flex flex-col gap-2 col-span-1",
                        formItem?.fullWidth ? "lg:col-span-2" : "lg:col-span-1",
                      )}
                    >
                      <label className="font-bold text-base">
                        {formItem?.label}
                        {formItem?.required && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      {fieldElement}
                      {formItem?.label && errors[formItem.label]?.message && (
                        <span className="text-red-500">
                          {(errors[formItem.label] as any).message.toString()}
                        </span>
                      )}
                    </div>
                  );
                })}

                <div className="lg:col-span-2">
                  <CustomButton type="submit" variant={buttonVarient?.Variant}>
                    Submit
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-4">
            <CustomImage
              alt={image?.alternativeText ?? "Image"}
              className="rounded-lg"
              height={image?.height}
              src={image?.url || FallbackImage}
              width={image?.width}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
