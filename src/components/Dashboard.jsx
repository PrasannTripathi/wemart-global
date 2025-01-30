import React from "react";
import ItemsComponent from "./ItemsComponent";
import fooditemsImage from "../assets/images/fooditems.jpg";
import beautycareImage from "../assets/images/beautycare.jpg";
import homefurnishingImage from "../assets/images/homefurnishing.jpg";
import jewelleryImage from "../assets/images/jewellery.jpg";
import cowdungproductImage from "../assets/images/cowdungproduct.jpg";
import brossidolsImage from "../assets/images/brossidols.jpg";
import cleaningImage from "../assets/images/cleaning.jpg";
import stationaryImage from "../assets/images/stationary.jpg";
import ecofriendlyImage from "../assets/images/ecofriendly.jpg";
import onegramgoldImage from "../assets/images/onegramgold.jpg";
import graftingplants from "../assets/images/grafting.jpg";
import fertilizers from '../assets/images/fertilizers.jpg';
import beverages from '../assets/images/beverages.jpg';
import clothing from '../assets/images/clothing.jpg';
import sanitarypads from '../assets/images/sanitarypads.jpg';
import grocery from '../assets/images/grocery.jpg';
import hospital from '../assets/images/hospital.jpg';
import healthcare from '../assets/images/healthcare.jpg';
import watermachine from '../assets/images/watermachine.jpg';
import giftsandarts from '../assets/images/giftsandarts.jpg';
import household from '../assets/images/household.jpg';
const Dashboard = () => {
  return (
    <div className="bg-slate-100 px-4 py-8">
      <div className="container mx-auto">
        {/* Responsive Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 rounded-xl overflow-hidden">
            <img src={fooditemsImage} alt="Big Image" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={beautycareImage} alt="Small Image 1" className="w-full h-auto object-cover rounded-lg" />
            <img src={homefurnishingImage} alt="Small Image 2" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>

      <ItemsComponent type="giftsandarts" name="Gifts and Arts" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={jewelleryImage}
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={cowdungproductImage}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="fooditems" name="Food Items" />


      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={brossidolsImage}
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={cleaningImage}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="fertilizers" name="Fertilizers" />


      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={stationaryImage  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={ ecofriendlyImage}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="beverages" name="Beverages" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={onegramgoldImage  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={graftingplants}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>


      <ItemsComponent type="beautycare" name="Beauty care" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={fertilizers  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={beverages}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="groceryitems" name="Grocery Items" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={clothing  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={sanitarypads}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="cowdungproducts" name="Cow Dung Products" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={grocery  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={hospital}
            alt=""
            className=" object-cover"    
          />
        </div>
      </div>

      <ItemsComponent type="sanitarynapkins" name=" Sanitary Napkins" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={healthcare  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={watermachine}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>

      <ItemsComponent type="clothing" name=" Clothing" />

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl overflow-hidden   h-[300px]">
          <img
            src={giftsandarts  }
            className=" object-contain"
            alt="Image"
          />
        </div>

        <div className=" rounded-xl overflow-hidden  h-[300px]">
          <img
            src={household}
            alt=""
            className=" object-contain"    
          />
        </div>
      </div>


      <ItemsComponent type="ecofriendlyproducts" name="Ecofriendly Products" />
      <ItemsComponent type="brassitems" name="Brass Items" />
      <ItemsComponent type="household" name="House Hold Items" />
      <ItemsComponent type="books" name="Books" />
      <ItemsComponent type="machines" name="Machines" />
      <ItemsComponent type="jewellery" name="Jewellery" />
      <ItemsComponent type="furniture" name="Furniture" />
      <ItemsComponent type="homefurnishing" name="House Furnishing" />
    <ItemsComponent type="ecofriendlygifts" name="Eco Friendly Gifts" />
    <ItemsComponent type="stationary" name="Stationary" />
    <ItemsComponent type="cleaningliquid" name="Cleaning Liquid" />
    <ItemsComponent type="silverjewellery" name="Silver Jewellery" />
    <ItemsComponent type="homedecorates" name="Home Decorates" />
    <ItemsComponent type="naturalleafplates" name="Natural Leaf Plates" />

    </div>
    </div>
  );
};

export default Dashboard;