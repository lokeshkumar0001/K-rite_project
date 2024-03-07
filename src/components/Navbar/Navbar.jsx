import { CiPen, CiSquarePlus } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import { FaCode, FaPlus } from "react-icons/fa";
import { MdFolderOpen } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {

  const dropdownOption1 = ['RoadMap','Feedback','Performance','Team','Analytics'];

  return (
    <nav className="border p-2 rounded-lg w-[300px] flex flex-col justify-between ">
      <div className="flex flex-col gap-3">
        {/* company profile */}
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="company_logo h-10 w-10">
              <img
                className="h-full object-cover object-center rounded-md"
                src="https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png"
                alt="Rounded avatar"
              />
            </div>
            <div className="flex flex-col items-start">
              <p>INC</p>
              <p className="font-semibold">InnovateHub</p>
            </div>
          </div>

          <div className="profile_wrpaper h-10 w-10">
            <img
              className="h-full object-cover object-center rounded-full"
              src="https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png"
              alt="Rounded avatar"
            />
          </div>
        </section>

        {/* all teams */}
        <section className="border rounded-md">
          <ul className="p-2">
            <li className=" p-1 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <div className="flex items-center  gap-1">
                  <CiPen />
                  <p className="font-semibold">Design Team</p>
                </div>
              </div>
            </li>
            <li className="hover:bg-gray-100 p-1 rounded-md  cursor-pointer">
              <div>
                <div className="flex items-center gap-1">
                  <TbSpeakerphone />
                  <p className="font-semibold">Design Team</p>
                </div>
              </div>
            </li>
            <li className="hover:bg-gray-100 rounded-md p-1 cursor-pointer">
              <div>
                <div className="flex items-center gap-1">
                  <FaCode />
                  <p className="font-semibold">Development Team</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex gap-1 items-center border-t p-2 cursor-pointer text-gray-500">
            <CiSquarePlus />
            <span className="text-sm">Create a team</span>
          </div>
        </section>

        {/* folders */}
        <section className="p-2">
          <div className="flex justify-between items-center p-1">
            <p className="text-sm text-gray-500 font-semibold">FOLDERS</p>
            <FaPlus color="gray" />
          </div>

          <ul className="flex flex-col p-1">
            <Dropdown btn='Product' options={dropdownOption1} />
          </ul>
        </section>
      </div>

      {/* bottom div */}
      <section className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <BsPersonAdd />
          <span>Invite Teammates</span>
        </div>
        <div className="flex gap-2 items-center">
          <IoIosHelpCircleOutline />
          <span>Help and first steps</span>
        </div>
        <div className="flex gap-2 items-center justify-between rounded-lg bg-gray-200 p-1 text-sm">
          <div className="flex gap-2 items-center px-2">
            <span className="px-1 bg-white rounded-md">7</span>
            <p>days left on trail</p>
          </div>
          <button className="p-1 bg-black text-white rounded-lg">Add billing</button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
