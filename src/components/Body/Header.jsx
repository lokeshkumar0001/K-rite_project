import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import SearchBar from "../../utils/SearchBar";

const Header = () => {
  return (
    <header className="flex item-center justify-between  border-b p-2">
      <p>Products</p>
      <div className="flex items-center gap-2">
        {/* search bar */}
        <div>
          <SearchBar />
        </div>

        <div className="border p-1 rounded-md hover:bg-gray-100 cursor-pointer">
          <LuMessagesSquare />
        </div>
        <div className="border p-1 rounded-md hover:bg-gray-100 cursor-pointer">
          <IoSettingsOutline />
        </div>
      </div>
    </header>
  );
};

export default Header;
