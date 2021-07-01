import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_CONTINENTS = gql`
{
    characters(page: 1) {
        info {
          count
        }
        results {
          name
        }
      }
}
`;

const Homepage = () => (
    <>
        <Query query={GET_CONTINENTS}>
            {
                ({loading, error, data}) => {
                    if(loading){
                        return <>loading</>
                    } else {
                        console.log(data);
                        return <>loaded</>
                    }
                }
            }
        </Query>
    </>
)

export default Homepage;