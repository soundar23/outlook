import React from 'react';
import '../css/App.css';
import '../css/style.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import stores from '../stores';
import {Provider} from 'mobx-react';
import {Router, Route, BrowserRouter,Switch } from 'react-router-dom';

import Homepage from './Homepage';
function App() {
  const theme = getMuiTheme();

  return (
    <MuiThemeProvider muiTheme={theme}>
    <Provider stores={stores} inbox={stores.InboxStore} spam={stores.SpamStore} delete={stores.DeleteStore}>
			<BrowserRouter>
      <div>
           <Switch>
          <Route path="/Inbox">
             <Homepage />
          </Route>
          <Route path="/Spam">
             <Homepage />
          </Route> 
           <Route path="/Delete">
             <Homepage />
          </Route>  
          <Route path="/SentItems">
            <Homepage />
          </Route>
          <Route path="/">
             <Homepage />
          </Route>
        </Switch>
      </div>
</BrowserRouter>
   
    </Provider>
    </MuiThemeProvider>
  );
}

	
export default App;
