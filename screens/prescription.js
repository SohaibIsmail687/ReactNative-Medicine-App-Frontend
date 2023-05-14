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
import {Icon, Left} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class prescription extends React.Component {
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

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: 25,
            paddingLeft: 30,
            fontSize: 17,
          }}>
          Medicine
        </Text>

        <View
          style={{
            backgroundColor: '#f9eaea',
            marginHorizontal: 20,
            paddingVertical: 20,
            marginTop: 10,
            borderRadius: 15,
            borderStyle: 'dashed',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              paddingLeft: 20,
            }}>
            Paracetamol 250 mg
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomWidth: 1,
              paddingBottom: 5,
            }}>
            <Icon
              name="delete-outline"
              type="MaterialCommunityIcons"
              style={{fontSize: 18, color: 'red', paddingLeft: 140}}
            />
            <Text
              style={{
                paddingLeft: 2,
                fontSize: 15,
                color: 'red',
                width: '31%',
              }}>
              Delete
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              paddingLeft: 20,
            }}>
            Start on: February 11 2022
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              paddingLeft: 20,
              paddingTop: 20,
            }}>
            When to tale: After food
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              paddingLeft: 20,
              paddingTop: 20,
            }}>
            Duration: 2 days
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              paddingLeft: 20,
              paddingTop: 20,
            }}>
            Document Joint:
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#8F49DE',
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 7,
              paddingHorizontal: 25,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              Add medicine
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default prescription;
