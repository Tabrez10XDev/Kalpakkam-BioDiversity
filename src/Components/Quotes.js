import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import Quotesimg from "./assets/quotes.png";
import Allan from "./assets/Allan.png";
import Tabrez from "./assets/Tabrez.png";
import Varshini from "./assets/Varshini.png";
import Jayaashri from "./assets/Jayaashri.png";
import Kongarasan from "./assets/Kongarasan.png";
import Prabu from "./assets/Prabhu.png";


SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
];

const content = [
  {
    name: "Tabrez Mohammed",
    image: Tabrez,
    year: "4th Year",
    quote: "Within the verdant embrace of our college campus, knowledge intertwines with nature, cultivating a learning environment where students find inspiration in the abundant greenery."
  },
  {
    name: "Allan Jerrold",
    image: Allan,
    year: "4th Year",
    quote: "Nature's classroom awaits us at every corner, where textbooks are replaced by the rustling leaves and gentle whispers of the wind."
  },
  {
    name: "Kavya Varshini",
    image: Varshini,
    year: "4th Year",
    quote: "I sometimes wonder if flowers feel the same way about us as we do about them because they appear to be so beautiful to us."
  },
  {
    name: "Kongarasan",
    image: Kongarasan,
    year: "4th Year",
    quote: "Amidst the lush greenery that envelops our college campus, I find solace and inspiration."
  },
  {
    name: "Jayaashri Chezhian",
    image: Jayaashri,
    year: "4th Year",
    quote: "On the walk to the campus, Looking at the trees that are thriving and standing tall reaching towards the sky , motivates me to be firm, strong, mighty."

  },
  {
    name: "Prabhu",
    image: Prabu,
    year: "4th Year",
    quote: "Our college campus is a living testament to the power of nature's embrace. Here, I walk beneath the canopy of towering trees, absorbing their wisdom and finding my own place within this harmonious ecosystem."
  }
]

const Quotes = () => {
  return (
    <div className="main-swiper">
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="quotebox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="quotes" style={{ width: 320, height: 320, backgroundColor: '#EEEE', borderRadius: 2 }}>
                  <img src={Quotesimg} style={{ width: 48, height: 48, position: 'relative', top: 6, left: 6 }} />
                  <p style={{ textAlign: 'center', margin: 20, fontSize: 16, marginTop: 32 }}>{content[i].quote}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <img src={content[i].image} style={{ width: 55, height: 55, marginLeft: 20 }} />
                    <p style={{ textAlign: 'right', marginRight: 16, color: '#656565' }}>{"-" + content[i].name}<br />{content[i].year}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Quotes;