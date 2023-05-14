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

class history extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
          style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
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
              width: '68%',
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

        <View
          style={{
            backgroundColor: '#f9eaea',
            width: width / 1.1,
            marginHorizontal: 15,
            paddingVertical: 20,
            marginTop: 15,
            paddingLeft: 30,
            borderWidth: 2,
            // borderColor: '#f7d2d2',
            borderColor: '#e0e0e0',
            borderRadius: 10,
            borderStyle: 'dashed',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Symptoms:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Normal Headache</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Diagnosis:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              Given tablet to cure
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Prescription:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              Paracetamol 250 mg-tablet
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 20,
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
              width: '68%',
            }}>
            Online Consultation:
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              paddingLeft: 12,
              fontSize: 15,
            }}>
            05-01-2023
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#f9eaea',
            width: width / 1.1,
            marginHorizontal: 15,
            paddingVertical: 10,
            paddingLeft: 30,
            borderWidth: 2,
            // borderColor: '#f7d2d2',
            borderColor: '#e0e0e0',
            borderRadius: 10,
            borderStyle: 'dashed',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Symptoms:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Normal Headache</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Diagnosis:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              Given tablet to cure
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '31%',
              }}>
              Prescription:
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              Paracetamol 250 mg-tablet
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                width: '64%',
              }}>
              Video Consultation History:
            </Text>
            <View
              style={{
                backgroundColor: 'teal',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 22,
                borderRadius: 10,
                height: 18,
              }}>
              <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                See Video
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 20,
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
              paddingLeft: 12,
              fontSize: 15,
              width: '68%',
            }}>
            Online Consultation:
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              paddingLeft: 12,
              fontSize: 15,
            }}>
            05-01-2023
          </Text>
        </View>
      </View>
    );
  }
}

export default history;
