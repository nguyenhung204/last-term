import { Provider } from 'react-redux';
import { store } from './reduxtoolkit/store'
import ContainerNavigation from './navigation/ContainerNavigation.jsx'


export default function App() {
  return (
    <Provider store = {store}>
      <ContainerNavigation />
    </Provider>
  );
}


