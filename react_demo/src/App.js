import './App.css'
import {StyleSheet, View} from 'react-native'
import {Provider} from 'react-redux'
import ComA from './component/ComA'
import ComB from './component/ComB'
import store from './store'

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'relative',
    right: 0,
    top: 0,
  },
});

function App() {
  return (
<Provider store =  {store}>
<View style = {styles.container}>
      <ComA></ComA>
      <ComB></ComB>
    </View>
</Provider>
  );
}

export default App;
