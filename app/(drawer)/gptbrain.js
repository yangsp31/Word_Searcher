import { Text, View, Image, ScrollView } from "react-native"
import Container from "../component/container"
import Style from "../component/style"
import { getAllrole, getNowRole, setNowRole } from "../function/db"
import { useCallback, useState } from "react"
import { TouchableOpacity } from "react-native"
import { Link, useFocusEffect } from "expo-router"
import { auth } from "../../firebaseConfig"

const brain = () => {
    const [data, setdata] = useState([]);
    const [focuse, setfocuse] = useState(false);
    const [nowRole, setRole] = useState("");
    const user = auth.currentUser;

    useFocusEffect (
        useCallback(() => {
            if(!focuse && user != null) {
                getButtondata();
                setfocuse(true);
            }

            return () => {
                setfocuse(false);
            }
        }, [])
    );
    

    const getButtondata = async () => {
        const getdata = await getAllrole();
        const now = await getNowRole();
        setdata([...getdata]);
        setRole(now);
    }

    const renderButton = () => {
        return data.map((id, index) => (
                <TouchableOpacity key = {index} style = {Style.button} onPress = {() => handleButton(id)}>
                    <Text>{id}</Text>
                </TouchableOpacity>
            ))
    };

    const handleButton = (role) => {
        setNowRole(role);
        setRole(role);
    }

    if(user != null) {
        return (
            <View style = {Container.Homecontainer}>
                <Image source={require('../component/assets/changeBrain.png')}/>
                <Text style = {Style.BrainText}>현재 뇌 : {nowRole}</Text>
                <ScrollView  style = {Container. BrainScrollcontainer} contentContainerStyle = {{ justifyContent : 'center', alignItems : 'center'}}>
                    {renderButton()}
                </ScrollView>
                <Link href = '/manipulationBrain' asChild>
                <TouchableOpacity style = {Style.addbutton}>
                    <Text style = {Style.addText}>뇌 조작하기</Text>
                </TouchableOpacity>
                </Link>
            </View>
        );
    }
    else {
        return (
            <View style = {Container.Homecontainer}>
                <Image source={require('../component/assets/changeBrain.png')}/>
                <Image source = {require('../component/assets/guestText.png')} style = {{resizeMode : 'cover'}}/>
            </View>
        )
    }
    
}

export default brain