import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListViewDemo from '../components/report_list';
import CreateReport from '../components/createReport';

export const Tabs = TabNavigator({
    ListViewDemo: {
      screen: ListViewDemo,
    },
    CreateReport: {
      screen: CreateReport,
    },
  });