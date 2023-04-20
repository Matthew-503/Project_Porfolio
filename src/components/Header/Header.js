import React from 'react';

// Styling in following 2 is used across the whole application from styles
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; // Styling
import Button from '../../styles/GlobalComponents/Button'; // Styling

import { LeftSection } from './HeaderStyles'; // Styling

const Header = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Matthew's Portfolio
      </SectionTitle>
      <SectionText>
        A web developer and UX/UI designer based in Calgary, Canada. Passionate about creating interactive applications and experiences on the web
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Header;