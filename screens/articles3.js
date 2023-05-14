import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Actions, Lightbox} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class articles3 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width / 1.08,
              alignSelf: 'center',
              marginTop: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: 'lightgray',
              paddingBottom: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 220,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '96%'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                    fontWeight: 'bold',
                    paddingTop: 15,
                  }}>
                  Covid-19 Was a Top Cause of Death in 2020 and 2021, Even for
                  Younger People
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'gray'}}>Dec 22, 2022</Text>
                  <View
                    style={{
                      width: '18%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 15,
                      paddingHorizontal: 8,
                      paddingVertical: 5,
                      backgroundColor: '#fbf4fc',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: '#8F49DE',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      Covid-19
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: width / 1.08,
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <Text style={{color: 'gray', fontSize: 15}}>
              Covid-19, a novel coronavirus discovered in 2019, has caused a
              global pandemic. The virus is highly contagious and causes severe
              respiratory illness. As of June 2020, there have been more than
              480,000 cases and over 22,000 deaths worldwide.
            </Text>
            <Text
              style={{
                color: 'gray',
                paddingTop: 10,
                fontSize: 15,
              }}>
              Most cases have been in China, where the virus originated, but the
              disease is spreading rapidly. The first cases of the virus were
              detected in June 2019, in Guangdong Province, China.
            </Text>
            <Text
              style={{
                color: 'gray',
                paddingTop: 10,
                fontSize: 15,
              }}>
              The disease quickly spread across the country and contaminated
              food supplies. The novel coronavirus that was first identified in
              2019 has been officially named Covid-19.
            </Text>
            <Text
              style={{
                color: 'gray',
                paddingTop: 10,
                fontSize: 15,
              }}>
              The name is derived from the Latin word “corona” meaning crown and
              the English word “virus” meaning poison.The specific name,
              SARS-CoV-2, reflects the fact that this virus is a member of the
              family of viruses that cause severe acute respiratory syndrome
              (SARS).
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default articles3;
