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
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class diagnosis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked1: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width,
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: '27%',
                  height: 90,
                  resizeMode: 'stretch',
                  borderRadius: 50,
                }}
                source={require('../assets/Sonam.jpg')}
              />
              <Icon
                name="chatbubble-ellipses"
                type="Ionicons"
                style={{color: 'gray', fontSize: 18, paddingTop: 70}}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 5,
                fontSize: 23,
              }}>
              Jane Doe
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,
                paddingTop: 7,
              }}>
              Last appointment 11-02-2022
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              paddingBottom: 15,
              marginTop: 10,
            }}>
            <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>
              History
            </Text>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 15,
                paddingLeft: 15,
              }}>
              Diagnosis
            </Text>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 15,
                paddingLeft: 15,
              }}>
              Information
            </Text>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 15,
                paddingLeft: 15,
              }}>
              Prescription
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginHorizontal: 15,
              alignItems: 'center',
            }}>
            <Icon
              name="caret-down"
              type="FontAwesome"
              style={{fontSize: 20, color: '#8F49DE'}}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 12,
                fontSize: 15,
                width: '52%',
              }}>
              In Clinic Consultation:
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 12,
                fontSize: 15,
              }}>
              05-12-2022
            </Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{fontSize: 20, color: '#8F49DE', paddingLeft: 18}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                Symptoms
              </Text>
            </View>
            <TextInput
              style={{
                width: '94%',
                height: 70,
                borderRadius: 15,
                paddingLeft: 20,
                paddingTop: 15,
                marginTop: 10,
                marginHorizontal: 10,
                color: 'gray',
                backgroundColor: '#f9eaea',
                fontSize: 13,
                textAlignVertical: 'top',
              }}
              placeholder="Type Here"
              placeholderTextColor="gray"
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{fontSize: 20, color: '#8F49DE', paddingLeft: 18}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                Diagnosis
              </Text>
            </View>
            <TextInput
              style={{
                width: '94%',
                height: 70,
                borderRadius: 15,
                paddingLeft: 20,
                paddingTop: 15,
                marginTop: 15,
                marginHorizontal: 10,
                color: 'gray',
                backgroundColor: '#f9eaea',
                fontSize: 13,
                textAlignVertical: 'top',
              }}
              placeholder="Type Here"
              placeholderTextColor="gray"
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{fontSize: 20, color: '#8F49DE', paddingLeft: 18}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                Prescription
              </Text>
            </View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 18,
              }}>
              Medication
            </Text>
            <TextInput
              style={{
                width: '93%',
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                paddingTop: 15,
                marginTop: 5,
                marginHorizontal: 15,
                color: 'gray',
                backgroundColor: '#e0e0e0',
                fontSize: 14,
                textAlignVertical: 'top',
              }}
              placeholder="Enter Your medication"
              placeholderTextColor="gray"
            />

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 20,
                paddingLeft: 18,
              }}>
              Type of medication
            </Text>
            <View
              style={{
                justifyContent: 'center',
                width: '93%',
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                marginTop: 5,
                marginHorizontal: 15,
                backgroundColor: '#e0e0e0',
              }}>
              <Text style={{color: 'gray', fontSize: 14}}>Select</Text>
              <Icon
                name="down"
                type="AntDesign"
                style={{
                  fontSize: 19,
                  color: 'gray',
                  paddingLeft: 18,
                  position: 'absolute',
                  right: 20,
                }}
              />
            </View>

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 20,
                paddingLeft: 18,
              }}>
              Dosage
            </Text>
            <View
              style={{
                justifyContent: 'center',
                width: '93%',
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                marginTop: 5,
                marginHorizontal: 15,
                backgroundColor: '#e0e0e0',
              }}>
              <Text style={{color: 'gray', fontSize: 14}}>Select</Text>
              <Icon
                name="down"
                type="AntDesign"
                style={{
                  fontSize: 19,
                  color: 'gray',
                  paddingLeft: 18,
                  position: 'absolute',
                  right: 20,
                }}
              />
            </View>

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 20,
                paddingLeft: 22,
              }}>
              Days
            </Text>

            <View style={{flexDirection: 'row', paddingTop: 10, marginLeft: 7}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 7,
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                  tintColors={{true: '#8F49DE', false: 'gray'}}
                  onTintColor={'#8F49DE'}
                  onCheckColor={'#8F49DE'}
                  boxType={'square'}
                />
                <Text style={{color: 'black', fontSize: 15}}>Mon</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                  tintColors={{true: '#8F49DE', false: 'gray'}}
                  onTintColor={'#8F49DE'}
                  onCheckColor={'#8F49DE'}
                  boxType={'square'}
                />
                <Text style={{color: 'black', fontSize: 15}}>Tue</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                  tintColors={{true: '#8F49DE', false: 'gray'}}
                  onTintColor={'#8F49DE'}
                  onCheckColor={'#8F49DE'}
                  boxType={'square'}
                />
                <Text style={{color: 'black', fontSize: 15}}>Wed</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                  tintColors={{true: '#8F49DE', false: 'gray'}}
                  onTintColor={'#8F49DE'}
                  onCheckColor={'#8F49DE'}
                  boxType={'square'}
                />
                <Text style={{color: 'black', fontSize: 15}}>Thu</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked1}
                  onValueChange={() =>
                    this.setState({checked1: !this.state.checked1})
                  }
                  tintColors={{true: '#8F49DE', false: 'gray'}}
                  onTintColor={'#8F49DE'}
                  onCheckColor={'#8F49DE'}
                  boxType={'square'}
                />
                <Text style={{color: 'black', fontSize: 15}}>Fri</Text>
              </View>
            </View>

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 22,
              }}>
              Timing
            </Text>

            <TextInput
              style={{
                width: '91%',
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                paddingTop: 15,
                marginTop: 5,
                marginHorizontal: 22,
                color: 'gray',
                backgroundColor: '#e0e0e0',
                fontSize: 14,
              }}
              placeholder="Select time"
              placeholderTextColor="gray"
            />

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingTop: 20,
                paddingLeft: 22,
              }}>
              Duration
            </Text>
            <View
              style={{
                justifyContent: 'center',
                width: '91%',
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                marginTop: 5,
                marginHorizontal: 22,
                backgroundColor: '#e0e0e0',
              }}>
              <Text style={{color: 'gray', fontSize: 14}}>Select duration</Text>
              <Icon
                name="down"
                type="AntDesign"
                style={{
                  fontSize: 19,
                  color: 'gray',
                  paddingLeft: 18,
                  position: 'absolute',
                  right: 20,
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 35,
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="caret-right"
              type="FontAwesome"
              style={{fontSize: 20, color: '#8F49DE'}}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 7,
                fontSize: 15,
                width: '45%',
              }}>
              Video Consultation:
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingLeft: 12,
                fontSize: 15,
              }}>
              05-12-2022
            </Text>
          </View>

          <View style={{alignItems: 'center', marginBottom: 20}}>
            <View
              style={{
                backgroundColor: '#8F49DE',
                marginTop: 70,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 7,
                paddingHorizontal: 50,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                Save
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default diagnosis;
