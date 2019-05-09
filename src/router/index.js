import HomeScreen from "HomeScreen/";
import ViewDetailsScreen from "ViewDetailsScreen/";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Button, View } from "react-native";


export const MainStack = createStackNavigator({
    HomeScene: { screen: HomeScreen, navigationOptions: { title: 'The New York Times',headerLayoutPreset: 'center', transition: 'horizontal' }},
    ViewDetailsScene: { screen: ViewDetailsScreen, navigationOptions: { title: 'Details',headerLayoutPreset: 'center',transition: 'horizontal' }},

},
    {
        initialRouteName: "HomeScene",
        animationEnabled: true,
        headerTransitionPreset: 'uikit',
        headerLayoutPreset: 'center'
    });


export const AppNavigator = createAppContainer(
        MainStack
);
