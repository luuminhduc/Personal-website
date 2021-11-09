import React, { useState } from "react";
import MySkills from "../MySkills";
import MyWork from "../MyWork";

const MainSection = ({ isLight }) => {
  const sectionArr = ["My work", "My skills", "About", "Contact"];
  const [current, setCurrent] = useState("My work");

  const getSection = () => {
    switch (current) {
      case "My work":
        return <MyWork isLight={isLight} />;
      default:
        return <MySkills isLight={isLight} />;
    }
  };

  return (
    <div className={``}>
      <div
        className={`w-full flex flex-row justify-start items-center border-solid pb-6 ${
          isLight ? "border-gray-200" : "border-gray-700"
        } border-b`}
      >
        {sectionArr.map((item) => (
          <div
            className={`mr-10 cursor-pointer relative ${
              current === item && "text-blue-500"
            }`}
            onClick={() => setCurrent(item)}
            key={item}
          >
            <p>{item}</p>
            {item === current && (
              <div className="absolute transform translate-y-0.5 -bottom-6 left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20">{getSection()}</div>
    </div>
  );
};

export default MainSection;
