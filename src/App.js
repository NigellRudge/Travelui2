import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Start from './screens/Start';
import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createSharedElementStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            mode='card'
             initialRouteName='Start'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name='Start' component={Start} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail}
              sharedElementsConfig={(route, otherRoute, showing) => {
                  const { item } = route.params;
                  return [{id: `item.${item.id}.image`}];

              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
