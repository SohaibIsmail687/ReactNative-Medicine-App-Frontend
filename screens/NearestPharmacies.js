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

class NearestPharmacies extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width / 1.1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 15,
            }}>
            <TextInput
              style={{
                width: '100%',
                alignSelf: 'center',
                height: 40,
                borderRadius: 6,
                paddingLeft: 40,
                color: 'darkgrey',
                backgroundColor: 'lightgray',
                fontSize: 16,
              }}
              placeholder="Search Pharmacies..."
              placeholderTextColor="gray"
            />
            <Icon
              name="search"
              type="Ionicons"
              style={{
                color: 'gray',
                fontSize: 18,
                position: 'absolute',
                left: 10,
              }}
            />
          </View>
          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 20,
              paddingBottom: 7,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Recommended for you
          </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: 5}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: width / 1.25,
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: 'lightgray',
                paddingTop: 15,
                paddingBottom: 35,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{
                  width: '30%',
                  height: 80,
                  resizeMode: 'stretch',
                  borderRadius: 50,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pharmacies Hamdallaye
                </Text>
                <Text style={{color: 'black', paddingTop: 5}}>
                  2022, Nongo, Conarky,
                </Text>
                <Text style={{color: 'black'}}>Guinea</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'purple',
                    marginTop: 10,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'purple'}}>Order medicine</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: width / 1.25,
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: 'lightgray',
                paddingTop: 15,
                paddingBottom: 35,
                marginLeft: 10,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{
                  width: '30%',
                  height: 80,
                  resizeMode: 'stretch',
                  borderRadius: 50,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pharmacies Hamdallaye
                </Text>
                <Text style={{color: 'black', paddingTop: 5}}>
                  2022, Nongo, Conarky,
                </Text>
                <Text style={{color: 'black'}}>Guinea</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'purple',
                    marginTop: 10,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'purple'}}>Order medicine</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: width / 1.25,
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: 'lightgray',
                paddingTop: 15,
                paddingBottom: 35,
                marginLeft: 10,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{
                  width: '30%',
                  height: 80,
                  resizeMode: 'stretch',
                  borderRadius: 50,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pharmacies Hamdallaye
                </Text>
                <Text style={{color: 'black', paddingTop: 5}}>
                  2022, Nongo, Conarky,
                </Text>
                <Text style={{color: 'black'}}>Guinea</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'purple',
                    marginTop: 10,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'purple'}}>Order medicine</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 5,
              paddingBottom: 7,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Nearest Pharmacies
          </Text>

          <View
            style={{
              width: width / 1.03,
              marginHorizontal: 5,
              borderWidth: 1,
              borderColor: 'lightgray',
              backgroundColor: 'white',
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingBottom: 10,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'stretch'}}
              source={require('../assets/loginHeader.jpg')}
            />
            <Text
              style={{
                color: 'black',
                paddingTop: 5,
                paddingBottom: 4,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Pharmacie Hamdallaye
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', width: '70%'}}>
                2020, Nongo, Conakry, Guinea
              </Text>
              <Icon
                name="star"
                type="FontAwesome"
                style={{fontSize: 15, color: 'green'}}
              />
              <Text style={{color: 'green', paddingLeft: 4}}>
                4.5/5 ratings
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width / 1.03,
              marginHorizontal: 5,
              marginTop: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              backgroundColor: 'white',
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingBottom: 10,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'stretch'}}
              source={require('../assets/loginHeader.jpg')}
            />
            <Text
              style={{
                color: 'black',
                paddingTop: 5,
                paddingBottom: 4,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Pharmacie Hamdallaye
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', width: '70%'}}>
                2020, Nongo, Conakry, Guinea
              </Text>
              <Icon
                name="star"
                type="FontAwesome"
                style={{fontSize: 15, color: 'green'}}
              />
              <Text style={{color: 'green', paddingLeft: 4}}>
                4.5/5 ratings
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width / 1.03,
              marginHorizontal: 5,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              backgroundColor: 'white',
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingBottom: 10,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Image
              style={{width: '100%', height: 150, resizeMode: 'stretch'}}
              source={require('../assets/loginHeader.jpg')}
            />
            <Text
              style={{
                color: 'black',
                paddingTop: 5,
                paddingBottom: 4,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Pharmacie Hamdallaye
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', width: '70%'}}>
                2020, Nongo, Conakry, Guinea
              </Text>
              <Icon
                name="star"
                type="FontAwesome"
                style={{fontSize: 15, color: 'green'}}
              />
              <Text style={{color: 'green', paddingLeft: 4}}>
                4.5/5 ratings
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NearestPharmacies;
