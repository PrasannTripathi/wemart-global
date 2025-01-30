import React from "react";
import { data } from "../components/ImageData";
import { data1 } from "../components/ImageData";
import { data2 } from "../components/ImageData";
import { data3 } from "../components/ImageData";
import { data4 } from "../components/ImageData";
import { data5 } from "../components/ImageData";
import { data6 } from "../components/ImageData";
import { data7 } from "../components/ImageData";
import { data8 } from "../components/ImageData";
import { Link } from "react-router-dom";

const ItemsComponent = ({ type, name }) => {
  const link = "/" + type;
  const selectedData =
    type === "giftsandarts"
      ? data3
      : type === "fooditems"
      ? data
      : type === "fertilizers"
      ? data1
      : type === "beverages"
      ? data2
      : type === "beautycare"
      ? data4
      : type === "groceryitems"
      ? data5
      : type === "cowdungproducts"
      ? data6
      : type === "sanitarynapkins"
      ? data7
      : data8;

  return (
    <div className="my-5 px-4">
      <div className="flex mt-5 items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {name}
          <div className="bg-blue-600 w-10 h-1 rounded-sm mt-1"></div>
        </h1>

        <Link to={link} className="text-blue-600 text-sm sm:text-base">
          View All
        </Link>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {selectedData.map((item) => (
            <div
              key={item.id}
              className="border bg-white rounded-md flex flex-col gap-2 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] mx-auto object-contain transition-transform duration-300 hover:scale-110"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col text-center gap-2">
                <h1 className="text-sm sm:text-base font-medium">{item.name}</h1>
                <p className="text-sm text-gray-700">₹{item.price}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded text-white text-sm sm:text-base">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsComponent;
