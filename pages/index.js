import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from '@mui/icons-material';
import Head from 'next/head';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import VideoContainer from '../components/VideoContainer';

export default function Home() {
  return (
    <div className='flex flex-col bg-mainBg w-screen h-screen overflow-hidden'>
      <Head>
        <title>Video Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* Main container */}
      <div className='flex w-full h-[calc(100%-80px)]'>
        {/* Left menu */}
        <div className='min-w-[60px] sm:w-[6%] md:w-[10%] h-full flex flex-col items-center justify-evenly'>
          <MenuItem icon={<Dashboard />} name={'Dashboard'} />
          <MenuItem icon={<VideogameAsset />} name={'Games'} />
          <MenuItem icon={<LocalMovies />} name={'Movies'} />
          <MenuItem icon={<Stream />} name={'Streamer'} />
          <MenuItem icon={<TrendingUp />} name={'Trending'} />
          <MenuItem icon={<Chat />} name={'Messages'} />
          <MenuItem icon={<Favorite />} name={'Favorites'} />
          <MenuItem icon={<Logout />} name={'Logout'} />
        </div>
        {/* Main content */}
        <div className=' sm:w-[calc(100%-60px)] md:w-[90%] h-full'>
          {/* Top Section */}
          <div className='w-full h-[70%] grid grid-cols-3 gap-2 p-2'>
            {/* Video Container */}
            <div className='sm:col-span-6 md:col-span-2 p-2 rounded-lg overflow-hidden flex items-center justify-center bg-slate-600'>
              <VideoContainer />
            </div>
            {/* Recommended List */}
            <div className='sm:col-span-6 md:col-span-1 bg-slate-600 p-2 rounded-lg flex flex-col'>
              Recommendations
            </div>
          </div>

          {/* Bottom Section */}
          <div className='w-full h-[30%] bg-slate-600 rounded-lg'></div>
        </div>
      </div>
    </div>
  );
}
