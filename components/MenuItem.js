import React from 'react';

function MenuItem({ icon, name }) {
  return (
    <div className='group flex items-center cursor-pointer relative'>
      <i className='text-gray-500 scale-125 group-hover:text-textColor'>
        {icon}
      </i>

      <div className='mt-1 hidden group-hover:block z-50 absolute left-12 bg-textColor px-4 py-1 rounded-md before:absolute before:w-[22px] before:h-[22px] before:rounded-sm before:bg-textColor before:left-[-8px] before:top-[5px] before:rotate-45'>
        <p
          className={`text-mainBg ml-1 ${
            name === 'Dashboard' && 'text-green-700 font-extrabold'
          } ${
            name === 'Logout' && 'text-logoColor bg-searchBg rounded-md px-5'
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
