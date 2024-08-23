import React from 'react';
import burj_Khalifa from '../images/Burj_Khalifa.jpg';
import burj_Al_Arab from '../images/Burj_Al_Arab.jpg';
import aquaventure_Park from '../images/Aquaventure_Park.jpg';
import dubai_Mall from '../images/Dubai_Mall.jpg';
import dubai_Miracle_Garden from '../images/Dubai_Miracle_Garden.jpg';
import the_Dubai_Fountain from '../images/The_Dubai_Fountain.jpg';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/ImageSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title } from 'process';

const slides = [
  {image: burj_Khalifa, title: 'Burj Khalifa', lat: 25.1972, lng: 55.2744},
  {image: burj_Al_Arab, title: 'Burj Al Arab', lat: 25.1415573, lng: 55.18369},
  {image: aquaventure_Park, title: 'Aquaventure Park', lat: 25.1343596, lng: 55.1120},
  {image: dubai_Mall, title: 'Dubai Mall', lat: 25.1974476, lng: 55.2743},
  {image: dubai_Miracle_Garden, title: 'Dubai Miracle Garden', lat: 25.0600117, lng: 55.2418898},
  {image: the_Dubai_Fountain, title: 'The Dubai Fountain', lat: 25.1953487, lng: 55.2731},
];

const ImageSlider = (props: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 500,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleCardClick = (slide: any) => {
    // props.setSelectedLocation({lat: slide.lat, lng: slide.lng})
    props.setSelectedLocation(slide.title)

  };

  return (
    <div className={styles.slideContainer}>
      <div style={{margin: '20px 0'}}>
        <Slider { ...settings}>
          {slides.map((slide) => {
            return (
              <div className={styles.card} key={slide.title} onClick={()=>handleCardClick(slide)}>
                <div>
                  <Image className={styles.sliderImage} src={slide.image} alt={slide.title} />
                </div>
                <div className={styles.sliderDescription}>
                  <p className={styles.slideTitle}>{slide.title}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;