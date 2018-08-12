import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9
import getLocation from '../components/geolocation';
import submitReport from '../components/submitReport';

const Form = t.form.Form;

const Report = t.struct({
  title: t.String,
  report: t.maybe(t.String)
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 10
      },
    },
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }

  const options = {
    fields: {
      title: {
        error: 'Without a report title, how do we document your report?'
      },
      report: {
        error: 'kindly grace us with your report'
      },
    },
    stylesheet: formStyles,
  };

  export default class CreateReport extends Component {
    handleSubmit = () => {
        const value = this._form.getValue();
        let position = getLocation();
        console.log('value: ', value);
        let data = { value, position };
        submitReport(data);
      }

      render() {
        return (
          <View style={styles.container}>
            <Text>Give a report!</Text>
            <Form 
              ref={c => this._form = c}
              type={Report} 
              options={options}
            />
            <Button
              title="Report!"
              onPress={this.handleSubmit}
            />
         </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });