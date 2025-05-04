import React from "react";
import logo from "./assets/logo1.svg";
import { RiHome5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { PiBookmarkSimple } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import whatshappening from "./assets/demo.jpeg";
import balen from "./assets/balen.jpeg";
import { FaEdit } from "react-icons/fa";


import Middle from "./assets/components/middle";

const App = () => {
  return (
    <>
      <div className="bg-black ">
        <div className="main flex  min-[1300px]:justify-center bg-black min-h-screen">

        <div className="silder sticky top-0 bg-black pl-15 max-[1000px]:pl-2 max-[1000px]:pr-2 max-[1300px]:pr-5 min-[1600px]:pl-33 min-[1500px]:pl-15 min-[1300px]:pr-10 text-white h-screen pt-4 flex flex-col max-[1300px]:items-center">
        <img
              src={logo}
              alt="logo"
              width={40}
              height={35}
              className="pl-2"
            />
            <div className="nabvar flex flex-col gap-6 mt-6 pl-2 max-[1300px]:pl-0">
              <div className="items flex items-center gap-4">
                <RiHome5Line className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-bold text-[1.4rem]">Home</span>
              </div>
              <div className="items flex items-center gap-4">
                <IoIosSearch className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Explore
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <IoNotificationsOutline className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Notifications
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <FiMessageSquare className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Messages
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <PiBookmarkSimple className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Bookmarks
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <IoPeopleOutline className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Communities
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <img src={logo} className="w-7 h-7" alt="logo" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Premium
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <AiOutlineThunderbolt className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Verified Orgs
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <CiUser className="w-7 h-7" />{" "}
                <span className="hidden min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  Profile
                </span>
              </div>
              <div className="items flex items-center gap-4">
                <AiOutlineMessage className="w-7 h-7" />{" "}
                <span className="hidden  min-[1300px]:block font-sans font-normal text-[1.3rem]">
                  More
                </span>
              </div>
            </div>

            <div className="btn  text-black font-bold bg-white h-13 w-60 rounded-4xl flex justify-center items-center mt-4  max-[1300px]:w-12 max-[1300px]: max-[1300px]:h-12 max-[1300px]:rounded-full">
             <span className="hidden max-[1300px]:block"><FaEdit className=""/></span>
             <span className="hidden min-[1300px]:block"> Post </span>
            </div>
          </div>

          <div>
            <Middle />
          </div>

          <div className="Extra max-[1100px]:hidden sticky top-0 bg-black w-[430px]  max-[1100px]:w-[420px]  text-white px-4 ">
            <div className="search sticky top-0 z-10 bg-black flex items-center mb-5">
              <CiSearch className="absolute h-4 w-4  left-2.5 top-4" />
              <input
                type="text"
                placeholder="Search"
                className="search pl-8  border border-gray-600 p-2 rounded-full mt-2  w-full placeholder:text-white text-[12px] "
              />
            </div>

            <div className="subscription sticky top-[-30vh] border border-gray-600  px-4 py-2 rounded-[0.6rem] flex flex-col gap-1.5 mb-5">
              <span className="font-bold text-[1.4rem]">
                Subscribe to Premium
              </span>
              <span className="text-[0.9rem]">
                Subscribe to unlock new features and if eligible, receive a
                share of revenue.
              </span>
              <div className="btn flex items-center justify-center text-white bg-blue-400  h-[35px] w-[110px] font-bold rounded-full">
                Subscribe
              </div>
            </div>
            <div className="anotherbox sticky top-[-20vh] border border-gray-600 px-4 py-2 rounded-[0.6rem] ">
              <div className="font-bold text-[1.4rem] mb-5">
                Whats happening
              </div>
              <div className="box flex gap-3">
                <img
                  src={whatshappening}
                  alt="demo"
                  className="h-20 w-20 rounded-2xl"
                />
                <div className="left">
                  <div className="font-semibold text-[0.95rem]">
                    World Economy Summit 2025
                  </div>
                  <div className="text-gray-500">Live</div>
                </div>
              </div>
              <div className="trending mt-5">
                <div className="first flex justify-between">
                  <div className="text-gray-500 text-[0.85rem]">
                    Trending in Nepal
                  </div>
                  <BsThreeDots className="text-gray-500" />
                </div>
                <div className="font-semibold text-[0.95rem] my-1">Design</div>
                <div className="text-gray-500 text-[0.85rem]"> 141K posts</div>
              </div>
              <div className="trending mt-5">
                <div className="first flex justify-between">
                  <div className="text-gray-500 text-[0.85rem]">
                    Trending in Nepal
                  </div>
                  <BsThreeDots className="text-gray-500" />
                </div>
                <div className="font-semibold text-[0.95rem] my-1">
                  #Pakistan
                </div>
                <div className="text-gray-500 text-[0.85rem]"> 141K posts</div>
              </div>
              <div className="trending mt-5">
                <div className="first flex justify-between">
                  <div className="text-gray-500 text-[0.85rem]">
                    Trending in Nepal
                  </div>
                  <BsThreeDots className="text-gray-500" />
                </div>
                <div className="font-semibold text-[0.95rem] my-1">#Balen</div>
                <div className="text-gray-500 text-[0.85rem]"> 141K posts</div>
              </div>
              <div className="showmore mt-5 text-blue-400">Show more</div>
            </div>

            <div className="whotofollow sticky top-[43vh] border  border-gray-600  px-4 py-2 mt-5 rounded-[0.6rem] ">
              <div className="font-bold text-[1.3rem] mb-5">Who to follow</div>

              <div className="box flex justify-between mb-5">
                <div className="people flex gap-2">
                  <img
                    src={balen}
                    alt="img"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="name">
                    <div>Balenendra Shan</div>
                    <div className="text-[1rem] text-gray-500">@ShahBalen</div>
                  </div>
                </div>
                <div className="bg-white h-[35px] w-[90px] rounded-full font-bold flex justify-center items-center text-black">
                  Follow
                </div>
              </div>
              <div className="box flex justify-between mb-5">
                <div className="people flex gap-2">
                  <img
                    src={balen}
                    alt="img"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="name">
                    <div>Balenendra Shan</div>
                    <div className="text-[1rem] text-gray-500">@ShahBalen</div>
                  </div>
                </div>
                <div className="bg-white h-[35px] w-[90px] rounded-full font-bold flex justify-center items-center text-black">
                  Follow
                </div>
              </div>
              <div className="box flex justify-between mb-5">
                <div className="people flex gap-2">
                  <img
                    src={balen}
                    alt="img"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="name">
                    <div>Balenendra Shan</div>
                    <div className="text-[1rem] text-gray-500">@ShahBalen</div>
                  </div>
                </div>
                <div className="bg-white h-[35px] w-[90px] rounded-full font-bold flex justify-center items-center text-black">
                  Follow
                </div>
              </div>
              <div className="showmore mt-5 text-blue-400">Show more</div>
            </div>

            <div className="rightfooter sticky top-[84vh] mt-5 flex gap-2 flex-wrap mb-20">
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>Terms of Service </div> <span>|</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>Privacy Policy</div> <span>|</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>Cookie Policy </div> <span>|</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>Accesbility</div> <span>|</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>Ads Info</div> <span>|</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>More</div> <span>...</span>
              </div>
              <div className="flex gap-2 text-gray-500 text-[0.8rem]">
                <div>©2025xCorp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
