
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../components/HomeScreen.jsx';
import AddEditScreen from '../components/AddEditScreen.jsx';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// BottomTabNavigator cho HomeScreen
const BottomTabNavigator = () => (
 <Tab.Navigator
  initialRouteName="Home"
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'AddEdit') {
        iconName = focused ? 'add' : 'add-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="AddEdit" component={AddEditScreen} />
  </Tab.Navigator>
);

// Stack Navigator chứa BottomTabNavigator
const ContainerNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ContainerNavigation;
