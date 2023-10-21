import { Stack, useRouter } from "expo-router"

const StackLayout = () => {
    const router = useRouter();

    return (
        <Stack screenOptions = {{headerStyle : {backgroundColor : '#10101E'}, headerTintColor : '#fff', headerTitleStyle : {fontWeight : 'bold'}}}>
            <Stack.Screen name = 'index' options = {{headerShown : false}}/>
            <Stack.Screen name = 'singup' options = {{headerTitle : 'Create account'}}/>
            <Stack.Screen name = "(drawer)" options = {{headerShown : false}}/>
            <Stack.Screen name = 'manipulationBrain' options = {{headerTitle : '뇌 조작하기'}}/>  
        </Stack>
    );
};

export default StackLayout;