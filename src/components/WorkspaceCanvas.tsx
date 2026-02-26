"use client";

import { useRef } from "react";
import { useWorkspaceStore } from "@/store/useWorkspaceStore";
import { motion } from "framer-motion";

export default function WorkspaceCanvas() {
  const {
    desk,
    chair,
    monitors,
    lamp,
    plant,
    positions,
    setPosition,
    theme,
    background,
    lighting,
    colors,
  } = useWorkspaceStore();

  const constraintsRef = useRef(null);

  const assets = {
    chair: "https://pngimg.com/d/office_chair_PNG6897.png",
    lamp: "https://pngimg.com/d/lamp_PNG101836.png",
    plant: "https://pngimg.com/d/house_plant_PNG26.png",
  };

  const bgImages = {
    office:
      "https://media.istockphoto.com/id/1535511484/photo/tv-cabinet-in-a-scandinavian-decor-living-room.jpg?s=612x612&w=0&k=20&c=mGtquet42E389LKmrGam7dWIAGDEZGF2N0M0FwZspFk=",
    gaming:
      "https://img.freepik.com/premium-vector/stage-with-lights-it-stage-with-wall-it_1123160-9347.jpg",
    white: "https://t3.ftcdn.net/jpg/01/99/50/82/360_F_199508246_nOkUVV1PPQFqxvjNwkVnmyNEVn8FZrFC.jpg",
  };

  const themeClasses = {
    light: "bg-white",
    warm: "bg-amber-50",
    dark: "bg-gray-900",
  };

  return (
    <div
      ref={constraintsRef}
      className={`relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl ${themeClasses[theme]}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
        style={background !== 'plain' ? {
          backgroundImage: `url(${bgImages[background]})`,
        } : { color: 'white' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full">
        {/* Lighting overlay */}
        {lighting === "off" && (
          <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
        )}

        {lighting === "window" && (
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none" />
        )}

        {/* Desk */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80 h-24 rounded"
          style={{ backgroundColor: colors.desk }}
        />

        {/* Monitors */}
        {[...Array(monitors)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-48 bg-black w-20 h-14 rounded"
            style={{ left: `calc(50% - ${monitors * 40}px + ${i * 80}px)` }}
          />
        ))}

        {/* Chair */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          onDragEnd={(e, info) =>
            setPosition("chair", {
              x: positions.chair.x + info.offset.x,
              y: positions.chair.y + info.offset.y,
            })
          }
          animate={positions.chair}
          className="absolute bottom-24 left-[35%] w-16 h-20 rounded cursor-grab"
          style={{ backgroundColor: colors.chair }}
        />

        {/* Lamp */}
        {lamp && (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            onDragEnd={(e, info) =>
              setPosition("lamp", {
                x: positions.lamp.x + info.offset.x,
                y: positions.lamp.y + info.offset.y,
              })
            }
            animate={positions.lamp}
            className="absolute bottom-48 right-[35%] w-6 h-20 rounded cursor-grab"
            style={{ backgroundColor: colors.lamp }}
          />
        )}

        {/* Plant */}
        {plant && (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            onDragEnd={(e, info) =>
              setPosition("plant", {
                x: positions.plant.x + info.offset.x,
                y: positions.plant.y + info.offset.y,
              })
            }
            animate={positions.plant}
            className="absolute bottom-24 right-[20%] w-12 h-12 rounded-full cursor-grab"
            style={{ backgroundColor: colors.plant }}
          />
        )}
      </div>
    </div>
  );
}
