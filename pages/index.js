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
import gsap from 'gsap';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Collection from '../components/Collection';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import RecommendList from '../components/RecommendList';
import VideoContainer from '../components/VideoContainer';
import Data from '../components/Data';

export default function Home() {
  gsap.registerPlugin();
  const [video, setVideo] = useState({
    videoName: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
  });
  const tl = gsap.timeline({ delay: 0.3 });
  //* Horizontal Scroll @ bottom section
  useEffect(() => {
    const scrollContainer = document.querySelector('#scrollContainer');
    scrollContainer.addEventListener('wheel', (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    });

    tl.from(
      '#logo',
      { x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5 },
      'Start'
    );
    gsap.from(
      '#searchBox',
      { x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5 },
      'Start'
    );
    gsap.from(
      '#profileContainer',
      { x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5 },
      'Start'
    );
    gsap.from('#videoContainer', { opacity: 0, duration: 2.0 });
    gsap.from(
      '#leftMenu div',
      { xPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)' },
      'Start'
    );
    gsap.from(
      '#recomendedList div',
      { xPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)' },
      'Start'
    );
    gsap.from(
      '#scrollContainer div',
      { yPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)' },
      'Start'
    );
  }, [tl]);

  return (
    <div className='flex flex-col bg-mainBg w-screen h-screen overflow-hidden'>
      <Head>
        <title>Video Blog</title>
        <link rel='icon' href='favicon.ico' />
      </Head>

      <Header />
      {/* Main container */}
      <div className='flex w-full h-[calc(100%-80px)]'>
        {/* Left menu */}
        <div
          className='min-w-[60px] sm:w-[6%] md:w-[10%] h-full flex flex-col items-center justify-evenly'
          id='leftMenu'
        >
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
          <div className='w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2'>
            {/* Video Container */}
            <div className='sm:col-span-6 md:col-span-2 p-2 rounded-lg overflow-hidden flex items-center justify-center bg-searchBg'>
              <VideoContainer data={video} />
            </div>
            {/* Recommended List */}
            <div
              className=' bg-searchBg md:col-span-1 bg-primary sm:col-span-6  overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-800 rounded-lg'
              id='recomendedList'
            >
              <p className='flex justify-center text-textColor text-[18px] font-bold my-2 p-2'>
                Recommended
              </p>

              {Data &&
                Data.map((data) => (
                  <div
                    key={data.id}
                    onClick={() =>
                      setVideo({
                        videoName: data.videoName,
                        videoSrc: data.videoSrc,
                      })
                    }
                  >
                    <RecommendList
                      imgSrc={data.imgSrc}
                      videoName={data.videoName}
                      artistName={'Artist Name'}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className='w-full h-[30%]'>
            <div
              className='flex items-center py-2 overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-800'
              id='scrollContainer'
            >
              {Data &&
                Data.map((data) => (
                  <Collection key={data.id} imgSrc={data.imgSrc} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
