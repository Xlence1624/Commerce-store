import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
        <div>
        <img
        src={assets.bottom_banner_image}
        alt=""
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt=""
        className="w-full md:hidden"
      />
        </div>
      
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 ">
      
      <div className="w-full max-w-xs md:max-w-md mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary">
          Why We Are The Best?
        </h1>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4 mb-4 w-full max-w-xs md:max-w-md">
            
            <div className="flex-shrink-0">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-9 md:w-11"
              />
            </div>
           
           
         
        <div>
        <h3 className="text-lg md:text-xl font-medium text-primary">{feature.title}</h3>
          <p className="text-gray-500/70  text-xs md:text-sm">
            {feature.description}
          </p>

        </div>
         
         
     </div>  ))}
      </div>
     
     
    
</div>)
}
export default BottomBanner
