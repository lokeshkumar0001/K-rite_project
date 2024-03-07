/* eslint-disable react/prop-types */
import { TbMessage } from "react-icons/tb";

const TableBody = ({ brand }) => {
  return (
    <tbody>
      <tr className="border">
        <td className="flex p-2 items-center justify-between">
          <div className="flex items-center gap-2 min-w-[11px]">
            <input
              type="checkbox"
              id={`brand_${brand.id}`}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full accent-black"
            />

            <div className="flex gap-1 items-center">
              <div className="logo_wrapper h-5 w-5 border rounded-md">
                <img
                  className="object-contain object-center h-full w-full"
                  src={brand.brand.logo}
                  alt={`${brand.brand.name} logo`}
                />
              </div>
              <label htmlFor={`brand_${brand.id}`} className="font-semibold">
                {brand.brand.name}
              </label>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* addition logo */}
            <TbMessage size={"16px"} color="gray" />
            <span className="text-xs">{brand.message}</span>
          </div>
        </td>

        {/* Description */}
        <td className="border max-w-[150px] p-2 w-[100px]">
          <p className="truncate font-bold">{brand.description}</p>
        </td>

        {/* Members */}
        <td>
          <div className="flex -space-x-2 rtl:space-x-reverse p-2">
            {brand.members.map((member, index) => (
              <img
                key={index}
                className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                src={member}
                alt={`Member ${index + 1}`}
              />
            ))}

            <a
              className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +20
            </a>
          </div>
        </td>

        {/* Category */}
        <td className="border">
          <div className="p-2 text-xs">
            <div
              className={` border px-1 w-fit rounded-lg`}
              style={{border:brand.category.border,backgroundColor:brand.category.color}}
            >
              <span className={` font-bold`} style={{
                color:brand.category.textColor
              }}>
                {brand.category.name}
              </span>
            </div>
          </div>
        </td>

        {/* Tags */}
        <td className="border">
          <div className="p-2 text-xs flex gap-2 overflow-y-auto">
            {brand.tags.map((tag,index) => {
                return <div key={index} className="bg-gray-100 border px-1 w-fit rounded-lg">
                <span className="text-gray-500">{tag}</span>
              </div>
            })}
            
          </div>
        </td>

        {/* Next Meeting */}
        <td className="border">
          <div className="p-2 text-xs">
            <div
              className={`bg-[${brand.nextMeeting.bgColor}] border border-[${brand.nextMeeting.borderColor}] px-1 w-fit rounded-lg`}
              style={{borderColor:brand.nextMeeting.borderColor,backgroundColor:brand.nextMeeting.bgColor}}
            >
              <span className={`font-bold`}
              style={{color: brand.nextMeeting.textColor }}>
                {brand.nextMeeting.time}
              </span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
