import Link from 'next/link'; // Linking Pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; // Styling
import { DiCssdeck } from 'react-icons/di'; // Styling

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; // Styling

const Header = () => (
  <Container>
    {/* Nav Bar: Logo + name */}
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" />
          {/* Custom styling Span + added in import */}
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    {/* Nav Bar: Titles */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Nav Bar: Icons */}
    <Div3>
      <SocialIcons href="https://github.com/Matthew-503">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/matthew-ng-2b5619222/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      
      <SocialIcons href="https://www.instagram.com/matthew_ng.22/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
