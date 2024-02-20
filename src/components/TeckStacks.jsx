import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import Javascript from "../assets/JavaScript.svg";
import reactjs from "../assets/atom.png";
import Node from "../assets/NodeJS-Light.svg";
import MongoDB from "../assets/MongoDB.svg";
import Express from "../assets/ExpressJS-Light.svg";
import Tailwind from "../assets/TailwindCSS-Light.svg";
import FireBase from "../assets/Firebase-Light.svg";
import Latex from "../assets/LaTeX-Light.svg";
import CPP from "../assets/Cpp.png";
import JQuery from "../assets/JQuery.svg";
import JAVA from "../assets/java.png";
import Python from "../assets/python.png";
import Github from "../assets/github.png";
import Git from "../assets/Git.svg";
import nextjs from "../assets/nextjs.svg";
import sass from "../assets/sass.png";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Parallax } from "swiper";

const TeckStacks = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return (
    <div
      className={
        isDesktop
          ? "relative top-20 flex flex-col bg-blue-800 rounded-t-[120px] h-[65vh]"
          : "relative top-20 flex flex-col bg-blue-800 rounded-t-[60px] h-[65vh]"
      }
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {isDesktop ? (
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-white font-bold pt-10 p-3">
              Tech Stack
            </h1>
          </div>
          <div className="">
            <div className="py-12">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                parallax={true}
                speed={3000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Parallax]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={HTML} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        HTML
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={CSS} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        CSS
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Javascript} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        JavaScript
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={reactjs} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        React
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={nextjs} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Next.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Node} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Node.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={MongoDB} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        MongoDB
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Express} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Express.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={sass} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Sass
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Tailwind} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Tailwind
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Github} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Github
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Git} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Git
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={FireBase} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Firebase
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={JAVA} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Java
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={CPP} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        C++
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Python} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Python
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={JQuery} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        JQuery
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={Latex} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Latex
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-white font-bold pt-10 p-3">
              Tech Stack
            </h1>
          </div>
          <div className="">
            <div className="pt-12">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                freeMode={true}
                parallax={true}
                speed={3000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Parallax]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={HTML} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        HTML
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={CSS} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        CSS
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Javascript} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        JavaScript
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={reactjs} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        React
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={nextjs} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Next.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Node} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Node.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={MongoDB} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        MongoDB
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Express} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Express.js
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900">
                      <img src={sass} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Sass
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Tailwind} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Tailwind
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Github} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Github
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Git} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Git
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={FireBase} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Firebase
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={JAVA} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Java
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={CPP} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        C++
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Python} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Python
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={JQuery} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        JQuery
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-xl shadow-lg shadow-slate-900">
                      <img src={Latex} alt="html" className="w-12" />
                      <h1 className="text-2xl text-white font-bold py-4">
                        Latex
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeckStacks;
