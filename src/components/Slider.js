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
        "https://thumbs.dreamstime.com/b/dente-bonito-da-escova-do-dentista-dos-desenhos-animados-79369587.jpg",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDzi5n-VCOQIGnwptfNCqb8SsCwaqtI5qLQ&s",
    },
    {
      id: "3",
      image:
        "https://static.vecteezy.com/ti/vetor-gratis/p1/11152652-icone-do-logotipo-do-dente-e-linha-para-texto-para-modelo-de-design-de-atendimento-odontologico-de-dentista-ou-estomatologia-simbolo-de-dente-de-contorno-de-linha-preta-isoladoial-para-clinica-odontologica-ou-centro-medico-de-odontologia-e-creme-dental-vetor.jpg",
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
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.id}
              className={styles.slideItem}
              onClick={index === 0 ? openModal : undefined} // Abre o modal se for o primeiro slide
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          width="728"
          height="410"
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
