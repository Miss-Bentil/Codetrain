import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [callers, setCallers] = useState([
    { name: 'Esi', number: 2, mode: 'phone', day: '6:30AM', key: 1 },
    { name: 'Kwesi', number: 2, mode: 'WhatsApp Video', day: '9:00AM', key: 2 },
    {
      name: 'Adwoa',
      number: '',
      mode: 'Snapchat Video',
      day: '12:10PM',
      key: 3,
    },
    { name: 'Kwadwo', number: '', mode: 'phone', day: '1:00pm', key: 4 },
    {
      name: 'Abena',
      number: '',
      mode: 'Instagram Video',
      day: 'Yesterday',
      key: 5,
    },
    { name: 'Kwabena', number: 2, mode: 'mobile', day: 'Yesterday', key: 6 },
    { name: 'Ekua', number: '', mode: 'phone', day: 'Yesterday', key: 7 },
    {
      name: '0202333888',
      number: 3,
      mode: 'unknown',
      day: 'Yesterday',
      key: 8,
    },
    {
      name: 'Yaa',
      number: 7,
      mode: 'FaceTime video',
      day: 'Yesterday',
      key: 9,
    },
    { name: 'Yaw', number: '', mode: 'Snapchat Audio', day: 'Sunda', key: 10 },
    { name: 'Efua', number: 3, mode: 'phone', day: 'Saturday', key: 11 },
    {
      name: 'Fii',
      number: 3,
      mode: 'WhatsApp Audio',
      day: 'Saturday',
      key: 12,
    },
    { name: 'Ama', number: 4, mode: 'phone', day: 'Thursday', key: 13 },
    { name: 'Kwame', number: '', mode: 'mobile', day: 'Wednesday', key: 14 },
  ]);

  return (
    <View style={styles.container}>
     
      <ScrollView>
        <Text style={{color:"#fff",fontSize:"28",fontWeight:'bold'}} >Recents</Text>
         <View style={styles.horizontalLine} />
        {callers.map((caller) => {
          return (
            <View style={styles.subContainer}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: '#fff', fontSize: 18 }}>
                  {caller.name}
                 {caller.number ? ` (${caller.number})` : ''}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: '#fff' }}>{caller.day}</Text>
                  <Icon name="more-vert" size={25} color="#2a48ad" />
                </View>
              
              </View>
                <View>
                  <Text style={{color:'rgba(117, 117, 117, 0.8)'}} >{caller.mode}</Text>
                </View>

              <View style={styles.horizontalLine} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 90,
    paddingHorizontal: 20,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  subContainer: {
    marginTop: 10,
    // backgroundColor:'green'
  },
  horizontalLine: {
    borderBottomColor: 'rgba(117, 117, 117, 0.4)',
    // borderTopWidth:0.2,
    borderBottomWidth: 0.8,
    marginVertical: 10,
  },
});
