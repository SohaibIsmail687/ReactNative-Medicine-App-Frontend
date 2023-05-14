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

class myblog extends React.Component {
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
            marginTop: 20,
            justifyContent: 'space-between',
            width: width / 1.05,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              paddingLeft: 10,
            }}>
            Blog Title 2
          </Text>

          <View
            style={{
              backgroundColor: '#8F49DE',
              paddingHorizontal: 30,
              paddingVertical: 1,
              borderRadius: 8,
            }}>
            <Text style={{color: 'white'}}>Edit</Text>
          </View>
        </View>

        <View
          style={{
            width: width / 1.02,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 160,
            marginTop: 2,
            borderWidth: 2,
            borderColor: 'lightgray',
            borderStyle: 'dashed',
            borderRadius: 5,
          }}>
          <Icon
            name="note-add"
            type="MaterialIcons"
            style={{fontSize: 20, color: 'gray'}}
          />
          <Text style={{color: 'gray', fontSize: 15, paddingLeft: 10}}>
            Image (PDF, JPG, PNG)
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            justifyContent: 'space-between',
            width: width / 1.05,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              paddingLeft: 10,
            }}>
            Blog title
          </Text>

          <View
            style={{
              backgroundColor: '#8F49DE',
              paddingHorizontal: 30,
              paddingVertical: 1,
              borderRadius: 8,
            }}>
            <Text style={{color: 'white'}}>Edit</Text>
          </View>
        </View>

        <View
          style={{
            width: width / 1.02,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // paddingVertical:70,
            marginTop: 10,
            height: 160,
            borderWidth: 2,
            borderColor: 'lightgray',
            borderStyle: 'dashed',
            borderRadius: 5,
          }}>
          <Icon
            name="note-add"
            type="MaterialIcons"
            style={{fontSize: 20, color: 'gray'}}
          />
          <Text style={{color: 'gray', fontSize: 15, paddingLeft: 10}}>
            Image (PDF, JPG, PNG)
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#8F49DE',
            width: width / 2.4,
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 9,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 100,
          }}>
          <Text style={{color: 'white', fontSize: 17}}>+ Add Blog</Text>
        </View>
      </View>
    );
  }
}

export default myblog;
