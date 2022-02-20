import React from 'react';

function VideoContainer() {
  return (
    <div className='relative w-full h-full' id='videoContainer'>
      <video
        src='https://firebasestorage.googleapis.com/v0/b/videoblog-81429.appspot.com/o/videos%2Fproduction%20ID_5077814.mp4?alt=media&token=4009d79c-c1dd-4eb6-9eba-8f29a077bd70'
        id='mainVideo'
        className='min-w-full min-h-full w-auto h-auto bg-cover'
        // controls
        loop
        autoPlay
      ></video>
      <div className='absolute top-0 left-0 z-10 w-full h-[45px] p-2 bg-gradient-to-b from-black to-transparent'>
        <h2 className='text-textColor text-xl'>Video Title</h2>
      </div>
    </div>
  );
}

export default VideoContainer;
