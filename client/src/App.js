import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import DemoPage from './components/DemoPage/DemoPage';
import DemoPageTwo from './components/DemoPage copy/DemoPage';
import DemoFunc from './components/DemoPage func/DemoFunc';
import './App.css';

function App() {
  return (
    <div className="container">
        <Header />

        <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/categories/:category" exact component={Categories} />
            <Route path="/pets/details/:petId" exact component={PetDetails} />
            <Route path="/pets/create" exact component={CreatePet}/>
            <Route path="/demo" component={DemoPageTwo} />
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
