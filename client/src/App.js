import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import QueryEditor from './components/QueryEditor';
import { useStateValue } from './stateProvider';
import './App.css';
import Login from './components/Login';

function App() {

  const [ { user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* {user === "" ? ( */}
              <Route path='/login'>
                <Login />
              </Route>            
          {/* ): ( */}
              <Route path='/psqlEditor/'>
                  <QueryEditor />
                </Route>
          {/* )} */}
          <Redirect to='/login' />
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;