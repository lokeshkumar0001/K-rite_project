import TableHead from "../../../utils/TableHead";
import { IoMdAdd } from "react-icons/io";


import tabledata from "../../../assets/tableData.json";
import TableBody from "./TableBody";

const Table = () => {
  const tableData = tabledata;

  return (
    <div>
      <table className="w-full border-collapse border text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr className="text-gray-500 ">
            <th scope="col" className="flex items-center justify-between p-2 ">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="brand"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full accent-black"
                />
                <label htmlFor="">Bard</label>
              </div>
              {/* addition logo */}
              <IoMdAdd size={"16px"} color="gray" />
            </th>
            <TableHead title="Description" />
            <TableHead title="Members" />
            <TableHead title="Category" />
            <TableHead title="Tags" />
            <TableHead title="Next meeting" />
            <TableHead title={<IoMdAdd size={"16px"} color="gray" />} />
          </tr>
        </thead>
        {tableData && tableData.map((brand) => (
            <TableBody key={brand.id} brand={brand} />
          ))}
        
      </table>
    </div>
  );
};

export default Table;
