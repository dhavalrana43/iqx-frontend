"use client";
import { Button } from "@heroui/button";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { PressEvent } from "@react-types/shared";
import "./CustomButton.scss";

type Props = {
  btnText?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: PressEvent) => void;
  role?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  isExternal?: boolean | null;
  isOutline?: boolean;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const CustomButton = ({
  btnText,
  className = "",
  children,
  onClick,
  role = "button",
  disabled,
  fullWidth,
  href,
  isExternal = false,
  isOutline = false,
  variant,
  type,
  ...otherProps
}: Props) => {
  const variantClassName =
    variant && typeof variant === "string"
      ? `btn-${variant.toLowerCase()}`
      : "btn-gradient";

  const commonSettings = {
    className: clsx(
      "btn",
      variantClassName,
      className,
      isOutline && "btn-outline",
    ),
    disabled,
    fullWidth,
    isDisabled: disabled,
    role,
    onPress: onClick || undefined,
    type,
    ...otherProps,
  };

  return (
    <>
      {href ? (
        <Button
          as={Link}
          href={href}
          radius="full"
          target={isExternal ? "_blank" : "_self"}
          {...commonSettings}
        >
          <span>{children || btnText || ""}</span>
        </Button>
      ) : (
        <Button radius="full" {...commonSettings}>
          <span>{children || btnText || ""}</span>
        </Button>
      )}
    </>
  );
};

export default CustomButton;
