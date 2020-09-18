import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export const SideIndicator = styled.div`
  height: 50px;
  width: 2px;
  margin-bottom: 15px;
  background-color: ${({ principal }) => (!!principal ? "#fff" : "#fff9")};
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 32px;
  margin-top: 4px;
`;

export const HeroNameLabel = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  width: 100%;
`;

export const ContainerList = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 50px;
`;

export const ActorNameLabel = styled.div`
  font-size: 10px;
  font-weight: 200;
  margin-top: 3px;
`;
export const CharacterLabel = styled.div`
  margin-bottom: 24px;
  margin-top: 8px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})``;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    list-style: none;
    padding: 0px 30px;
    font-size: 18px;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Searchbar = styled.input`
  border-radius: 25px;
  border: none;
  padding: 8px 15px;
  outline: 0;
`;

export const Col = styled.div`
 
`;