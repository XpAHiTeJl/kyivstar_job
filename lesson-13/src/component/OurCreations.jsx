import React from "react";
import "./OurCreations.css";

import deepEarthImg from "./../img/image-deep-earth.jpg";
import nightarcade from "./../img/image-night-arcade.jpg";
import soccerteamvr from "./../img/image-soccer-team.jpg";
import thegrid from "./../img/image-grid.jpg";
import fromupabovevr from "./../img/image-from-above.jpg";
import pocketborealis from "./../img/image-pocket-borealis.jpg";
import thecuriosity from "./../img/image-curiosity.jpg";
import makeitfisheye from "./../img/image-fisheye.jpg";

import deepEarthImgMobile from "./../imgMobile/image-deep-earth.jpg";

const data = [
  {
    name: "deep earth",
    imgSrc: deepEarthImg,
    imgSrcMobile: deepEarthImgMobile,
  },
  { name: "night arcade", imgSrc: nightarcade },
  { name: "soccer team vr", imgSrc: soccerteamvr },
  { name: "the grid", imgSrc: thegrid },
  { name: "from up above vr", imgSrc: fromupabovevr },
  { name: "pocket borealis", imgSrc: pocketborealis },
  { name: "the curiosity", imgSrc: thecuriosity },
  { name: "make it fisheye", imgSrc: makeitfisheye },
];

export default function OurCreations() {
  return (
    <div className="mt-16 grid grid-cols-1  lg:grid-cols-4 gap-4  ">
      {data.map((item, index) => (
        <div
          key={index}
          className=" lg:w-4/6 rounded overflow-hidden shadow-lg relative group "
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={item.imgSrcMobile} />
            <img
              className="group-hover:opacity-50 transition duration-300 ease-in-out"
              src={item.imgSrc}
              alt={item.name}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent"></div>
          <span className="uppercase absolute text-xl mb-5 bottom-0 left-7 w-28	 text-white group-hover:text-black transition duration-300 ease-in-out">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
