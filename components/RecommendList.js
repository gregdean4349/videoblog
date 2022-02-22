/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

function RecommendList({ imgSrc, videoName, artistName }) {
  return (
    <div className='flex items-center mb-2 cursor-pointer px-3 py-2 hover:bg-gray-900 rounded-lg duration-200 ease-in-out'>
      <img
        src={imgSrc}
        className=' sm:w-[60px] sm:h-[60px] lg:w-[140px] lg:h-[80px] rounded-lg object-cover'
        alt=''
      />
      <div className='ml-2 flex-1'>
        <h3 className='text-textColor sm:text-[12px] lg:text-[16px]'>
          {videoName}
          <span className='block text-[12px] text-gray-400'>{artistName}</span>
        </h3>
        <div className='flex items-center mt-2 space-x-6'>
          <p className='text-[14px] font-bold text-gray-500'> length 12.25</p>
          <p className='text-[14px] font-bold text-gray-500'>views 7,294</p>
        </div>
      </div>
    </div>
  );
}

export default RecommendList;
