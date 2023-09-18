import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './Screen/RecentExpenses';
import AllExpense from './Screen/AllExpense';
import ManageExpense from './Screen/ManageExpense';
import GlobalStyles from './Styles/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './Components/IconButton';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator  screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton
          size={24}
          color={tintColor}
          onPress={() => {
              navigation.navigate('ManageExpense');
            }}
        />
      )
    })}>
      <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="hourglass" size={size} color={color} />
        )
      }} />
      <BottomTabs.Screen name="All Expenses" component={AllExpense} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="calendar" size={size} color={color} />
        )
      }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
<StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500 },
          headerTintColor:"white"
        }}>
          <Stack.Screen name="Expense Overview" component={ExpensesOverview} options={{
            headerShown:false
          }}/>
          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{
            title:"Manage Expense",
            presentation:"modal"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
  }