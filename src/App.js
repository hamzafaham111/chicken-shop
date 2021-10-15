import Navbar from "./Manue/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Orders } from "./Pages/Orders/Orders";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
        <Route exect path="/order" component={Orders}/>
          <Route exect path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
