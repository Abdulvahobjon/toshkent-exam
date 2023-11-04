import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data1 from "./data";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

export default function Home() {
  const {data , isPanding , error} = useFetch("http://localhost:3000/data")
  return (
    <div>
      {isPanding && <h3>Loading...</h3>}
      {error && <h3>error XXXXXX</h3>}
      <section className="mb-16">
        <div className="p-4 flex items-center max-w-[610px] mx-auto border border-[#ddd] rounded-xl">
          <p
            className="flex items-cent
    er gap-5"
          >
            <b className="font-bold border-r-2 pr-5">Display total price</b>
            Includes all fees , before taxes 
          </p>
          <div className="bg-[#B0B0B0] border-4 border-[#B0B0B0] rounded-3xl flex items-center ml-auto w-12">
            <button className="h-6 w-6 bg-white rounded-full"></button>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1280px] mx-auto px-5 rounded-md overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 50,
              disableOnInteraction: true,
            }}
          >
            {dataBanner.map((item) => {
              return (
                <SwiperSlide>
                  <img
                    className="w-full object-cover h-[266px] rounded-md"
                    src={item.img}
                    alt="swipper img"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="pt-11 pb-[230px]">
        <div className="max-w-[1280px] mx-auto px-5 grid grid-cols-4 gap-6">
          {/* {data.map((item)=>{
             console.log(item.title);
          })} */}
          {data ? data.map(function(item){
              return <Link key={item.id} to={`/${item.id}`} className="hover:shadow-sm pb-5">
              <img
                className="rounded-lg w-full h-[286px] object-cover mb-3"
                src={item.img}
                alt="category img"
              />
              <div className="flex items-center justify-between mb-[2px]">
                <h3 className="text-[#222] text-base font-bold capitalize leading-5">
                  {item.title}
                </h3>
                <span className="flex gap-1 items-center text-[#222] leading-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.33212 0.982762L4.78562 4.31464L1.08812 4.79089C1.01685 4.79995 0.949686 4.8293 0.894617 4.87543C0.839547 4.92157 0.798888 4.98255 0.777478 5.05113C0.756067 5.11971 0.754806 5.19299 0.773844 5.26226C0.792882 5.33154 0.831417 5.39388 0.884867 5.44189L3.61974 7.90376L2.88287 11.5983C2.86868 11.6691 2.87525 11.7425 2.90177 11.8096C2.92829 11.8768 2.97363 11.9349 3.03236 11.9769C3.0911 12.0189 3.16071 12.0431 3.23284 12.0465C3.30497 12.0499 3.37656 12.0324 3.43899 11.9961L6.67187 10.1223L9.90624 11.9961C9.96864 12.0323 10.0401 12.0496 10.1122 12.0462C10.1842 12.0427 10.2537 12.0186 10.3123 11.9766C10.371 11.9347 10.4163 11.8767 10.4428 11.8097C10.4694 11.7426 10.476 11.6694 10.462 11.5986L9.72512 7.90376L12.46 5.44189C12.5133 5.39389 12.5518 5.3316 12.5707 5.26241C12.5897 5.19322 12.5885 5.12004 12.5671 5.05155C12.5457 4.98305 12.5052 4.92212 12.4502 4.87599C12.3953 4.82985 12.3283 4.80045 12.2571 4.79126L8.55962 4.31464L7.01199 0.982762C6.98189 0.917923 6.93387 0.863039 6.87361 0.82458C6.81335 0.78612 6.74335 0.765686 6.67187 0.765686C6.60038 0.765686 6.53038 0.78612 6.47012 0.82458C6.40986 0.863039 6.36222 0.917923 6.33212 0.982762Z"
                      fill="#222222"
                    />
                  </svg>
                  <span>{item.id}</span>
                </span>
              </div>
              <p className="text-[#717171] leading-5 text-base">
                {item.category}
              </p>
              <p className="text-[#717171] leading-5 text-sm mb-2">
                {item.num}
              </p>
              <p className="text-[#222] text-base leading-5 flex gap-1 items-center">
                <b className="font-bold">{item.price}</b>night
              </p>
            </Link>
          }) :  data1.map(function(item){
            return <Link key={item.id} to={`/${item.id}`} className="hover:shadow-sm pb-5">
            <img
              className="rounded-lg w-full h-[286px] object-cover mb-3"
              src={item.img}
              alt="category img"
            />
            <div className="flex items-center justify-between mb-[2px]">
              <h3 className="text-[#222] text-base font-bold capitalize leading-5">
                {item.title}
              </h3>
              <span className="flex gap-1 items-center text-[#222] leading-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.33212 0.982762L4.78562 4.31464L1.08812 4.79089C1.01685 4.79995 0.949686 4.8293 0.894617 4.87543C0.839547 4.92157 0.798888 4.98255 0.777478 5.05113C0.756067 5.11971 0.754806 5.19299 0.773844 5.26226C0.792882 5.33154 0.831417 5.39388 0.884867 5.44189L3.61974 7.90376L2.88287 11.5983C2.86868 11.6691 2.87525 11.7425 2.90177 11.8096C2.92829 11.8768 2.97363 11.9349 3.03236 11.9769C3.0911 12.0189 3.16071 12.0431 3.23284 12.0465C3.30497 12.0499 3.37656 12.0324 3.43899 11.9961L6.67187 10.1223L9.90624 11.9961C9.96864 12.0323 10.0401 12.0496 10.1122 12.0462C10.1842 12.0427 10.2537 12.0186 10.3123 11.9766C10.371 11.9347 10.4163 11.8767 10.4428 11.8097C10.4694 11.7426 10.476 11.6694 10.462 11.5986L9.72512 7.90376L12.46 5.44189C12.5133 5.39389 12.5518 5.3316 12.5707 5.26241C12.5897 5.19322 12.5885 5.12004 12.5671 5.05155C12.5457 4.98305 12.5052 4.92212 12.4502 4.87599C12.3953 4.82985 12.3283 4.80045 12.2571 4.79126L8.55962 4.31464L7.01199 0.982762C6.98189 0.917923 6.93387 0.863039 6.87361 0.82458C6.81335 0.78612 6.74335 0.765686 6.67187 0.765686C6.60038 0.765686 6.53038 0.78612 6.47012 0.82458C6.40986 0.863039 6.36222 0.917923 6.33212 0.982762Z"
                    fill="#222222"
                  />
                </svg>
                <span>{item.id}</span>
              </span>
            </div>
            <p className="text-[#717171] leading-5 text-base">
              {item.category}
            </p>
            <p className="text-[#717171] leading-5 text-sm mb-2">
              {item.num}
            </p>
            <p className="text-[#222] text-base leading-5 flex gap-1 items-center">
              <b className="font-bold">{item.price}</b>night
            </p>
          </Link>
        })}
          
        </div>
      </section>
    </div>
  );
}
