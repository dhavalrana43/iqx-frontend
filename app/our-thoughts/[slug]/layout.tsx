import React from "react";

const OurThoughtsDetailsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

export default OurThoughtsDetailsLayout;
