"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divider } from "@heroui/divider";
import * as motion from "motion/react-client"; // Importing motion utilities
import { useInView } from "framer-motion";
import clsx from "clsx";

const FactCard = ({ facts }: any) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target1 = parseInt(facts?.counter1?.replace(/\D/g, ""), 10); // Extract numeric value
      const target2 = parseInt(facts?.counter2?.replace(/\D/g, ""), 10) || 0; // Extract numeric value
      const duration = 2000; // Duration of the animation in milliseconds
      const interval = 10; // Interval between updates in milliseconds
      const steps1 = Math.ceil(duration / interval);
      const steps2 = Math.ceil(duration / interval);
      const increment1 = target1 / steps1;
      const increment2 = target2 / steps2;

      let current1 = 0;
      let current2 = 0;

      const timer1 = setInterval(() => {
        current1 += increment1;
        setCounter1(Math.min(Math.round(current1), target1));
        if (current1 >= target1) clearInterval(timer1);
      }, interval);

      const timer2 = setInterval(() => {
        current2 += increment2;
        setCounter2(Math.min(Math.round(current2), target2));
        if (current2 >= target2) clearInterval(timer2);
      }, interval);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }
  }, [isInView, facts?.counter1, facts?.counter2]);

  const variantFactClassName =
    facts?.variant?.Variant && typeof facts?.variant?.Variant === "string"
      ? `custom-bg-${facts?.variant?.Variant.toLowerCase()}`
      : "custom-bg-gradient";

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1 } : {}}
      className={clsx(
        "py-8 px-12 flex flex-col justify-center rounded-lg gap-8 lg:col-span-2",
        variantFactClassName,
      )}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <div className="flex lg:items-center flex-row items-center lg:flex-row">
          {facts?.pre1 && (
            <h3
              dangerouslySetInnerHTML={{
                __html: facts?.pre1,
              }}
              className="text-4xl font-bold fact-title pr-2 lg:pr-4 "
            />
          )}
          {counter1 && (
            <h3
              dangerouslySetInnerHTML={{
                __html: counter1,
              }}
              className="text-8xl font-bold fact-title"
            />
          )}
          {facts?.operator1 && (
            <h3
              dangerouslySetInnerHTML={{
                __html: facts?.operator1,
              }}
              className="text-4xl font-bold fact-title pl-2 lg:pl-4 "
            />
          )}
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: facts?.detail1,
          }}
          className="text-sm"
        />
      </div>
      {counter2 != null && counter2 !== 0 && (
        <>
          <Divider />
          <div className="flex flex-col">
            <div className="flex">
              {facts?.pre2 && (
                <h3
                  dangerouslySetInnerHTML={{
                    __html: facts?.pre2,
                  }}
                  className="text-4xl font-bold fact-title pr-2 lg:pr-4 "
                />
              )}
              {counter2 && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: counter2,
                  }}
                  className="text-8xl font-bold fact-title"
                />
              )}
              {facts?.operator2 && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: facts?.operator2,
                  }}
                  className="text-8xl font-bold fact-title"
                />
              )}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: facts?.detail2,
              }}
              className="text-sm"
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default FactCard;
