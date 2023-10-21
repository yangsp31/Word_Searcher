import {Link, router} from 'expo-router';
import { Text, View, Pressable, Button, TextInput, TouchableOpacity} from 'react-native';
import Style from './component/style';
import Container from './component/container';
import { useEffect, useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
  const [user, setuser] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    autoEnter();
  }, []);

  const autoEnter = async () => {
    try {
      const Info = await AsyncStorage.getItem('UserInfo');

      if(Info != null) {
        const User = JSON.parse(Info);
        await signInWithEmailAndPassword(auth, User.Useremail, User.Userpassword);
        setuser(true);
        router.replace('(drawer)/home');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoginButton = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      saveuserInfo();
      router.replace('/home');

    } catch (e) {
      console.log(e);
    }
  };

  const saveuserInfo = async () => {
    const userInfo = JSON.stringify(makeJsondata());

    await AsyncStorage.setItem('UserInfo', userInfo);
  };

  const makeJsondata = () => {
    return {
      Useremail : email,
      Userpassword : password
    }
  };

  if(!user) {
    return (
    <View style = {Container.Maincontainer}>
        <View style = {Container.Titlecontainer}>
          <Text style = {Style.title}>LogIn</Text>
        </View>

        <View style = {Container.Logincontainer}>
          <TextInput value = {email} onChangeText={setemail} keyboardType = 'email-address' placeholder = 'Enter email address' autoCapitalize = 'none' placeholderTextColor="#aaa" style = {Style.input}/>
          <TextInput value = {password} onChangeText={setpassword} secureTextEntry placeholder = 'Enter password' autoCapitalize = 'none' placeholderTextColor="#aaa" style = {Style.input}/>

          <View style = {Container.Buttoncontainer}>
            <TouchableOpacity onPress = {handleLoginButton}>
              <Text style = {Style.SelectText}>LogIn</Text>
            </TouchableOpacity>

            <Text style = {Style.SelectText}>  |  </Text>

            <Link href = '/singup' asChild>
              <TouchableOpacity>
                <Text style = {Style.SelectText}>SignUp</Text>
              </TouchableOpacity>
            </Link>

            <Text style = {Style.SelectText}>  |  </Text>

            <Link href = '/home' asChild>
              <TouchableOpacity>
                <Text style = {Style.SelectText}>Guest LogIn</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
    </View>
  );
};
};

export default LoginPage;
