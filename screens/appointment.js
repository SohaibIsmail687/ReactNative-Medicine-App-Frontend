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

class appointment extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              width: width / 1,
              borderWidth: 0.5,
              borderColor: 'lightgray',
              backgroundColor: 'white',
              paddingLeft: 20,
              paddingVertical: 25,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Image
              style={{
                width: '30%',
                height: 100,
                resizeMode: 'stretch',
                borderRadius: 50,
              }}
              source={require('../assets/loginHeader.jpg')}
            />
            <View
              style={{
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 5,
                  fontSize: 17,
                }}>
                Pharmacy Hamdallaye
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 15,
                  paddingTop: 5,
                }}>
                2020, Nongo, Conakry, Guinea
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 5,
                }}>
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={{fontSize: 15, color: 'green'}}
                />
                <Text
                  style={{color: 'green', paddingLeft: 4, fontWeight: 'bold'}}>
                  4.5/5 ratings
                </Text>
              </View>
            </View>
          </View>

          <View style={{width: width / 1.03, paddingLeft: 20}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 17,
                paddingTop: 15,
              }}>
              Location
            </Text>
            <Text
              style={{
                color: 'gray',
                paddingVertical: 5,
              }}>
              Cliinic Medcare Washington Ave. Manchester, Kentucky 39450
            </Text>

            <Image
              style={{
                width: '100%',
                height: 120,
                borderRadius: 5,
                resizeMode: 'stretch',
              }}
              source={require('../assets/map.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: width / 1.12,
              marginHorizontal: 20,
              paddingLeft: 10,
              paddingVertical: 10,
              marginTop: 20,
              alignItems: 'center',
              borderWidth: 1.5,
              borderColor: 'lightgray',
              borderRadius: 10,
              borderStyle: 'dashed',
            }}>
            <Icon
              name="brightness-percent"
              type="MaterialCommunityIcons"
              style={{fontSize: 35, color: 'dodgerblue'}}
            />
            <View style={{paddingLeft: 10, width: '70%'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Apply Coupon Code
              </Text>
              <Text style={{color: 'gray', fontSize: 12.5}}>
                Unlock offers with coupon code
              </Text>
            </View>
            <Text
              style={{color: 'dodgerblue', fontSize: 15, fontWeight: 'bold'}}>
              APPLY
            </Text>
          </View>

          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Billing Details
          </Text>

          <View
            style={{marginTop: 10, width: width / 1, paddingHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>Order:</Text>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                5000000 GNF
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>Discount:</Text>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>0 GNF</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                Delievery Fee:
              </Text>
              <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>
                FREE
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingVertical: 10,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: 'lightgray',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                Total Payable:
              </Text>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                5000000GNF
              </Text>
            </View>
          </View>

          {/* Calcium Magnesium Views */}
          <View
            style={{
              borderBottomWidth: 1,
              marginBottom: 10,
              paddingBottom: 8,
              borderBottomColor: 'lightgray',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                width: width / 1.09,
                backgroundColor: 'white',
                marginLeft: 20,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{width: '33%', height: 100, borderRadius: 10}}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '61%', paddingTop: 10, paddingLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Calcium Magnesium
                </Text>
                <Text style={{color: 'gray'}}>50 tablets</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 7,
                      paddingVertical: 7,
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
                      paddingHorizontal: 7,
                      paddingVertical: 7,
                      borderRadius: 50,
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
                  </View>

                  <Text style={{color: 'dodgerblue', paddingLeft: 5}}>
                    1.500 000 GNF
                  </Text>
                </View>
              </View>

              <Icon
                name="options-vertical"
                type="SimpleLineIcons"
                style={{fontSize: 14, color: 'gray', paddingTop: 13}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                width: width / 1.09,
                backgroundColor: 'white',
                marginLeft: 20,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{width: '33%', height: 100, borderRadius: 10}}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '61%', paddingTop: 10, paddingLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Calcium Magnesium
                </Text>
                <Text style={{color: 'gray'}}>50 tablets</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 7,
                      paddingVertical: 7,
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
                      paddingHorizontal: 7,
                      paddingVertical: 7,
                      borderRadius: 50,
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
                  </View>

                  <Text style={{color: 'dodgerblue', paddingLeft: 5}}>
                    1.500 000 GNF
                  </Text>
                </View>
              </View>

              <Icon
                name="options-vertical"
                type="SimpleLineIcons"
                style={{fontSize: 14, color: 'gray', paddingTop: 13}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                width: width / 1.09,
                backgroundColor: 'white',
                marginLeft: 20,
                borderRadius: 10,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{width: '33%', height: 100, borderRadius: 10}}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '61%', paddingTop: 10, paddingLeft: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Calcium Magnesium
                </Text>
                <Text style={{color: 'gray'}}>50 tablets</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 7,
                      paddingVertical: 7,
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
                      paddingHorizontal: 7,
                      paddingVertical: 7,
                      borderRadius: 50,
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <Icon name="plus" type="Entypo" style={{fontSize: 15}} />
                  </View>

                  <Text style={{color: 'dodgerblue', paddingLeft: 5}}>
                    1.500 000 GNF
                  </Text>
                </View>
              </View>

              <Icon
                name="options-vertical"
                type="SimpleLineIcons"
                style={{fontSize: 14, color: 'gray', paddingTop: 13}}
              />
            </View>
          </View>

          {/* Calcium Magnesium View over */}

          <View
            style={{
              backgroundColor: '#bf09f2',
              width: width / 1.1,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              borderRadius: 7,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Upload Prescription
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'lightyellow',
              width: width / 1.1,
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 7,
            }}>
            <View
              style={{
                backgroundColor: 'gold',
                width: '16%',
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 13,
                borderRadius: 50,
              }}>
              <Icon
                name="coins"
                type="FontAwesome5"
                style={{fontSize: 25, color: 'white'}}
              />
            </View>
            <Text
              style={{
                color: 'gold',
                width: '80%',
                paddingLeft: 10,
              }}>
              You will get 0.3 rewards points after successfull orders. Learn
              more
            </Text>
          </View>

          <Text
            style={{
              paddingLeft: 30,
              paddingTop: 20,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Delievery Method
          </Text>

          <View
            style={{
              paddingLeft: 30,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              marginBottom: 10,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="circle"
                type="Entypo"
                style={{fontSize: 20, color: 'gray'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Delievery at home
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 5,
                paddingTop: 15,
              }}>
              <Icon
                name="circle"
                type="Entypo"
                style={{fontSize: 20, color: 'gray'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Pick up at the Pharmacy
              </Text>
            </View>
          </View>

          <Text
            style={{
              paddingLeft: 30,
              paddingTop: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Delievery Address
          </Text>

          <View
            style={{
              paddingLeft: 30,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              marginBottom: 10,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="circle"
                type="Entypo"
                style={{fontSize: 20, color: 'gray'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                3 Newbridge Court {'\n'}Chino Hills, CA 91709, United States
              </Text>
            </View>
          </View>

          <Text
            style={{
              paddingLeft: 30,
              paddingTop: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Payment Method
          </Text>

          <View
            style={{
              paddingLeft: 30,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="circle"
                type="Entypo"
                style={{fontSize: 20, color: 'gray'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Pay Online
              </Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#e5e3e3',
            flexDirection: 'row',
            width: width / 1.03,
            marginLeft: 10,
            paddingLeft: 20,
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Icon name="user-circle" type="FontAwesome" style={{fontSize: 40}} />
          <View style={{paddingLeft: 10, width: '68%'}}>
            <Text style={{color: '#707070'}}>Appointment for</Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              John Doe
            </Text>
          </View>
          <Text style={{color: 'dodgerblue'}}>CHANGE</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: width / 1.03,
            marginLeft: 10,
            paddingLeft: 10,
            alignItems: 'center',
            paddingVertical: 12,
          }}>
          <View style={{paddingLeft: 10, width: '53%'}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              GNF 50000
            </Text>
            <Text style={{color: 'purple', fontSize: 11, paddingTop: 2}}>
              SEE DETAILS
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              width: '45%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Confirm and pay
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default appointment;
