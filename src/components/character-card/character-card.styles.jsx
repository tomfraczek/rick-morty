import styled from 'styled-components';
import media from '../../global/styles/media';

export const CardContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px auto;
    transition: background 0.3s ease;
    

    ${media.tablet`
        width: calc(33.3% - 20px);
        margin: 0 10px 40px 10px;
    `};
`;

export const ImageContainer = styled.div`
    // width: 250px;

    img{
        width:100%;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoContainer = styled.span`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    &:first-of-type{
        margin-top: 10px;
    }
`;
