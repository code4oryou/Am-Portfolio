import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="container mx-auto px-5 md:px-10 pt-20 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title text-2xl md:text-4xl" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle text-xl md:text-2xl" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-20 max-w-full md:max-w-md drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-6 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." className="w-full object-cover rounded-t-3xl" />
                <div className="flex flex-col gap-2 mt-3">
                  <h5 className="font-bold font-Poppins text-lg">{content.title}</h5>
                  <button className="font-bold text-gray-700 self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
