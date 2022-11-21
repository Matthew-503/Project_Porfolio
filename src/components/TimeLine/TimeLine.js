import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      //     scroll(carouselRef.current, scrollLeft);
      //   }
      // }

      // const handleScroll = () => {
      //   if (carouselRef.current) {
      //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      //     setActiveItem(index);
      //   }
      // }

      // // snap back to beginning of scroll when window is resized
      // // avoids a bug where content is covered up if coming from smaller screen
      // useEffect(() => {
      //   const handleResize = () => {
      //     scroll(carouselRef.current, 0);
      //   }

      //   window.addEventListener('resize', handleResize);
      // }, []);

      return (
        <Section id="about">
          <SectionTitle>
            About Me
          </SectionTitle>

          <SectionText>
            The purpose of JavaScript Mastery is to help aspiring and establishing developers to elevate their skills. Building meaningful applications and contributing abck to the community
          </SectionText>

          <CarouselContainer ref={carouselRef}>
            <>
              {/* Loop over the TimeLineData */}
              {TimeLineData.map((item, index) => (
                // Show data
                <CarouselMobileScrollNode
                  key={index}
                  final={index === TOTAL_CAROUSEL_COUNT - 1}
                >
                  <CarouselItem
                    index={index}
                    id={`carousel__item-${index}`}
                    active={activeItem}
                    onClick={(e) => handleClick}
                  >
                    <CarouselItemTitle>
                      
                    </CarouselItemTitle>

                  </CarouselItem>
                </CarouselMobileScrollNode>
              ))}
            </>
          </CarouselContainer>
        </Section>
      );
    };

    export default Timeline;
