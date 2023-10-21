import {Drawer} from 'expo-router/drawer'

export default function Layout() {

    return (
        <Drawer screenOptions = {{headerStyle : {backgroundColor : '#10101E'}, headerTintColor : '#fff', headerTitleStyle : {fontWeight : 'bold'}, drawerPosition : "right"}}>
            <Drawer.Screen name = 'home'  options={{drawerLabel: "생각하기" ,title: "생각하기"}}/>
            <Drawer.Screen name = 'gptbrain' options={{drawerLabel: "뇌 바꾸기" ,title: "뇌 바꾸기"}}/>
            <Drawer.Screen name = 'Guide' options = {{drawerLabel : "설명서", title : "설명서"}}/>
            <Drawer.Screen name = 'Brainlogout' options = {{drawerLabel : "로그아웃", title : "뇌 탈출"}}/>
        </Drawer>
    )
}