import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="p-1 rounded-md border flex items-center gap-2 shadow-sm">
        <IoSearch />
        <input type="text" className="outline-none" style={{ width: '150px', height: '20px' }} placeholder="Search for..." />
    </div>
  );
};

export default SearchBar;
