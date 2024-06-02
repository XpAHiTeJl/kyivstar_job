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
import nightarcadeMobile from "./../imgMobile/image-night-arcade.jpg";
import soccerteamvrMobile from "./../imgMobile/image-soccer-team.jpg";
import thegridMobile from "./../imgMobile/image-grid.jpg";
import fromupabovevrMobile from "./../imgMobile/image-from-above.jpg";
import pocketborealisMobile from "./../imgMobile/image-pocket-borealis.jpg";
import thecuriosityMobile from "./../imgMobile/image-curiosity.jpg";
import makeitfisheyeMobile from "./../imgMobile/image-fisheye.jpg";

const data = [
  {
    name: "deep earth",
    imgSrc: deepEarthImg,
    imgSrcMobile: deepEarthImgMobile,
  },
  {
    name: "night arcade",
    imgSrc: nightarcade,
    imgSrcMobile: nightarcadeMobile,
  },
  {
    name: "soccer team vr",
    imgSrc: soccerteamvr,
    imgSrcMobile: soccerteamvrMobile,
  },
  { name: "the grid", imgSrc: thegrid, imgSrcMobile: thegridMobile },
  {
    name: "from up above vr",
    imgSrc: fromupabovevr,
    imgSrcMobile: fromupabovevrMobile,
  },
  {
    name: "pocket borealis",
    imgSrc: pocketborealis,
    imgSrcMobile: pocketborealisMobile,
  },
  {
    name: "the curiosity",
    imgSrc: thecuriosity,
    imgSrcMobile: thecuriosityMobile,
  },
  {
    name: "make it fisheye",
    imgSrc: makeitfisheye,
    imgSrcMobile: makeitfisheyeMobile,
  },
];

export default function OurCreations() {
  return (
    <div className="mt-16 grid grid-cols-1  lg:grid-cols-4 gap-4  ">
      {data.map((item, index) => (
        <div
          key={index}
          className=" lg:w-4/6  overflow-hidden shadow-lg relative group "
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={item.imgSrcMobile} />
            <img
              className="group-hover:opacity-50 transition duration-300 ease-in-out"
              src={item.imgSrc}
              alt={item.name}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-gray-700 via-transparent to-transparent"></div>
          <span className="uppercase absolute text-xl mb-5 bottom-0 left-7 w-28	 text-white group-hover:text-black transition duration-300 ease-in-out">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
