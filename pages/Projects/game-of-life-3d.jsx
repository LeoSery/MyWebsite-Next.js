import ProjectImg from "/public/static/projects/GameOfLife3D.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GameOfLife3DPageContent() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-9" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ProjectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Game Of Life 3D</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#ff9f1c]">
            Project
          </p>
          <h2 className="py-2 text-gray-700 dark:text-[#BDB7AF]">Overview</h2>
          <p className="text-justify py-2 text-gray-600 dark:text-[#B1AAA0]">
          This project is a 3D implementation of Conway&apos;s Game of Life, realized in C# with Unity. It&apos;s a cellular automaton simulation where cells evolve in a 3D space according to simple rules, generating patterns over the course of iterations. The user can interact with the grid in real time, adding or deleting cells, adjusting simulation speed and exploring 3D space with a free-form camera. The project focuses on performance and optimization.
          </p>
          <div className="flex justify-start">
          <a
            href="https://github.com/LeoSery/Conway-s-Game-of-Life-3D--Unity3D-2024"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex text-2xl">
              <button className="px-8 py-2 mt-4 mr-8 cursor-pointer bg-blue-600 text-white hover:shadow-lg hover:shadow-[#312f2f] hover:scale-105 hover:bg-[#ff9f1c] rounded-md text-sm font-medium capitalize">
                <p>View on GitHub</p>
              </button>
            </div>
          </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl dark:bg-[#1E1E1E] shadow-gray-400 dark:shadow-gray-800 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-[#BDB7AF]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
                <RiRadioButtonFill className="pr-1" /> C#
              </p>
              <p className="text-gray-800 py-2 flex items-center dark:text-[#B1AAA0]">
                <RiRadioButtonFill className="pr-1" /> Unity3D
              </p>
            </div>
          </div>
        </div>
        <Link href="/Projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}