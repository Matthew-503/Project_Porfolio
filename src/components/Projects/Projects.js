import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles'; // Styling
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'; // Styling

// project properties will be taked from here
import { projects } from '../../Assets/Data';

const Projects = () => (
  <Section nopadding id="projects">

    {/* Section Divider Line */}
    <SectionDivider />

    {/* Project Header */}
    <SectionTitle main>
      Projects
    </SectionTitle>

    <GridContainer>
      {
        // all project properties used will be extracted from constant.js
        // all all project properties used will be listed in the map area to avoid repeation 
        projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />

            <TitleContent>
              {/* HeaderThree contains the title property */}
              <HeaderThree title>
                {title}
              </HeaderThree>

              {/* Dividing Line */}
              <Hr />
            </TitleContent>

            <CardInfo>
              {description}
            </CardInfo>

            <div>
              <TitleContent>
                Stack
              </TitleContent>

              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>
                    {tag}
                  </Tag>
                ))}
              </TagList>
            </div>

            <UtilityList>
              <ExternalLinks href={visit}>
                Code
              </ExternalLinks>

              <ExternalLinks href={source}>
                Source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
); 

export default Projects;