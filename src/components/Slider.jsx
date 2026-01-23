import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MdOutlineSportsBasketball } from "react-icons/md";


const animation = { duration: 10000, easing: (t) => t };

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
      spacing: 5,
    },
    created(s) {
      s.moveToIdx(3, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="450"
        data-aos-duration="700"
        className="flex justify-center md:px-20 px-10 font-bold leading-9 md:text-2xl text-xl mb-5 aos-init aos-animate"
      >
        <MdOutlineSportsBasketball
          className="animate-bounce"
          size={30}
          style={{ color: "green" }}
        />
        <h5 className="text-white "> Popular Sports</h5>
      </div>
      <div ref={sliderRef} className="keen-slider container  mt-3 mb-3">
        <div className="keen-slider__slide number-slide1 w-50 ">
          {" "}
          <img
            className="rounded-2xl"
            src="https://media.istockphoto.com/id/1336646871/photo/teenagers-practicing-soccer-in-sports-field.jpg?s=612x612&w=0&k=20&c=rFQShDrheD1dCvodjP2gk0eU_YaMaB6I8VNr86uuGx8="
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide2 w-50">
          {" "}
          <img
            className="rounded-2xl"
            src="https://gameonturf.co.nz/wp-content/uploads/2025/06/Featured-Image.webp"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide3 w-50">
          {" "}
          <img
            className="rounded-2xl"
            src="https://media.istockphoto.com/id/691338554/photo/two-couples-playing-badminton.jpg?s=612x612&w=0&k=20&c=3y0Fhwq_fpyBAVZcVBjOqKO6C7nN8yAtAKLabk6KAfk="
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide4 w-50">
          {" "}
          <img
            className="rounded-2xl"
            src="https://www.courtsoftheworld.com/upload/courts/34051/0/COTW-dda-siri-fort-sports-complex-basketball-court-1593434881.webp"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide5 w-50">
          <img
            className="rounded-2xl"
            src="https://media.istockphoto.com/id/2121085620/photo/badminton-sport.jpg?s=612x612&w=0&k=20&c=uHy8wwxRoehJHNemHXozRTATg7CSWYGajFSYP0DPc8s="
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
