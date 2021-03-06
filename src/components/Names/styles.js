import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: ${({ left }) => left || "center"};
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.em`
  font-weight: ${({ size }) => size};
  font-size: 56px;
  transition: 0.3s;
  letter-spacing: 3.5px;
  cursor: default;
  -moz-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(-12deg, 0deg);
  -webkit-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(-12deg, 0deg);
  -o-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(-12deg, 0deg);
  -ms-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(-12deg, 0deg);
  transform: scale(1) rotate(0deg) translate(0px, 0px) skew(-12deg, 0deg);
  &:hover {
    transform: scale(1.15);
  }


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 700px) {
  font-size: 15px
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 1000px) {
  font-size: 32px
}
`;
