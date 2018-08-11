import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import listReport from './listreport';
   
const styles = StyleSheet.create({
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
  });
  
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
                console.log('dddd', data);
                this.setState({ data: data })
            })
    }
    render() {
        return (
            <View>
                 let titledata;
        let PositionData;
        let timeData;
        {
            this.state.data.forEach((y) => {
                titledata = y.title;
                PositionData = y.time;
                timeData = y.time;
                <SectionList
                renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (
                  <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                  {title: titledata, data: [timeData, PositionData]},
                  {title: 'Title2', data: ['item3', 'item4']},
                  {title: 'Title3', data: ['item5', 'item6']},
                ]}
                keyExtractor={(item, index) => item + index}
              />
            })
        }
       
            </View>
        )
        // let titledata;
        // let PositionData;
        // let timeData;
        // {
        //     this.state.data.forEach((y) => {
        //         titledata = y.title;
        //         PositionData = y.time;
        //         timeData = y.time;
        //     })
            
            // this.state.data.map((y) => {
            //     titledata = y.title;
            //     PositionData = y.time;
            //     timeData = y.time;
            //     return {
            //         timeData, PositionData, titledata
            //     }
            // })
        }
    //   return (
    //     <SectionList
    //     renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
    //     renderSectionHeader={({section: {title}}) => (
    //       <Text style={{fontWeight: 'bold'}}>{title}</Text>
    //     )}
    //     sections={[
    //       {title: titledata, data: [timeData, PositionData]},
    //       {title: 'Title2', data: ['item3', 'item4']},
    //       {title: 'Title3', data: ['item5', 'item6']},
    //     ]}
    //     keyExtractor={(item, index) => item + index}
    //   />
    //   );
  }
  
  export default ListViewDemo;