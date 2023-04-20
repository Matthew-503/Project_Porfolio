import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Navbar/NavbarStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 825-561-6023">
            825-561-6023
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: nglingshan30@gmail.com">
            nglingshan30@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/Matthew-503">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/matthew-ng-2b5619222/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.instagram.com/matthew_ng.22/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
