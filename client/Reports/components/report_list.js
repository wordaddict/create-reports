import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import listReport from './listreport';
   
  class ListViewDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
      }
    componentDidMount(){
        listReport()
            .then((data) => {
                console.log('data', data);
                this.setState({ data: data })
            })
    }

    render() {
        return (
          <View style={styles.container} >
            <Text style={styles.h2text}>
              List of Reports
            </Text>
              <FlatList
              data={this.state.data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) =>
              <View style={styles.flatview}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              }
              keyExtractor={item => item.title}
            />
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    h2text: {
      marginTop: 10,
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    title: {
      fontSize: 18
    },
    time: {
      color: 'red'
    }
    
  });
  
  export default ListViewDemo;