import "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./components/AboutScreen";
import HomeScreen from "./components/HomeScree";
import CreatorScreen from "./components/CreatorScreen";
import {
  Box,
  HStack,
  Icon,
  NativeBaseProvider,
  Text,
  VStack,
  extendTheme,
  Pressable,
  Center,
  Heading,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const theme = extendTheme({});
const Drawer = createDrawerNavigator();
const getIcon = (screenName: string) => {
  switch (screenName) {
    case "Home":
      return "home";
    case "About":
      return "information";
    case "Creator":
      return "fire";
    default:
      return undefined;
  }
};

export default function App() {
  const headerStyle = {
    headerStyle: {
      backgroundColor: theme.colors.secondary[600],
    },
    headerTintColor: "#fff",
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <Center>
          <Heading color={"secondary.500"}>Menu</Heading>
        </Center>
        <VStack my={2} mx={1} space={4}>
          {props.state.routeNames.map((name: string, index: number) => (
            <Pressable
              px={5}
              py={3}
              rounded="md"
              onPress={(event) => props.navigation.navigate(name)}
              bg={index === props.state.index ? "secondary.100" : "transparent"}
            >
              <HStack p={1} space={4} alignItems="center">
                <Icon
                  size={5}
                  color={
                    index === props.state.index ? "secondary.600" : "gray.700"
                  }
                  as={
                    <MaterialCommunityIcons
                      name={getIcon(name)}
                    ></MaterialCommunityIcons>
                  }
                ></Icon>
                <Text
                  fontWeight={500}
                  color={
                    index === props.state.index ? "secondary.600" : "gray.700"
                  }
                >
                  {name}
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>
      </DrawerContentScrollView>
    );
  };

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => (
              <CustomDrawerContent {...props} initialRouteName="Home" />
            )}
          >
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Trending Memes",
                ...headerStyle,
              }}
            />
            <Drawer.Screen
              name="About"
              component={AboutScreen}
              options={{
                title: "About MemeSpace",
                ...headerStyle,
              }}
            />
            <Drawer.Screen
              name="Creator"
              component={CreatorScreen}
              options={{
                title: "Create Memes",
                ...headerStyle,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
