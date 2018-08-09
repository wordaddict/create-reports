import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, FlatList, StatusBar, Platform } from 'react-native';
import { View } from 'native-base';

import Utils from '../utils';
import CONSTANTS from '../constants';
import COLORS from '../constants/Colors';
import Header from '../components/Header';
import ReportModel from './../api/Reports';
import AddReport from '../components/AddReport';
import AddReportButton from '../components/AddReportButton';
import ReportItem from '../components/ReportItem';

const styles = StyleSheet.create({
  row: {
    top: 15,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const propTypes = {
  screen: PropTypes.oneOf([CONSTANTS.ALL, CONSTANTS.ACTIVE, CONSTANTS.COMPLETED]).isRequired,
};

export default class ReportsContainer extends React.Component {
  state = {
    addingReport: false,
  };

  componentDidMount() {
    this.api = new ReportModel('react-Reports');
  }

  onAllData = (Reports, streamData) => {
    // merge streaming Reports data along with current Reports
    const ReportsData = Utils.mergeReports(Reports, streamData);

    // filter data based on "screen": [All | Active | Completed]
    const filteredData = this.filterReportsData(ReportsData);

    return (
      <FlatList
        style={{ width: '100%', top: 15 }}
        data={filteredData}
        keyExtractor={item => item._id}
        renderItem={({ item: Report }) => (
          <ReportItem Report={Report} onUpdate={this.api.update} onDelete={this.api.destroy} />
        )}
      />
    );
  };

  filterReportsData = (ReportsData) => {
    const { screen } = this.props;

    switch (screen) {
      case CONSTANTS.ALL:
        return ReportsData;
      case CONSTANTS.ACTIVE:
        return ReportsData.filter(Report => !Report.completed);
      case CONSTANTS.COMPLETED:
        return ReportsData.filter(Report => Report.completed);
    }

    return ReportsData;
  };

  render() {
    const isAndroid = Platform.OS === 'android';
    return (
      <View style={{ flex: 1 }}>
        <Header />
        {isAndroid ? (
          <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        ) : (
          <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
        )}
        <ScrollView>
          {this.state.addingReport ? (
            <View style={styles.row}>
              <AddReport
                onAdd={(Report) => {
                  this.setState({ addingReport: false });
                  this.api.add(Report);
                }}
                onCancelDelete={() => this.setState({ addingReport: false })}
                onBlur={() => this.setState({ addingReport: false })}
              />
            </View>
          ) : null}
        </ScrollView>
        <AddReportButton onPress={() => this.setState({ addingReport: true })} />
      </View>
    );
  }
}

ReportsContainer.propTypes = propTypes;
