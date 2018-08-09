/* eslint-disable */
import React from 'react';

import ReportsContainer from '../components/ReportsContainer';

const ReportsScreen = props => <ReportsContainer screen={props.navigation.state.key} {...props} />;

export default ReportsScreen;
