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

class articles2 extends React.Component {
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
              width: width / 1.04,
              alignSelf: 'center',
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#8F49DE',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 9,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Newest</Text>
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
                <Text style={{color: 'white', fontSize: 16}}>Health</Text>
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
                <Text style={{color: 'white', fontSize: 16}}>Covid-19</Text>
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
                <Text style={{color: 'white', fontSize: 16}}>Lifestyle</Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              width: width / 1.02,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray'}}>Dec 22, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Covid-19 Was a Top Cause of Death in 2020 and 2021, Even for
                  Younger People
                </Text>

                <View
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#fbf4fc',
                    borderRadius: 8,
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

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray'}}>Dec 22, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Study Finds Being 'Hangry' is a Real Thing
                </Text>

                <View
                  style={{
                    width: '26%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#f2f7fc',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'dodgerblue',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    Health
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray'}}>Dec 21, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Why Childhood Obesity Rates Are Rising And What We Can Do
                </Text>

                <View
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#f2f7fc',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'dodgerblue',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    Lifestyle
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray', fontSize: 12}}>Dec 20, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Depression Treatment: How Genetic Testing Can Help Find The
                  Right Medication
                </Text>

                <View
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#f2f7fc',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'dodgerblue',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    Medical
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray', fontSize: 12}}>Dec 20, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Drinking Alone as a Teen May Foreshadow Future Alcohol
                  Problems
                </Text>

                <View
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#f2f7fc',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'dodgerblue',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    Medical
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Image
                style={{
                  width: '32%',
                  height: 110,
                  borderRadius: 20,
                  resizeMode: 'stretch',
                }}
                source={require('../assets/BBQ.jpg')}
              />

              <View style={{width: '65%', paddingLeft: 15}}>
                <Text style={{color: 'gray', fontSize: 12}}>Dec 20, 2022</Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Colorectal Cancer: Why Adults in Their 40s and 50s Need to Get
                  Screended
                </Text>

                <View
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    backgroundColor: '#f2f7fc',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'dodgerblue',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    Health
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default articles2;
