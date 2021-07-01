import React, { useEffect } from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCharactersData, selectIsCharactersFetching } from '../../redux/characters/characters.selectors';

import CharacterCard from '../character-card/character-card.component';
import Spinner from '../spinner/spinner.component';

import {
    OverviewContainer,
} from './characters-overview.styles';


// import Pagination from '../pagination/pagination.component';

// const GET_CONTINENTS = gql`
// {
//     characters(page: 1) {
//         info {
//           count
//           pages
//         }
//         results {
//           name
//         }
//       }
// }
// `;

const CharactersOverview = ({charactersData, isFetching}) => {

    // const RenderPagination = () => {
    //     if(searchResults.length){
    //         return <Pagination pages={searchInfo.total_pages} handleChange={handleChange}/>
    //     }

    //     return null;
    // }

    const RenderCharacters = () => {
        if(isFetching) return <Spinner />

        return charactersData.characters.results.map(character => <CharacterCard key={character.id} character={character} />)
    }

    return(
        <OverviewContainer>
            <RenderCharacters />
            {/* <Query query={GET_CONTINENTS}>
                {
                    ({loading, error, data}) => {
                        if(loading){
                            return <>loading</>
                        } else {
                            // console.log(data);
                            return <>loaded</>
                        }
                    }
                }
            </Query> */}
            {/* <RenderPagination /> */}
        </OverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    charactersData: selectCharactersData,
    isFetching: selectIsCharactersFetching
});

export default connect(mapStateToProps)(CharactersOverview);