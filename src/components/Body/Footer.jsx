import { HiOutlineArchive } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="absolute bottom-5 left-2/4 -translate-x-2/4 px-6 py-2 border rounded-md text-sm flex items-center gap-4">
      <div className="flex items-center gap-2  w-fit">
        <div className="flex gap-1 p-1 rounded-md border items-center justify-center bg-gray-100  cursor-pointer hover:bg-gray-200">
          <span className="bg-black text-white rounded-md px-1 text-xs">3</span>
          <span>selected</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md border p-1 bg-gray-100  cursor-pointer hover:bg-gray-200">
          <span>
            <HiOutlineArchive />
          </span>
          <span>Archive</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md border p-1 text-red-500 bg-gray-100 cursor-pointer hover:bg-gray-200">
          <span>
            <MdDeleteOutline />
          </span>
          <span>Delete</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md border p-1 bg-gray-100 cursor-pointer hover:bg-gray-200">
          <span>More</span>
          <BiSolidDownArrow fontSize={"10px"} color="gray" />
        </div>
      </div>
      <RxCross2 color="gray" />
    </div>
  );
};

export default Footer;
