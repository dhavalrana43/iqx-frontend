import React from "react";

const ProcessCard = (props: any) => {
  const { title, description } = props;

  return (
    <div
      aria-label="process-card"
      className="rounded-xl transition-all bg-white  h-full ease-in-out relative group overflow-hidden process-card"
    >
      <div className="h-full">
        <div className=" left-0 top-0 p-8 z-[1] h-full flex   transition-all  ease-in-out w-full  ">
          <div className="absolute left-0 top-full z-[2] rounded-xl  group-hover:top-0 transition-all  ease-in-out h-full w-full  bg-gradient-to-t from-light-blue via-light-purple to-pink opacity-90 " />
          <div className="flex flex-col h-full gap-7 justify-between text-black relative z-50  w-full group-hover:text-white transition-all  ease-in-out">
            {title && <h5 className=" text-lg font-semibold">{title}</h5>}

            {description && (
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-base font-normal "
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
