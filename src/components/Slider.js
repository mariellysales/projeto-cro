import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useState } from "react";
import Modal from "./Modal";
import styles from "./Slider.module.css";

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slidesPerView] = useState(1);

  const slides = [
    {
      id: "1",
      image:
        "/images/banner/banner2.jpg",
    },
    {
      id: "2",
      image:
        "/images/banner/banner1.jpg",
    },
    {
      id: "3",
      image:
        "/images/banner/banner3.jpg",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.id}
              className={styles.slideItem}
              onClick={index === 0 ? openModal : undefined}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src="https://www.youtube.com/embed/Zd8Rw004iXI?si=Js7D9xF_sK8v5iZJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default Slider;
