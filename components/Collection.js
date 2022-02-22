/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Collection({ imgSrc }) {
  return (
    <div className='relative min-w-[250px] max-h-[150px] w-[250px] h-[100%] mx-2 overflow-hidden rounded-lg'>
      <img src={imgSrc} alt='' />
      <div className='flex items-center justify-center w-full h-[40px] bg-collectionBg absolute bottom-0 px-2 '>
        <h2 className='text-textColor text-[17px] font-bold tracking-wide'>
          Category
        </h2>
      </div>
    </div>
  );
}

export default Collection;
