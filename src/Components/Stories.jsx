import React from "react";
import Title from "../Utlis/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

const Stories = ({ Stories: { title, news } }) => {
  return (
    <div className="nike-container mb-11">
      <Title />
      <div>
        <Splide>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-1">
              <div className=" relative grid items-center gap-4 pb-6 rounded-lg shadow-slate-300 ring-1 ring-slate-200">
                <div className="flex justify-center items-center">
                  <img
                    src={val.img}
                    alt={`stories/img ${i}`}
                    className=" object-contain w-full h-auto shadow-md shadow-slate-300 rounded-tl-lg rounded-tr-lg"
                  />
                </div>

                <div  className="flex justify-between items-center w-full px-4">
                  <div className="flex items-center gap-0.5">
                    {" "}
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />{" "}
                    <span className="text-xs font-bold"> {val.like} </span>{" "}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {" "}
                    <ClockIcon className="icon-style text-black w-4 h-4" />{" "}
                    <span className="text-xs font-bold"> {val.time} </span>{" "}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {" "}
                    <HashtagIcon className="icon-style text-blue-500" />{" "}
                    <span className="text-xs font-bold text-blue-700"> {val.by} </span>{" "}
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <h1> {val.title} </h1>
                  <p> {val.text} </p>
                </div>
                <div>
                  <a href={val.url}> {val.btn} </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
