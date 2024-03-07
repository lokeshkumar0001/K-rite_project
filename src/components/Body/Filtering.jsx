import { BsMenuUp } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { PiSortDescendingBold } from "react-icons/pi";
import { MdOutlineFilterList } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { LuImport } from "react-icons/lu";

const Filtering = () => {
  return (
    <section className="flex items-center justify-between p-3 gap-2 text-sm">
      {/* left side setting */}
      <div className="flex items-center gap-2">
        {/* allBrands */}
        <div className="flex gap-1 items-center rounded-md p-1 border cursor-pointer hover:bg-gray-100">
          <BsMenuUp />
          <span>All brands</span>
          <BiSolidDownArrow fontSize={"10px"} color="gray" />
        </div>

        {/* Desk */}
        <div className="flex gap-1 items-center rounded-md p-1 border cursor-pointer hover:bg-gray-100">
          <span>Desk</span>
          <BiSolidDownArrow fontSize={"10px"} color="gray" />
        </div>

        {/* Tags */}
        <div className="flex gap-1 items-center rounded-md p-1 border cursor-pointer hover:bg-gray-100">
          <span>Tags</span>
          <BiSolidDownArrow fontSize={"10px"} color="gray" />
        </div>

        {/* Sort */}
        <div className="flex gap-1 items-center rounded-md p-1 border cursor-pointer hover:bg-gray-100">
          <PiSortDescendingBold />
          <span>Sort</span>
        </div>

        {/* Filter */}
        <div className="flex gap-1 items-center rounded-md p-1 border cursor-pointer hover:bg-gray-100">
          <MdOutlineFilterList />
          <span>Filter</span>
        </div>
      </div>

      {/* right side setting */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 p-1 border rounded-md cursor-pointer hover:bg-gray-100">
          <MdOutlineAddBox />
          <span>Meeting</span>
        </div>

        <div className="flex items-center gap-1 p-1 border rounded-md cursor-pointer hover:bg-gray-100">
          <LuImport />
          <span>Import/Export</span>
        </div>
      </div>
    </section>
  );
};

export default Filtering;
