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

class information extends React.Component {
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
              marginTop: 20,
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
                paddingLeft: 10,
                fontSize: 17,
                width: '68%',
              }}>
              Patient details
            </Text>
          </View>

          <View
            style={{flexDirection: 'row', marginHorizontal: 17, paddingTop: 7}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Gender</Text>
              <Text style={{color: 'gray', paddingTop: 3}}>Male</Text>
            </View>

            <View style={{alignItems: 'center', paddingLeft: 30}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Age</Text>
              <Text style={{color: 'gray', paddingTop: 3}}>28</Text>
            </View>

            <View style={{alignItems: 'center', paddingLeft: 30}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Marital Status
              </Text>
              <Text style={{color: 'gray', paddingTop: 3}}>Single</Text>
            </View>

            <View style={{alignItems: 'center', paddingLeft: 30}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Blood group
              </Text>
              <Text style={{color: 'gray', paddingTop: 3}}>A+</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
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
                paddingLeft: 10,
                fontSize: 17,
                width: '68%',
              }}>
              More Details
            </Text>
          </View>

          <View style={{marginHorizontal: 15}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  width: '50%',
                }}>
                Medical Conditions
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>
                Migrane, Blood Pressure
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  width: '50%',
                }}>
                Allergies
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>Soy, Tomato</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  width: '50%',
                }}>
                Current Medications
              </Text>
              <Text style={{color: 'black', fontSize: 15, width: '50%'}}>
                Antihistamics 220, Cartienain Hipnic Forte
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  width: '50%',
                }}>
                Past Medications
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>N/A</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  width: '50%',
                }}>
                Surgeries
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>N/A</Text>
            </View>
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
                paddingLeft: 10,
                fontSize: 17,
                width: '68%',
              }}>
              Documents
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 33,
              paddingBottom: 20,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 17,
                width: '40%',
              }}>
              By Doctor
            </Text>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 17,
                width: '40%',
              }}>
              By Patient
            </Text>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: 17,
                width: '40%',
              }}>
              By Labo
            </Text>
          </View>

          <View style={{paddingHorizontal: 20, paddingTop: 5}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="file-document"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 50}}
              />
              <View style={{paddingLeft: 10, width: '43%'}}>
                <Text
                  style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                  CT Scan
                </Text>
                <Text style={{color: 'gray', paddingTop: 7}}>Report.pdf</Text>
              </View>

              <Icon
                name="md-eye-outline"
                type="Ionicons"
                style={{color: 'gray', fontSize: 27, width: '15%'}}
              />

              <Icon
                name="download"
                type="Feather"
                style={{color: 'gray', fontSize: 23, width: '15%'}}
              />

              <Icon
                name="dots-vertical"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 27}}
              />
            </View>
            <Text
              style={{
                color: 'black',
                paddingLeft: 7,
                paddingTop: 5,
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              Uploaded by Patient on 12-02-22
            </Text>
          </View>

          <View style={{paddingHorizontal: 20, paddingTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="file-document"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 50}}
              />
              <View style={{paddingLeft: 10, width: '43%'}}>
                <Text
                  style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                  S. Creatinine test
                </Text>
                <Text style={{color: 'gray', paddingTop: 7}}>Report.pdf</Text>
              </View>

              <Icon
                name="md-eye-outline"
                type="Ionicons"
                style={{color: 'gray', fontSize: 27, width: '15%'}}
              />

              <Icon
                name="download"
                type="Feather"
                style={{color: 'gray', fontSize: 23, width: '15%'}}
              />

              <Icon
                name="dots-vertical"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 27}}
              />
            </View>
            <Text
              style={{
                color: 'black',
                paddingLeft: 7,
                paddingTop: 5,
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              Uploaded by Patient on 12-02-22
            </Text>
          </View>

          <View style={{paddingHorizontal: 20, paddingVertical: 10,}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="file-document"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 50}}
              />
              <View style={{paddingLeft: 10, width: '43%'}}>
                <Text
                  style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                  Hb Blood test
                </Text>
                <Text style={{color: 'gray', paddingTop: 7}}>Report.pdf</Text>
              </View>

              <Icon
                name="md-eye-outline"
                type="Ionicons"
                style={{color: 'gray', fontSize: 27, width: '15%'}}
              />

              <Icon
                name="download"
                type="Feather"
                style={{color: 'gray', fontSize: 23, width: '15%'}}
              />

              <Icon
                name="dots-vertical"
                type="MaterialCommunityIcons"
                style={{color: 'gray', fontSize: 27}}
              />
            </View>
            <Text
              style={{
                color: 'black',
                paddingLeft: 7,
                paddingTop: 5,
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              Uploaded by Patient on 12-02-22
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default information;
