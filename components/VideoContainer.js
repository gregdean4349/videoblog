import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

function VideoContainer({ data }) {
  const [playing, setPlaying] = useState(false);

  const tl = gsap.timeline({ delay: 0.3 });

  useEffect(() => {
    if (playing) {
      tl.fromTo(
        '#playingVideoName',
        { y: 0, opacity: 1 },
        { y: -20, opacity: 0 }
      );
    } else {
      tl.fromTo(
        '#playingVideoName',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
    }
  }, [playing, data, tl]);

  return (
    <div className='relative w-full h-full' id='videoContainer'>
      <video
        src={data.videoSrc}
        controls
        className='min-w-full min-h-full h-full w-full bg-cover'
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
      <div className='flex absolute top-0 left-0 z-10 w-full h-[50px] p-2 px-3 bg-gradient-to-b from-black to-transparent'>
        <h2 className='text-textColor text-xl' id='playingVideoName'>
          {data.videoName}
        </h2>
      </div>
    </div>
  );
}

export default VideoContainer;
