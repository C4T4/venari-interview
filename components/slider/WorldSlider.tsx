import React, { useRef } from "react";

import Slider from "./Slider";
import Slide from "./Slide";
import WorldSlide from "./WorldSlide";

const WorldSlider = ({}) => {
  const worlds = [
    {
      id: "tecta",
      name: "Tecta",
      assets: {
        video: "https://s3.legendsofvenari.com/worlds/tecta/tecta.mp4",
        image: "https://s3.legendsofvenari.com/worlds/tecta/tecta.png",
        stream:
          "https://s3.legendsofvenari.com/worlds/tecta/dash/tecta-manifest.mpd",
      },
      description:
        "Known as the largest city on Caerras, the City of Tecta is the original settlement of the Exodus colonists. Its flying cars, exquisite delicacies, and tall monuments would be sure to excite any visitor who’d come to visit.",
      creatures: [],
      unlockRequirement: {
        level: 1,
        type: "account level",
      },
    },
    {
      id: "ayena",
      name: "Ayena",
      assets: {
        video: "https://s3.legendsofvenari.com/worlds/ayena/ayena.mp4",
        image: "https://s3.legendsofvenari.com/worlds/ayena/ayena.png",
        stream:
          "https://s3.legendsofvenari.com/worlds/ayena/dash/ayena-manifest.mpd",
      },
      description:
        "Originally developed from a simple living area for researchers flocking to Ayena, Mirala Town is now a popular tourism location as you’d find everything you need in Mirala Town’s busy markets and be able to travel to most of Ayena’s natural wonders within a day. Don’t forget to try out their 12 Spiced Pot–the spiciest and most delicious dish you’ve ever eaten in Caerras.",
      creatures: [],
      unlockRequirement: {
        level: 7,
        type: "account level",
        world: "tecta",
      },
    },
    {
      assets: {
        video: "https://s3.legendsofvenari.com/worlds/ayena/ayena.mp4",
        image: "https://s3.legendsofvenari.com/worlds/ayena/ayena.png",
        stream:
          "https://s3.legendsofvenari.com/worlds/ayena/dash/ayena-manifest.mpd",
      },
      id: "ayena",
      name: "Ayena2",
      description:
        "Originally developed from a simple living area for researchers flocking to Ayena, Mirala Town is now a popular tourism location as you’d find everything you need in Mirala Town’s busy markets and be able to travel to most of Ayena’s natural wonders within a day. Don’t forget to try out their 12 Spiced Pot–the spiciest and most delicious dish you’ve ever eaten in Caerras.",
      creatures: [],
      unlockRequirement: {
        level: 7,
        type: "account level",
        world: "tecta",
      },
    },
    {
      assets: {
        video: "https://s3.legendsofvenari.com/worlds/ayena/ayena.mp4",
        image: "https://s3.legendsofvenari.com/worlds/ayena/ayena.png",
        stream:
          "https://s3.legendsofvenari.com/worlds/ayena/dash/ayena-manifest.mpd",
      },
      id: "ayena",
      name: "Ayena3",
      description:
        "Originally developed from a simple living area for researchers flocking to Ayena, Mirala Town is now a popular tourism location as you’d find everything you need in Mirala Town’s busy markets and be able to travel to most of Ayena’s natural wonders within a day. Don’t forget to try out their 12 Spiced Pot–the spiciest and most delicious dish you’ve ever eaten in Caerras.",
      creatures: [],
      unlockRequirement: {
        level: 7,
        type: "account level",
        world: "tecta",
      },
    },
  ];

  const slides = worlds.map((world) => {
    return <Slide key={world.name} content={<WorldSlide world={world} />} />;
  });

  interface RefObject {
    setIndex: (index: number) => void;
    index: number;
  }

  const childRef = useRef<RefObject>(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.setIndex(childRef.current.index + 1);
    }
  };

  return (
    <>
      <button
        style={{
          width: "200px",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "30px",
          marginBottom: "0px",
        }}
        onClick={() => handleClick()}
      >
        next slide from parent demo
      </button>

      <Slider ref={childRef} slides={slides}></Slider>
    </>
  );
};
export default WorldSlider;
