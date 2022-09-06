import React from 'react'
import { 
  FooterWrapper, FooterContent, 
  LeftContent, FooterLogo, 
  FooterText, OurLine, 
  RightContent, FooterList,
  H3, H4, FooterIcons, FooterRight} from './FooterElement'
import Logo from '../../images/jalel-real-estate-logo.png'
import PayImg from '../../images/payment.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
function Footer() {
  return (
     <>
      <FooterWrapper>
        <FooterContent>
          <LeftContent>
            <FooterLogo>
              <img src={Logo} alt="footer logo" />
            </FooterLogo>
            <FooterText>
              At Jalel Real Estate We’re passionate about helping our clients find the right home for their family
            </FooterText>
            <OurLine>(233) 204 378 020</OurLine>
            <FooterText className='last'>
              GK 28 LEMON ST
              KUMASI, KWADASO 
            </FooterText>
          </LeftContent>
          <RightContent>
            <FooterList>
              <H3>QUICK LINKS</H3>
              <H4>
                <a href="/">HOME</a>
                <a href="/shop">SHOP</a>
                <a href="/my-account">ACCOUNT</a>
                <a href="/">CONTACT</a>
              </H4>
            </FooterList>
            <FooterList>
            <H3>CATEGORIES</H3>
              <H4>
                <a href="/">Bungalow</a>
                <a href="/">Skyscrapers</a>
                <a href="/">Apartment</a>
                <a href="/">2 Bedroom</a>
              </H4>
            </FooterList>
            <FooterList>
            <H3>ABOUT PAYMENT</H3>
             <img src={PayImg} alt="payment" />
              <H4>
                <h5>Follow Us</h5>
              </H4>

              <FooterIcons>
                <FaFacebook className='f-icons'/>
                <FaTwitter className='f-icons'/>
                <FaInstagram className='f-icons'/>
                <FaYoutube className='f-icons'/>
              </FooterIcons>
            </FooterList>
          </RightContent>
        </FooterContent>
      </FooterWrapper>
      <FooterRight>
        <p>All Right Reserved &copy; 2022 | Jalel Real Estate</p>
      </FooterRight>
     </>
  )
}

export default Footer