import './App.css';
import store from './redux/store';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
