import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import profile from './assets/profile.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  //  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="keyboard-backspace" size={20} />
        <Text style={{ fontSize: 20 }}>Profile</Text>
        <Icon name="menu" size={20} />
      </View>
      <View style={styles.imagecontainer}>
        <Image source={profile} style={styles.image} />
        <View
          style={{
            backgroundColor: '#276fe3',
            color: 'white',
            padding: 7,
            borderRadius: 50,
            position: 'absolute',
            bottom: 3,
            right: 140,
          }}
        >
          <Icon name="photo-camera" style={{ color: 'white' }} size={15} />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Blue Holman</Text>
        <Text>@just_blue</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Blue Holman" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="blue@gmail.com" />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="@just_blue" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="***********" />
        <Text style={styles.label}>Birth Date</Text>
        <TextInput style={styles.input} placeholder="24-07-2000" />
        
          <TouchableOpacity
            
            style={styles.button}
          >
            <Text style={styles.buttonText}>Update Changes</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    paddingTop: 70,
    paddingHorizontal: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagecontainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    marginVertical: 10,
    backgroundColor: '#F2F5FB',
    borderRadius: 25,
    padding: 10,
    color: '#8d8d8f',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#276fe3',
    padding: 10,
    borderRadius: 20,
    width: 150, 
    alignSelf: 'center',
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  }
});
