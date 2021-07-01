import React from 'react';
import { withRouter } from 'react-router';

import {
    GoBackContainer
} from './go-back-button.styles';

const GoBackButton = ({history}) => (
    <GoBackContainer onClick={() => history.goBack()}>GO BACK</GoBackContainer>
)

export default withRouter(GoBackButton);