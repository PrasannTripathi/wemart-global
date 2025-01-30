import React, { useState } from "react";
import { data, data1, data2, data3, data4, data5, data6, data7, data8 } from "../components/ImageData";
import {
  beautycareBrandData, booksBrandData, brassItemsBrandData, cleaningLiquidBrandData, clothingBrandData,
  cowdungProductsBrandData, ecofriendlyGiftsBrandData, ecoFriendlyProductsBrandData, fertilizersBrandData,
  furnitureBrandData, giftsAndArtsBrandData, groceryItemsBrandData, homeFurnishingBrandData, houseHoldItemsBrandData,
  jewelleryBrandData, machinesBrandData, sanitaryNapkinsBrandData, stationaryBrandData, vebragesBrandData
} from "../components/BrandData";

const FoodItems = ({ type }) => {
  const [rangeValue, setRangeValue] = useState(1);

  const selectedData = {
    fooditems: data, fertilizers: data1, giftsandarts: data3, beautycare: data4,
    groceryitems: data5, cowdungproducts: data6, sanitarynapkins: data7, clothing: data8,
  }[type] || data2;

  const selectedBrands = {
    giftsandarts: giftsAndArtsBrandData, fertilizers: fertilizersBrandData, beverages: vebragesBrandData,
    beautycare: beautycareBrandData, groceryitems: groceryItemsBrandData, cowdungproducts: cowdungProductsBrandData,
    sanitarynapkins: sanitaryNapkinsBrandData, clothing: clothingBrandData, ecofriendlyproducts: ecoFriendlyProductsBrandData,
    brassitems: brassItemsBrandData, householditems: houseHoldItemsBrandData, books: booksBrandData, machines: machinesBrandData,
    jewellery: jewelleryBrandData, furniture: furnitureBrandData, homefurnishing: homeFurnishingBrandData,
    ecofriendllygifts: ecofriendlyGiftsBrandData, stationary: stationaryBrandData, cleaningliquid: cleaningLiquidBrandData,
  }[type] || [];

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar Filters */}
        <div className="bg-white shadow-lg p-4 rounded-md w-full lg:w-[350px]">
          <div className="flex justify-between">
            <button className="font-semibold">Filter</button>
            <button className="text-green-500 font-semibold">Apply</button>
            <button className="text-red-600 font-semibold">Clear All</button>
          </div>

          {/* Price Filter */}
          <div className="mt-4">
            <p className="font-medium">Price</p>
            <input
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              type="range"
              min={0}
              max={2996}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <h1>₹1</h1>
              <p>₹{rangeValue}</p>
            </div>
          </div>

          {/* Sort By */}
          <div className="mt-4">
            <p className="font-medium">Sort By</p>
            <div className="flex flex-col gap-2 mt-2">
              {["Popularity", "Price - Low to High", "Price - High to Low", "New Arrivals"].map((sortOption) => (
                <label key={sortOption} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer" />
                  {sortOption}
                </label>
              ))}
            </div>
          </div>

          {/* Discount */}
          <div className="mt-4">
            <p className="font-medium">Discount</p>
            <div className="flex flex-col gap-2 mt-2">
              {["50%", "40%", "30%", "20%", "10%"].map((discount) => (
                <label key={discount} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer" />
                  {discount} or more
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          {selectedBrands.length > 0 && (
            <div className="mt-4">
              <p className="font-medium">Brand</p>
              <div className="flex flex-col gap-2 mt-2">
                {selectedBrands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {selectedData.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 bg-white rounded-md flex flex-col items-center p-3 hover:shadow-md transition"
              >
                <img
                  className="h-[150px] md:h-[180px] w-full object-contain transition-transform duration-300 hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />
                <div className="text-center mt-3">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="text-blue-600 font-bold">₹{item.price}</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 mt-2 rounded hover:bg-blue-700 transition w-full">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
