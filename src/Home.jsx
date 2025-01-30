import React from "react";
import Quiz from "./components/Quiz";
import Login from "./components/Login";

export default function Home() {
      return (
            <div className="min-h-screen bg-gray-900 bg-opacity-75">
                  <div className="container mx-auto px-4 py-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                        <div className="text-center text-white space-y-8">
                              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                                    Hi, I am a web developer from Sarasota, Florida
                              </h2>
                              <h3 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    I have been programming since I was a kid and I am very glad to finally be able to
                                    take my hobby and turn it into something I enjoy doing for a living, and benefitting
                                    other people and their businesses. Please take a moment to look at the some of the
                                    components below that I could make a part of your organization's website.
                              </h3>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-8 my-16 h-fit-content items-stretch">
                              <Quiz />
                              <Login />
                        </div>
                  </div>
            </div>
      );
}
