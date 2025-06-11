import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useState } from "react";
import Modal from "./Modal";
import styles from "./Slider.module.css";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slidesPerView] = useState(1);
  const navigate = useNavigate();

  const slides = [
    {
      id: "1",
      image: "/images/banner/banner-video.png",
    },
    {
      id: "2",
      image: "/images/banner/banner2.png",
    },
    {
      id: "3",
      image: "/images/banner/banner3.jpg",
    },
    {
      id: "4",
      image: "/images/banner/formulario1.jpg",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNavigatePrefeituraPage = () => {
        window.open("https://portal.londrina.pr.gov.br/index.php?option=com_rsform&view=rsform&formId=72", "_blank");
  };

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
              onClick={index === 0 ? openModal : undefined || slide.id === '4' ? handleNavigatePrefeituraPage : undefined} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src="https://www.youtube.com/embed/BocAIUGc0Sw?si=t1DEIaye911Eenoc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default Slider;
