import './App.css';
import Layout from './Layout/Layout';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}

export default App;
