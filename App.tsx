import { SafeAreaView, StatusBar, View } from "react-native";
import Login from "./src/modules/auth/view/login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/modules/home/view/home";


function App() {
  return (
    <SafeAreaProvider style={{marginTop:15}}>
      <View >
        <StatusBar barStyle="dark-content" />
     <Home/>
      </View>
    </SafeAreaProvider>

  );
}



export default App;
