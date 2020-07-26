
import * as React from 'react';
import { View, Text, Button, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons'

import {t} from './locales/index'
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

const onShare = async () => {
    try {
      const result = await Share.share({
        title: t('anes_assistant'),
        message:
          'Tải miễn phí trên CH Play',
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

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ScreenNavigation}
          options={{
          title: t('anes_assistant'),
          headerStyle: {
            backgroundColor: '#00bfa5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight:() => (
            <FontAwesome name="share-square-o" size={28} color='white' style={{marginRight: 24}} onPress={onShare} />
          ),
        }}
        />
        <Stack.Screen name='Phân loại ASA' component={ASAPhysical}/>
        <Stack.Screen name='Chỉ số El-Ganzouri (EGRI)' component={DifficultAirway}/>
        <Stack.Screen name='Truyền dịch trong phẫu thuật' component={ItraoperativeFluidAdults}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
