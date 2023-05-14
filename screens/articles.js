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

class articles extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width / 1.08,
            alignSelf: 'center',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Trendeing
          </Text>
          <Text style={{color: '#8F49DE', fontSize: 15, fontWeight: 'bold'}}>
            See All
          </Text>
        </View>

        <View style={{width: width / 1.08, alignSelf: 'center', marginTop: 20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width: width / 1.8}}>
              <Image
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <Text
                style={{
                  width: '90%',
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingTop: 15,
                }}
                numberOfLines={2}>
                Adding Salt to Your Food May Increase Risk of Blood Pressure
              </Text>
            </View>

            <View style={{width: width / 1.7, marginLeft: 15}}>
              <Image
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <Text
                style={{
                  width: '90%',
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingTop: 15,
                }}
                numberOfLines={2}>
                Adding Salt to Your Food May Increase Risk of Blood Pressure
              </Text>
            </View>

            <View style={{width: width / 1.7, marginLeft: 15}}>
              <Image
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <Text
                style={{
                  width: '90%',
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingTop: 10,
                }}
                numberOfLines={2}>
                Adding Salt to Your Food May Increase Risk of Blood Pressure
              </Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width / 1.08,
            alignSelf: 'center',
            alignItems: 'center',
            paddingTop: 15,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Articles
          </Text>
          <Text style={{color: '#8F49DE', fontSize: 15, fontWeight: 'bold'}}>
            See All
          </Text>
        </View>

        <View
          style={{
            width: width / 1.08,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: '#8F49DE',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', fontSize: 16,}}>
                Newest
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#8F49DE',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 9,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,}}>
                Health
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#8F49DE',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 9,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,}}>
                Covid-19
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#8F49DE',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 9,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,}}>
                Lifestyle
              </Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            width: width / 1.08,
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
            }}>
            <Image
              style={{width: '32%', height: 110, borderRadius: 20,}}
              source={require('../assets/BBQ.jpg')}
            />

            <View style={{width: '63%', paddingLeft: 15}}>
              <Text style={{color: 'gray'}}>Dec 22, 2022</Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: 'bold',
                  paddingTop:5,
                }}>
                Covid-19 Was a Top Cause of Death in 2020 and 2021, Even for
                Younger People
              </Text>

              <View
                style={{
                  width: '33%',
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:5,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  backgroundColor: '#fbf4fc',
                  borderRadius:8,
                }}>
                <Text
                  style={{color: '#8F49DE', fontSize: 10, fontWeight: 'bold'}}>
                  Covid-19
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
              marginTop:10,
            }}>
            <Image
              style={{width: '32%', height: 110, borderRadius: 20,}}
              source={require('../assets/BBQ.jpg')}
            />

            <View style={{width: '63%', paddingLeft: 15}}>
              <Text style={{color: 'gray'}}>Dec 22, 2022</Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: 'bold',
                  paddingTop:5,
                }}>
                Study Finds Being 'Hangry' is a Real Thing
              </Text>

              <View
                style={{
                  width: '26%',
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:5,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  backgroundColor:'#fbf4fc',
                  borderRadius:8,
                }}>
                <Text
                  style={{color: '#8F49DE', fontSize: 10, fontWeight: 'bold'}}>
                  Health
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
              marginTop:15,
            }}>
            <Image
              style={{width: '32%', height: 110, borderRadius: 20,}}
              source={require('../assets/BBQ.jpg')}
            />

            <View style={{width: '63%', paddingLeft: 15}}>
              <Text style={{color: 'gray'}}>Dec 21, 2022</Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: 'bold',
                  paddingTop:5,
                }}>
                Why Childhood Obesity Rates Are Rising And What We Can Do 
              </Text>

              <View
                style={{
                  width: '33%',
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:5,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  backgroundColor: '#fbf4fc',
                  borderRadius:8,
                }}>
                <Text
                  style={{color: '#8F49DE', fontSize: 10, fontWeight: 'bold'}}>
                  Lifestyle
                </Text>
              </View>
            </View>
          </View>


        </View>
      </View>
    );
  }
}

export default articles;
