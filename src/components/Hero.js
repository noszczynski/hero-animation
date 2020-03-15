import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import boy from "../images/boy.webp";
import girl from "../images/girl.webp";
import arrow from "../images/arrow.svg";
import gsap, { Power3 } from "gsap";

const StyledHeader = styled.header`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledTextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 500;
  }
`;

const StyledImageSection = styled.section`
  display: flex;
  position: relative;

  & > div {
    position: absolute;
  }
  div:first-of-type {
    width: 45%;
    height: 550px;
    top: 30%;
  }
  div:last-of-type {
    width: 40%;
    height: 450px;
    right: 10%;
  }
`;

const StyledP = styled.p`
  padding: 24px 0;
`;

const StyledImg = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: 0;
  margin-top: 24px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: -50%;
    display: block;
    height: 1px;
    width: 40%;
    background-color: #1da1f2;
  }

  &:hover {
    div img {
      transform: translateX(5px);
    }
  }
`;

const StyledArrow = styled.div`
  border-radius: 50px;
  background: #1da1f2;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    transition: transform 0.2s;
  }
`;

const Hero = () => {
  let images = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline({ delay: 0.8 });

  useEffect(() => {
    //images
    const boy = images.current.firstElementChild;
    const girl = images.current.lastElementChild;

    //content
    const header = content.current.children[0];
    const paragraph = content.current.children[1];
    const button = content.current.children[2];
    console.log(content.current.children[0]);
    //timeline
    tl.from(girl, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(girl, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(boy, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(boy, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);

    tl.from(
      header,
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
        stagger: [header, paragraph, button]
      },
      0.15,
      "Start"
    )
      .from(paragraph, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <StyledHeader>
      <StyledTextSection>
        <StyledText ref={content}>
          <h1>Relieving the burden of disease caused by behaviors.</h1>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            quas repudiandae saepe ut voluptate voluptatibus.
          </StyledP>
          <div>
            <StyledButton>
              EXPLORE
              <StyledArrow>
                <img src={arrow} alt={`go!`} />
              </StyledArrow>
            </StyledButton>
          </div>
        </StyledText>
      </StyledTextSection>
      <StyledImageSection ref={images}>
        <StyledImg>
          <img src={boy} alt={boy} />
        </StyledImg>
        <StyledImg>
          <img src={girl} alt={girl} />
        </StyledImg>
      </StyledImageSection>
    </StyledHeader>
  );
};

export default Hero;
