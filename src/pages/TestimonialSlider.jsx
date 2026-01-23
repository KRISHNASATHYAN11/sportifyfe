import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Avatar } from "flowbite-react";


const TestimonialSlider = () => {
  return (
    <div className=" from-green-900 via-green-700 to-green-600 ">
     

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
         breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full px-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate "
          >
            <Avatar
              style={{ width: "50px", borderRadius: "50%" }}
              img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNS0zODUucG5n.png"
              alt="avatar of Jese"
              rounded
            />{" "}
            <div className="flex justify-center items-center rounded-lg">
              <div className=" flex justify-center items-center rounded-lg">
                <div className="flex gap-1 text-yellow-400 text-2xl ">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>
            </div>
            <h5 className="text-bold text-white">Sherine Thomas</h5>
            <p className="text-white">
              As a beginner, most apps confuse me. But Sportify is simple, easy
              to follow, and the progress charts make me feel proud of my
              improvements.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
          >
            <Avatar
              style={{ width: "50px", borderRadius: "50%" }}
              img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stczMxLXRlbi0xNjItam9iNy1qb2I5MDUucG5n.png"
              alt="avatar of Jese"
              rounded
            />
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-400">★</span>
              </div>
            </div>
            <h5 className="text-bold text-white">Alice Fernendez</h5>
            <p className="text-white">
              I’ve tried many fitness apps, but Sportify stands out. The
              community vibe and the reminder system keep me active every day.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
          >
            <Avatar
              style={{ width: "50px", borderRadius: "50%" }}
              img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
              alt="avatar of Jese"
              rounded
            />
            <div className="flex justify-center items-center rounded-lg"></div>
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <h5 className="text-bold text-white">Steve Linwards</h5>
            <p className="text-white">
              I started using Sportify last month, and it genuinely helped me
              stay consistent. The challenges are fun, and I like how everything
              feels smooth and fast
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
          >
            <Avatar
              style={{ width: "50px", borderRadius: "50%" }}
              img="https://img.freepik.com/premium-photo/smiling-man-png-sticker-round-badge-transparent-background_53876-996829.jpg?semt=ais_hybrid&w=740&q=80"
              alt="avatar of Jese"
              rounded
            />
            <div className="flex justify-center items-center rounded-lg"></div>
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-400">★</span>
              </div>
            </div>
            <h5 className="text-bold text-white">Mathews Vincent</h5>
            <p className="text-white">
              Sportify made my daily fitness routine so simple. I love how clean
              the design is, and the tracking features keep me motivated. Easily
              one of the best apps I’ve used!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
