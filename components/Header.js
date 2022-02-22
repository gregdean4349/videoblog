import Image from 'next/image';
import React from 'react';
import Logo from '../public/images/—Pngtree—creative bulb logo_1357829.png';
import { Notifications, Search, Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ProfilePic from '../public/images/GoogleProfilePic.gif';

function Header() {
  return (
    <div className='flex items-center w-full h-[80px] py-4 md:px-8 sm:px-4 px-1'>
      <div className='relative h-[40px] w-[40px] sm:w-[50px] sm:h-[50px] cursor-pointer lg:ml-[23px] '>
        <Image
          objectFit='cover'
          src={Logo}
          alt='logo'
          layout='fill'
          id='logo'
        />
      </div>
      <div
        className='ml-20 bg-searchBg rounded-md h-[40px] sm:flex items-center px-2 overflow-hidden text-gray-400 outline outline-gray-900 hidden'
        id='searchBox'
      >
        <Search />
        <input
          className='w-full h-full px-2 bg-transparent outline-none border-0'
          type='text'
          placeholder='Search...'
        />
      </div>

      <div
        className='flex items-center justify-evenly h-[40px] lg:w-[25%] ml-auto'
        id='profileContainer'
      >
        <IconButton className='lg:mx-4'>
          <Settings className='text-gray-400 hover:text-gray-500' />
        </IconButton>

        <IconButton className='lg:mx-4'>
          <Notifications className='text-gray-400 hover:text-gray-500' />
        </IconButton>

        <div className='flex items-center'>
          <div className='relative h-[40px] w-[40px] min-w-[40px] rounded-full cursor-pointer border border-logoColor'>
            <Image src={ProfilePic} objectFit='cover' alt='profilePic' />
          </div>

          <p className=' text-logoColor/90 text-[12px] font-bold ml-2'>
            Gregory Dean{' '}
            <span className='block text-[10px] text-logoColor/50 font-thin'>
              Product Designer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
