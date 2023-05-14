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

class Pills extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: width / 1,
            justifyContent: 'center',
          }}>
          <View style={{width: '26%', paddingTop: 15, marginRight: 10}}>
            <Image
              style={{
                width: '95%',
                height: 85,
                resizeMode: 'stretch',
                borderRadius: 50,
              }}
              source={require('../assets/Sonam.jpg')}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 5,
              }}>
              Pills
            </Text>
            <Text
              style={{
                color: 'dodgerblue',
                paddingLeft: 5,
              }}>
              1500000 GNF
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  marginLeft: 5,
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="minus" type="Entypo" style={{fontSize: 15}} />
              </View>
              <Text style={{color: 'black', paddingHorizontal: 10}}>1</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
              </View>
            </View>
          </View>

          <View style={{width: '26%', paddingTop: 15, marginRight: 10}}>
            <Image
              style={{
                width: '95%',
                height: 85,
                resizeMode: 'stretch',
                borderRadius: 50,
              }}
              source={require('../assets/BBQ.jpg')}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 5,
              }}>
              Pills
            </Text>
            <Text
              style={{
                color: 'dodgerblue',
                paddingLeft: 5,
              }}>
              1500000 GNF
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  marginLeft: 5,
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="minus" type="Entypo" style={{fontSize: 15}} />
              </View>
              <Text style={{color: 'black', paddingHorizontal: 10}}>1</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
              </View>
            </View>
          </View>

          <View style={{width: '26%', paddingTop: 15}}>
            <Image
              style={{
                width: '95%',
                height: 85,
                resizeMode: 'stretch',
                borderRadius: 50,
              }}
              source={require('../assets/chocoCold.jpg')}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 5,
              }}>
              Pills
            </Text>
            <Text
              style={{
                color: 'dodgerblue',
                paddingLeft: 5,
              }}>
              1500000 GNF
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  marginLeft: 5,
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="minus" type="Entypo" style={{fontSize: 15}} />
              </View>
              <Text style={{color: 'black', paddingHorizontal: 10}}>1</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', width: width / 1, marginTop: 15}}>
          <View style={{width: '26%', paddingTop: 15}}>
            <Image
              style={{
                width: '95%',
                height: 85,
                resizeMode: 'stretch',
                borderRadius: 50,
              }}
              source={require('../assets/loginHeader.jpg')}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 5,
              }}>
              Pills
            </Text>
            <Text
              style={{
                color: 'dodgerblue',
                paddingLeft: 5,
              }}>
              1500000 GNF
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  marginLeft: 5,
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="minus" type="Entypo" style={{fontSize: 15}} />
              </View>
              <Text style={{color: 'black', paddingHorizontal: 10}}>1</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 50,
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              marginTop: 30,
              paddingVertical: 7,
              width: width / 2.6,
              alignItems: 'center',
              borderRadius:10
            }}>
            <Text style={{color: 'white'}}>View Cart</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Pills;
