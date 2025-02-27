"use client";

import React from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import CustomButton from "./_components/custom-button/CustomButton";

interface ErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const router = useRouter();

  const handleReload = () => {
    router.refresh();
  };

  return (
    <div className="container mx-auto">
      <div className="text-center py-24 px-6 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {process.env.NODE_ENV === "development"
            ? error.message
            : "An error occurred. Please try again later."}
        </p>
        <div className="flex gap-4">
          <CustomButton variant="gradient" onClick={() => router.push("/")}>
            Go Home
          </CustomButton>
          <Button
            className="btn rounded-full"
            color="danger"
            onPress={handleReload}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
