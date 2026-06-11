import React from "react";
import { Star } from "../icons/Star";
import { Reload } from "../icons/Reload";
import { Paper } from "../icons/Paper";
import { Picture } from "../icons/Picture";

export const FoodImageCreator = () => {
  return (
    <div className='flex-col gap-6'>
      <div className='flex justify-between gap-2 '>
        <div>
          <Star />
          <p className='text-[28px] font-semibold text-black'>
            Food image creator
          </p>
        </div>
        <button className='px-4 py-2'>
          <Reload />
        </button>
      </div>
      <p className='text-gray-200 text-[14px] text-light'>
        What food image do you want? Describe it briefly.
      </p>
      <input type='text' />
      <button className='text-white bg-gray-200'>Generate</button>
      <div className='flex justify-start gap-1'>
        <Picture />
        <p className='text-[20px] font-semibold text-black'>Result</p>
      </div>
    </div>
  );
};
