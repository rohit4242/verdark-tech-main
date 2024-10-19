"use client";
import React, { useState, FC } from "react";
import toast from "react-hot-toast";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  const [email, setEmail] = useState("");

  const handleJoinVedark = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email address.");
    } else {
      toast.success("Thank you for joining Vedark!");
      setEmail("");
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="h-[25rem] md:h-[30rem] xl:h-[40rem] w-full max-w-screen-xl mx-auto rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
            Subscribe to{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-no-repeat bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent py-4  [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Vedark.</span>
              </div>
              <div className="relative bg-no-repeat bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent py-4">
                <span className="">Vedark.</span>
              </div>
            </div>
          </h2>

          <div className="max-w-md mx-auto mt-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm border relative z-10 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="flex relative flex-col md:flex-row space-y-4 z-10 md:space-y-0 space-x-0 md:space-x-4 mt-4 justify-center">
            <button
              className="border text-sm font-medium relative border-neutral-200 border-white/[0.2] text-white px-6 py-4 rounded-full"
              onClick={handleJoinVedark}
            >
              Join Vedark
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
