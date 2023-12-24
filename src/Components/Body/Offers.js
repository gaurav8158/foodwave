import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import offer1 from "../../Assets/offer1.webp"
import offer2 from "../../Assets/offer2.webp"
import offer3 from "../../Assets/offwe3.webp"
import offer4 from "../../Assets/offer4.webp"
import offer5 from "../../Assets/offer5.webp"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offers = () => {
  const imgArr = [offer1, offer2, offer3, offer4, offer5, offer3]

  const sliderRef = useRef(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // This is the breakpoint for tablet devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400, // This is the breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  
  };


  return (
    <div className="w-full m-auto">
      <div className='flex justify-end'>
        <div className='bg-slate-300 text-zinc-700 rounded-xl p-2 cursor-pointer hover:bg-slate-400'>
          <FaAngleLeft onClick={previous} />
        </div>
        <div className='bg-slate-300 text-zinc-700 rounded-xl p-2 ml-1 cursor-pointer  hover:bg-slate-400'>
          <FaAngleRight onClick={next} />
        </div>


      </div>
      <Slider ref={sliderRef}
      
      {...settings}>

        {imgArr.map((data) => {
          return (<div key={data} className='p-2'><img src={data} alt="img" /></div>)
        })}

      </Slider>
      {``}
    </div>
  )
}

export default Offers