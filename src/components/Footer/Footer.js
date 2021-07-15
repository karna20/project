import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterSpan,
  FooterDesc,
  FooterLink,
  SocialIcons,
  SocialIconLink,
} from "./Footer.element";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About E-Tapovan</FooterLinkTitle>
            {/* <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink> */}

            <p>
              Our mission is to produce the sensitive, laborious, dynamic,
              patriotic and spiritual <br />
              leaders for bringing up perfect global amity.
            </p>
            <br />
            <p>
              <b>Phone:</b> +91 97238-87255, 74338-02178
            </p>
            <p>
              <b>Email:</b>{" "}
              <a href="mailto: info@etapovan.com">info@etapovan.com</a>
            </p>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href={""}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
            {/* <FooterLink to="/">//Mobile No//</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">//Email//</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink> */}
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterSpan>
        © 2021 TAPOVAN SANSKAR FOUNDATION, ALL RIGHTS RESERVED
      </FooterSpan>
    </FooterContainer>
  );
}

export default Footer;
