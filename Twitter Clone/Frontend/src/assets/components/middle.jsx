import React from 'react'

import { PiBookmarkSimple } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { CgArrowsExchangeV } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";

import profile from "../../assets/profile.jpg";
import rutiney from "../../assets/Ronb.jpeg";
import news from '../../assets/news.jpeg'
// import whatshappening from "../../assets/demo.jpeg";

const Middle = () => {
  return (
    <div className="post bg-black border border-gray-600  w-[600px] max-[1000px]:w-full text-white">
    <div className="heading sticky top-0  bg-black border-b border-gray-600 py-4 flex justify-around">
      <span className="font-bold text-[15px] ">For you</span>
      <span className="font-semibold text-gray-500 text-[15px]">
        Following
      </span>
    </div>
    <div className="post p-4 flex gap-3 border-y border-gray-500 pt-4 ">
      <img
        src={profile}
        alt="profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="inside flex flex-col w-full">
        <input
          type="text"
          placeholder="What's happening?"
          className="outline-none w-full text-[1.4rem] placeholder:text-[1.4rem] break-before-left"
        />
        <div className="mt-4 text-blue-500 font-bold text-[0.85rem] flex gap-2 items-center mb-2.5">
          <GiWorld className="text-blue-500" />
          Everyone can reply
        </div>
        <div className="down border-t border-gray-600 pt-2 max-[500px]:pl-0 pl-2 flex gap-10 max-[500px]:gap-2 justify-between items-end">
          <div className="flex gap-5 max-[500px]:gap-2">
            <div>
              <CiImageOn className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <MdOutlineGifBox className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <RxHamburgerMenu className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <FaRegSmile className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <MdCalendarMonth className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <CiLocationOn className="text-blue-500 w-6 h-6" />
            </div>
          </div>

          <div className="h-[35px] w-[70px] max-[400px]:w-[50px] font-bold rounded-2xl bg-white text-black flex justify-around items-center">
            Post
          </div>
        </div>
      </div>
    </div>

    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex  flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem]  flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem] flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem] flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem] flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem] flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Feed p-4 border-b border-gray-600">
      <div className="heading flex gap-4 ">
        <img
          src={rutiney}
          alt=""
          className=" h-10 w-10 rounded-full"
        />

        <div className="contain flex flex-col ">

          <div className="top flex justify-between">

          <div className="flex items-center gap-2">
            <div className="font-bold text-[1rem] flex items-center ">
              Routine of Nepal Banda
            <MdVerified className="text-blue-600"/>
            </div>
            <div className="text-gray-500 text-[0.8rem]">
              @RONBupdates
            </div>
            <div className="text-gray-500 text-[0.8rem] flex gap-1 items-center">
            <LuDot />5h
            </div>
            
          </div>
          <div>
          <BsThreeDots />
          </div>

          </div>
          <div>
            जाजरकोटको भेरी नगरपालिका-४, बोहोरामा जिल्लामै पहिलो पटक
            नेपाल आयल निगम अन्तर्गतको पेट्रोल पम्प सन्चालनमा आएको छ । 😮
          </div>

          <div className="mt-10">
          Pic. Dilli Raj Basnet
          </div>

          <img src={news} alt="" className="w-[400px] mt-2 border rounded-2xl border-gray-600   " />

          <div className="postfooter flex  items-center justify-between mt-2">
            <FaRegComment className="text-gray-400 h-5 w-5"/>
            <CgArrowsExchangeV className="text-gray-400 h-6 w-6"/>
            <FaRegHeart className="text-gray-400 h-6 w-6"/>
            <div className="flex text-gray-400 text-[1rem]">
            <FaRegChartBar className="text-gray-400 h-6 w-6"/>
            167
            </div>
            <div className="flex text-gray-400 text-[1rem] gap-2">
            <PiBookmarkSimple className="text-gray-400 h-6 w-6"/>
            <FiUpload className="text-gray-400 h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>
  )
}

export default Middle
