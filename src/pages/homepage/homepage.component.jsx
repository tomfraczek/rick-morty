import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// import Pagination from '../pagination/pagination.component';

const GET_CONTINENTS = gql`
{
    characters(page: 1) {
        info {
          count
          pages
        }
        results {
          name
        }
      }
}
`;

const Homepage = () => {

    // const RenderPagination = () => {
    //     if(searchResults.length){
    //         return <Pagination pages={searchInfo.total_pages} handleChange={handleChange}/>
    //     }

    //     return null;
    // }

    return(
        <>
            <Query query={GET_CONTINENTS}>
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
            </Query>
            {/* <RenderPagination /> */}
        </>
    )
}

export default Homepage;