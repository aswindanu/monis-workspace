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
    desk: {
      wood: "https://static.vecteezy.com/system/resources/thumbnails/051/038/313/small/office-desk-isolated-on-transparent-background-png.png",
      standing:
        "https://static.vecteezy.com/system/resources/thumbnails/071/164/400/small_2x/black-adjustable-height-standing-desk-for-office-or-home-on-transparent-background-free-png.png",
    },
    chair: {
      gaming: 'https://static.vecteezy.com/system/resources/thumbnails/054/606/511/small/gaming-chair-isolated-on-transparent-background-free-png.png',
      minimal: 'https://static.vecteezy.com/system/resources/thumbnails/051/956/171/small_2x/black-leather-office-chair-with-tufted-backrest-on-a-transparent-background-png.png',
    },
    lamp: "https://static.vecteezy.com/system/resources/thumbnails/059/063/694/small/a-vibrant-multicolored-lava-lamp-with-a-sleek-silver-base-and-colorful-wax-blobs-inside-a-glass-container-that-creates-a-mesmerizing-light-show-isolated-on-transparent-background-png.png",
    plant: "https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png",
  };

  const bgImages = {
    office:
      "https://media.istockphoto.com/id/1535511484/photo/tv-cabinet-in-a-scandinavian-decor-living-room.jpg?s=612x612&w=0&k=20&c=mGtquet42E389LKmrGam7dWIAGDEZGF2N0M0FwZspFk=",
    gaming:
      "https://img.freepik.com/premium-vector/stage-with-lights-it-stage-with-wall-it_1123160-9347.jpg",
    white:
      "https://t3.ftcdn.net/jpg/01/99/50/82/360_F_199508246_nOkUVV1PPQFqxvjNwkVnmyNEVn8FZrFC.jpg",
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
        style={
          background !== "plain"
            ? {
                backgroundImage: `url(${bgImages[background]})`,
              }
            : { backgroundColor: "white" }
        }
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full">
        {/* Lighting overlay */}
        {lighting === "off" && (
          <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
        )}

        {lighting === "all" && (
          <div className="absolute inset-0 bg-yellow-200/10 mix-blend-overlay pointer-events-none" />
        )}

        {lighting === "window" && (
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none" />
        )}

        {/* Desk PNG */}
        <img
          src={assets.desk[desk || "wood"]}
          alt="desk"
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80 object-contain pointer-events-none"
          draggable={false}
          style={desk === "standing" ? { bottom: '-22px', inlineSize: '50%' } : { bottom: "0" }}
        />

        {/* Monitors */}
        {[...Array(monitors)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-48 bg-black w-20 h-14 rounded shadow-lg"
            style={{
              left: `calc(50% - ${monitors * 40}px + ${i * 80}px)`,
              border: "3px solid white",
              borderRadius: "1px",
            }}
          />
        ))}

        {/* Chair */}
        {chair && (
          <motion.img
            src={assets.chair[chair]}
            drag
            dragConstraints={constraintsRef}
            onDragEnd={(e, info) =>
              setPosition("chair", {
                x: positions.chair.x + info.offset.x,
                y: positions.chair.y + info.offset.y,
              })
            }
            animate={positions.chair}
            className="absolute bottom-20 left-[35%] w-32 cursor-grab active:cursor-grabbing select-none"
            style={{
              filter: `drop-shadow(0 10px 15px rgba(0,0,0,0.4))`,
              inlineSize: '42%',
              transform: 'translateX(-160.6584px) translateY(87.48px)',
            }}
          />
        )}

        {/* Lamp */}
        {lamp && (
          <motion.img
            src={assets.lamp}
            drag
            dragConstraints={constraintsRef}
            onDragEnd={(e, info) =>
              setPosition("lamp", {
                x: positions.lamp.x + info.offset.x,
                y: positions.lamp.y + info.offset.y,
              })
            }
            animate={positions.lamp}
            className="absolute bottom-48 right-[35%] w-20 cursor-grab active:cursor-grabbing select-none"
            style={{
              filter:
                lighting === "all"
                  ? "drop-shadow(0 0 25px rgba(255, 223, 100, 0.7))"
                  : "none",
            }}
          />
        )}

        {/* Plant */}
        {plant && (
          <motion.img
            src={assets.plant}
            drag
            dragConstraints={constraintsRef}
            onDragEnd={(e, info) =>
              setPosition("plant", {
                x: positions.plant.x + info.offset.x,
                y: positions.plant.y + info.offset.y,
              })
            }
            animate={positions.plant}
            className="absolute bottom-20 right-[20%] w-24 cursor-grab active:cursor-grabbing select-none"
            style={{
              filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.3))",
              transform: 'translateX(94.4531px) translateY(73.2231px)',
              inlineSize: '35%',
            }}
          />
        )}
      </div>
    </div>
  );
}
