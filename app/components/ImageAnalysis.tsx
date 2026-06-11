import React from "react";
import { Star } from "../icons/Star";
import { Reload } from "../icons/Reload";
import { Paper } from "../icons/Paper";

export const ImageAnalysis = () => {
  return (
    <div className='flex-col gap-6'>
      <div className='flex justify-between gap-2 '>
        <div>
          <Star />
          <p className='text-[28px] font-semibold text-black'>Image analysis</p>
        </div>
        <button className='px-4 py-2'>
          <Reload />
        </button>
      </div>
      <p className='text-gray-200 text-[14px] text-light'>
        Upload a food photo, and AI will detect the ingredients.
      </p>
      <input type='file' />
      <button className='text-white bg-gray-200'>Generate</button>
      <div className='flex justify-start gap-1'>
        <Paper />
        <p className='text-[20px] font-semibold text-black'>
          Here is the summary
        </p>
      </div>
    </div>
  );
};
