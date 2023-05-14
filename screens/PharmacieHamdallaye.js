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

class PharmacieHamdallaye extends React.Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width / 1.1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 15,
              borderColor: 'lightgray',
              borderWidth: 1,
              borderRadius: 5,
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
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              placeholder="Search Products"
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

          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
            }}>
            <View
              style={{
                width: width / 5.6,
                // borderWidth: 1,
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 20,
                backgroundColor: 'white',
                borderRadius: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{
                  width: '90%',
                  height: 55,
                  resizeMode: 'stretch',
                  borderRadius: 70,
                }}
                source={require('../assets/BBQ.jpg')}
              />
              <Text style={{color: 'black', paddingTop: 10}}>Tablets</Text>
            </View>

            <View
              style={{
                width: width / 5.6,
                // borderWidth: 1,
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 20,
                backgroundColor: 'white',
                borderRadius: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginLeft: 5,
              }}>
              <Image
                style={{
                  width: '90%',
                  height: 55,
                  resizeMode: 'stretch',
                  borderRadius: 70,
                }}
                source={require('../assets/chocoCold.jpg')}
              />
              <Text style={{color: 'black', paddingTop: 10}}>Capsules</Text>
            </View>

            <View
              style={{
                width: width / 5.6,
                // borderWidth: 1,
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 20,
                backgroundColor: 'white',
                borderRadius: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginLeft: 5,
              }}>
              <Image
                style={{
                  width: '90%',
                  height: 55,
                  resizeMode: 'stretch',
                  borderRadius: 70,
                }}
                source={require('../assets/eggs.jpg')}
              />
              <Text style={{color: 'black', paddingTop: 10}}>Shankar</Text>
            </View>

            <View
              style={{
                width: width / 5.6,
                // borderWidth: 1,
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 20,
                backgroundColor: 'white',
                borderRadius: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginLeft: 5,
              }}>
              <Image
                style={{
                  width: '90%',
                  height: 55,
                  resizeMode: 'stretch',
                  borderRadius: 70,
                }}
                source={require('../assets/Toyota.jpg')}
              />
              <Text style={{color: 'black', paddingTop: 10}}>Syrup</Text>
            </View>

            <View
              style={{
                width: width / 5.6,
                // borderWidth: 1,
                alignItems: 'center',
                paddingTop: 3,
                paddingBottom: 20,
                backgroundColor: 'white',
                borderRadius: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                marginLeft: 5,
              }}>
              <Image
                style={{
                  width: '90%',
                  height: 55,
                  resizeMode: 'stretch',
                  borderRadius: 70,
                }}
                source={require('../assets/Sonam.jpg')}
              />
              <Text style={{color: 'black', paddingTop: 10}}>Injections</Text>
            </View>
          </View>

          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              fontWeight: 'bold',
              fontSize: 17,
              paddingTop: 5,
            }}>
            Tablets
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width / 1.1,
              // borderWidth: 1,
            }}>
            <View style={{width: '60%'}}>
              <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>
                Pills
              </Text>
              <Text style={{color: 'black'}} numberOfLines={3}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 100,
                  paddingTop: 5,
                  borderBottomWidth: 1,
                }}>
                <Text style={{color: 'dodgerblue'}}>View Products</Text>
              </View>
            </View>
            <Image
              style={{
                width: '40%',
                height: 80,
                borderRadius: 40,
                resizeMode: 'stretch',
              }}
              source={require('../assets/loginHeader.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width / 1.1,
            }}>
            <View style={{width: '60%'}}>
              <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>
                Caplets
              </Text>
              <Text style={{color: 'black'}} numberOfLines={3}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 100,
                  paddingTop: 5,
                  borderBottomWidth: 1,
                }}>
                <Text style={{color: 'dodgerblue'}}>View Products</Text>
              </View>
            </View>
            <Image
              style={{
                width: '40%',
                height: 80,
                borderRadius: 40,
                resizeMode: 'stretch',
              }}
              source={require('../assets/eggs.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width / 1.1,
            }}>
            <View style={{width: '60%'}}>
              <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>
                Sugar-Coated tablets
              </Text>
              <Text style={{color: 'black'}} numberOfLines={3}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 100,
                  paddingTop: 5,
                  borderBottomWidth: 1,
                }}>
                <Text style={{color: 'dodgerblue'}}>View Products</Text>
              </View>
            </View>
            <Image
              style={{
                width: '40%',
                height: 80,
                borderRadius: 40,
                resizeMode: 'stretch',
              }}
              source={require('../assets/BBQ.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width / 1.1,
            }}>
            <View style={{width: '60%'}}>
              <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>
                Enteric-Coated Tablets
              </Text>
              <Text style={{color: 'black'}} numberOfLines={3}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 100,
                  paddingTop: 5,
                  borderBottomWidth: 1,
                }}>
                <Text style={{color: 'dodgerblue'}}>View Products</Text>
              </View>
            </View>
            <Image
              style={{
                width: '40%',
                height: 80,
                borderRadius: 40,
                resizeMode: 'stretch',
              }}
              source={require('../assets/Burger.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PharmacieHamdallaye;
