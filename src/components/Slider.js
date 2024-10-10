import 'swiper/css'; //arquivo CSS do modulo
import { Swiper, SwiperSlide } from 'swiper/react'; //modulo 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { useState } from 'react';

import styles from './Slider.module.css';


const Slider = () => {  

    const [ slidesPerView ] = useState(1);
    const slides = [
        { id: '1', image:'https://placehold.co/800x400.png'},
        { id: '2', image:'https://placehold.co/800x400.png'},
        { id: '3', image:'https://placehold.co/800x400.png'},
    ];

    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay ]}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                loop={true} 
                autoplay={{
                    delay: 3000,  // Tempo em milissegundos para passar de um slide para outro
                    disableOnInteraction: false, //Não pausar o autoplay após interação
                }}
            >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img 
                            src={slide.image} 
                            alt={slide.id} 
                            className={styles.slideItem}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};


export default Slider;