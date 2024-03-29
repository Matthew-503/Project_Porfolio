import React from 'react';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di'; // Styling
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'; // Styling

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'; // Using styling that applies to whole application

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />

    <SectionTitle>
      Technologies
    </SectionTitle>

    <SectionText>
      I've worked with a range of technologies in the web development world. From Back-End to Design
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />

        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>

          <ListParagraph>
            Experience with
            <br />
            React.js and Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />

        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>

          <ListParagraph>
            Experience with
            <br />
            Node.js and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />

        <ListContainer>
          <ListTitle>
            UI / UX
          </ListTitle>

          <ListParagraph>
            Experience with
            <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
