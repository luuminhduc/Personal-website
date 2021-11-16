import React from "react";
import Bds from "../../assets/images/bat-dong-san.png";
import ECom from "../../assets/images/e-com.png";
import EComDash from "../../assets/images/e-dashboard.png";
import Todo from "../../assets/images/todo.png";
import Calculator from "../../assets/images/calculator.png";
import Gallery from "../../assets/images/gallery.png";
import Insta from "../../assets/images/insta.png";
import KeoBua from "../../assets/images/keo-bua-bao.png";
import Student from "../../assets/images/student.png";
import Sunshie from "../../assets/images/sunshine.png";
import Movie from "../../assets/images/movieApp.png";
import Memory from "../../assets/images/memory.png";

const MyWork = ({ isLight }) => {
  const workArrs = [
    {
      name: "E-commerce",
      skills: ["React", "Tailwind", "Firebase", "Redux"],
      url: "https://shopping-site-xi.vercel.app/",
      img: ECom,
    },
    {
      name: "E-commerce dashboard",
      skills: ["React", "Tailwind", "Firebase", "Redux"],
      url: "https://11st-dashboard.vercel.app/home",
      img: EComDash,
    },
    {
      name: "Bat Dong San",
      skills: ["React", "Tailwind", "Firebase", "Redux"],
      url: "https://thue-phong.vercel.app",
      img: Bds,
    },
    {
      name: "Instagram-clone",
      skills: ["React", "Tailwind", "Firebase", "Redux"],
      url: "https://instagram-clone-gilt-nine.vercel.app/",
      img: Insta,
    },
    {
      name: "Calculator",
      skills: ["React", "Sass"],
      url: "https://calculator-nine-rouge.vercel.app/",
      img: Calculator,
    },
    {
      name: "Todo app",
      skills: ["React", "Sass", "Firebase", "Redux"],
      url: "https://todo-app-with-auth.vercel.app/",
      img: Todo,
    },
    {
      name: "Keo bua bao",
      skills: ["React", "Sass"],
      url: "https://rock-scissor.vercel.app/",
      img: KeoBua,
    },
    {
      name: "Quan tri hoc sinh",
      skills: ["React", "Tailwind", "Firebase", "Redux"],
      url: "https://student-management-with-auth.vercel.app/",
      img: Student,
    },
    {
      name: "Sunshine website",
      skills: ["React", "Sass"],
      url: "https://sunshine-website.vercel.app/",
      img: Sunshie,
    },
    {
      name: "Photo gallery",
      skills: ["React", "Tailwind", "API"],
      url: "https://image-gallery-react-tailwindcss.vercel.app/",
      img: Gallery,
    },
    {
      name: "Movie app",
      skills: ["React", "Tailwind", "API", "Redux"],
      url: "https://movie-app-bay-nu.vercel.app/",
      img: Movie,
    },
    {
      name: "Memory-game",
      skills: ["React", "Tailwind", "Redux"],
      url: "https://memory-game-sigma-blond.vercel.app/",
      img: Memory,
    },
  ];
  return (
    <div className="grid gap-10 pt-28 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {workArrs.map((item, idx) => (
        <a rel="noreferrer" target="_blank" href={`${item.url}`}>
          <div
            className={`rounded-lg border hover:scale-105 transform cursor-pointer mb-3 ${
              isLight
                ? "border-gray-300 bg-white"
                : "border-gray-700 bg-gray-800"
            }`}
            key={idx}
          >
            {item.img ? (
              <img className=" rounded" src={item.img} alt="" />
            ) : (
              <div className="h-24 w-24"></div>
            )}
            <div className="p-5">
              <h3 className={`font-semibold mb-3`}>{item.name}</h3>
              <div className="flex flex-wrap">
                {item.skills.map((el, i) => (
                  <p
                    className="mr-3 px-3 py-1 bg-green-500 text-white rounded mb-1 text-xs"
                    key={i}
                  >
                    #{el}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MyWork;
