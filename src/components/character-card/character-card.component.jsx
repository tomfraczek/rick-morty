import React from 'react';
import { withRouter } from 'react-router';

import CustomButton from '../custom-button/custom-button.component';

import {
    CardContainer,
    ImageContainer,
    DetailsContainer,
    InfoContainer,
} from './character-card.styles';

const CharacterCard = ({character, history}) => (
    <CardContainer>
        <ImageContainer>
            <img src={character.image} alt="" />
        </ImageContainer>

        <DetailsContainer>
            <InfoContainer>
                <span>Name:</span>
                {character.name}
            </InfoContainer>

            <InfoContainer>
                <span>Gender:</span>
                {character.gender}
            </InfoContainer>

            <InfoContainer>
                <span>Species:</span>
                {character.species}
            </InfoContainer>
        </DetailsContainer>

        <CustomButton
                inverted
                onClick={() => history.push(`/character/${character.id}`)}
            >
                Read More
            </CustomButton>
    </CardContainer>
)

export default withRouter(CharacterCard);