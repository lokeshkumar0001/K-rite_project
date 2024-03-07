import { TbMessage } from "react-icons/tb";

const TableBody = ({brand}) => {
  return (
    <tbody>
          <tr className="border">
            <td className="flex p-2 items-center justify-between">
              <div className="flex items-center gap-2 min-w-[11px]">
                <input
                  type="checkbox"
                  id="brand"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full accent-black"
                />

                <div className="flex gap-1 items-center">
                  <div className="logo_wrapper h-5 w-5 border rounded-md">
                    <img
                      className="object-contain object-center h-full w-full"
                      src="https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp"
                      alt="shopify logo"
                    />
                  </div>
                  <label htmlFor="" className="font-semibold">
                    Shopify
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* addition logo */}
                <TbMessage size={"16px"} color="gray" />
                <span className="text-xs">2</span>
              </div>
            </td>

            {/* Description */}
            <td className="border max-w-[150px] p-2 w-[100px]">
              <p className="truncate font-bold">
                This is descirption and i have to wrap this
              </p>
            </td>

            <td>
              <div className="flex -space-x-2 rtl:space-x-reverse p-2">
                <img
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
                <img
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                  src="/docs/images/people/profile-picture-2.jpg"
                  alt=""
                />
                <img
                  className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +99
                </a>
              </div>
            </td>

            <td className="border">
              <div className="p-2 text-xs">
                <div className="bg-purple-100 border border-purple-500 px-1 w-fit rounded-lg">
                  <span className="text-purple-600 font-bold ">Automation</span>
                </div>
              </div>
            </td>

            <td className="border">
              <div className="p-2 text-xs">
                <div className="bg-gray-100 border px-1 w-fit rounded-lg">
                  <span className="text-gray-500">#DigitalTransformation</span>
                </div>
              </div>
            </td>

            <td className="border">
              <div className="p-2 text-xs">
                <div className="bg-green-100 border border-green-500 px-1 w-fit rounded-lg">
                  <span className="text-green-600 font-bold ">
                    In 30 minutes
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
  )
}

export default TableBody