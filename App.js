
import * as React from 'react';
import { View, Text, Button, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

//tab Screen
import HomeScreen from './components/home';
import About from './components/about'
import Contact from './components/contact'
import Documents from './components/documents'

//drugs
import DrugsHome from './drugs/index_drugs';
import DrugWebView from './drugs/drug_web_view'

//import formulas
import ScreenNavigation from './routes/route'

import ASAPhysical from './formulas/asa_physical'
import DifficultAirway from './formulas/difficult_airway'
import PostoperativePneumona from './formulas/pneumonia_risk'
import PrespiratoryRisk from './formulas/respiratory_risk'
import ItraoperativeFluidAdults from './formulas/intraoperative_fluid_adults'
import NauseaVomiting from './formulas/nauseaAndVomiting'
import PulmonaryComplication from './formulas/pulmonary_complication'
import RespiratoryRisk from './formulas/respiratory_risk'
import TinhLuongMauMat from './formulas/luong_mau_mat'
import TinhLuongMeHoi from './formulas/luong_thuoc_me_hoi'

const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Trợ Lý Gây Mê',
        message:
          'TRỢ LÝ GÂY MÊ - công cụ hữu ích dành cho Gây mê hồi sức - Tải miễn phí trên CH Play',
        url: ''
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


function StackNavigation({navigation}){
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ScreenNavigation}
          options={{
          title: 'Trợ Lý Gây Mê',
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft:() => (
            <Ionicons name="ios-menu" size={28} color='white' style={{marginLeft: 15, marginTop: 5}} onPress={() => navigation.openDrawer()}/>
          ),
          headerRight:() => (
            <Ionicons name="md-share" size={28} color='white' style={{marginRight: 15, marginTop: 5}} onPress={onShare}/>
          )
        }}
        />
        <Stack.Screen name='Phân loại ASA' component={ASAPhysical}/>
        <Stack.Screen name='Chỉ số El-Ganzouri (EGRI)' component={DifficultAirway}/>
        <Stack.Screen name='Truyền dịch trong phẫu thuật' component={ItraoperativeFluidAdults}/>
        <Stack.Screen name='Nguy cơ buồn nôn và nôn' component={NauseaVomiting}/>
        <Stack.Screen name='Nguy cơ viêm phổi' component={PostoperativePneumona}/>
        <Stack.Screen name='Nguy cơ biến chứng phổi' component={PulmonaryComplication}/>
        <Stack.Screen name='Nguy cơ suy hô hấp' component={RespiratoryRisk}/>
        <Stack.Screen name='Tính lượng máu mất tối đa (ABL)' component={TinhLuongMauMat}/>
        <Stack.Screen name='Tính lượng thuốc mê hô hấp sử dụng' component={TinhLuongMeHoi}/>
      </Stack.Navigator>
    );
  }

  //tab
  function TabNavigation({navigation}){
    return(
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home': 'ios-home';
              } else if (route.name === 'Máy tính') {
                iconName = focused ? 'ios-calculator' : 'ios-calculator';
              } else if (route.name === 'Tài liệu') {
                iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks';
              } else if (route.name === 'Thuốc') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }//can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#00bfa5',
            inactiveTintColor: 'gray',
          }}
        >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Máy tính' component={StackNavigation}/>
        <Tab.Screen name='Thuốc' component={DrugsHome}/>
        <Tab.Screen name='Tài liệu' component={Documents}/>
      </Tab.Navigator>
    )
  }

  export default function App(){
    return(
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name='Trang chủ' component={TabNavigation}/>
            <Drawer.Screen name='Giới thiệu' component={About}/>
            <Drawer.Screen name='Liên hệ' component={Contact}/>
            <Drawer.Screen name='Thuốc gây mê' component={DrugWebView}/>
          </Drawer.Navigator>
        </NavigationContainer>
      )
  }
