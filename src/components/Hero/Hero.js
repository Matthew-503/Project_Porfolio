import React from 'react';

// Styling in following 2 is used across the whole application from styles
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; // Styling
import Button from '../../styles/GlobalComponents/Button'; // Styling

import { LeftSection } from './HeroStyles'; // Styling

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and establishing developers to elevate their skills. Building meaningful applications and contributing abck to the community
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
); 

export default Hero;