import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin:5px;
  line-height: 10px;
  border-radius:4px;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 10px;

  &:hover {
    color: #00aced;
  }
`;

const TopBrands = styled.div`
  margin-top: 20px;
`;

const BrandList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BrandItem = styled.li`
  margin: 0 15px;
  font-size: 16px;
`;

const AllRights = styled.p`
  margin-top: 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <TopBrands>
        <h2>Top Brands</h2>
        <BrandList>
          <BrandItem>Adidas</BrandItem>
          <BrandItem>Nike</BrandItem>
          <BrandItem>Puma</BrandItem>
          <BrandItem>Reebok</BrandItem>
          <BrandItem>Under Armour</BrandItem>
        </BrandList>
      </TopBrands>
      <SocialIcons>
        <SocialLink href="https://www.facebook.com/yourpage">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
        <SocialLink href="https://www.twitter.com/yourhandle">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/yourprofile">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="https://wa.me/yourwhatsappnumber">
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialLink>
      </SocialIcons>
      <AllRights>&copy; {new Date().getFullYear()} Viatu. All rights reserved.</AllRights>
    </StyledFooter>
  );
}

export default Footer;
