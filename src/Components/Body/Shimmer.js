import React, { useEffect, useRef, useState } from 'react'
import { ShimmerSimpleGallery } from 'react-shimmer-effects'

const Shimmer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className=' mx-20 mt-4'>
        <ShimmerSimpleGallery col={windowWidth>700 ? 4  : 2} row={5} card imageHeight={200} caption />
    </div>
  )
}

export default Shimmer
