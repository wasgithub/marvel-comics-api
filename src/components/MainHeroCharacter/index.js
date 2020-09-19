import React, { useContext } from "react";

import { FiChevronRight } from "react-icons/fi";
import { MiniCharacterList } from "../CharacterList";

import Store from "../../context/provider";
import HerosModel, {ActorNames, ActorDescription, ActorImages} from './../../models/HerosModel'


import {
  SideIndicator,
  LabelContainer,
  HeroNameLabel,
  ActorNameLabel,
  CharacterLabel,
  Container,
  ContainerList,
  Col,
  ActionLabel,
  MiniCharacterListContainer,
} from "./styles";

function MainHeroCharacter() {

  const theme = useContext(Store);

  return (
    <Container style={{ marginTop: "-56px" }}>
      <Col style={{ height: "30px" }}>
        <ActionLabel>
          Character <FiChevronRight />
        </ActionLabel>
      </Col>
      <MiniCharacterListContainer>
        <MiniCharacterList style={{ transform: [{ scale: 0.6 }] }} list={ActorImages[theme.id]}/>
      </MiniCharacterListContainer>
      <ContainerList>
        <LabelContainer>
          <CharacterLabel>
            <Col style={{ height: "30px" }}>
              <HeroNameLabel>
                <ActionLabel style={{ paddingLeft: 0 }}>
                  {HerosModel[theme.id]} <FiChevronRight />
                </ActionLabel>
              </HeroNameLabel>
            </Col>
            <ActorNameLabel>
                {theme?.hero?.description || ActorDescription[theme.id]}
            </ActorNameLabel>
          </CharacterLabel>
        </LabelContainer>
      </ContainerList>
    </Container>
  );
}

export default MainHeroCharacter;
