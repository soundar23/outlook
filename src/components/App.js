import React from 'react';
import '../css/App.css';
import '../css/style.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import stores from '../stores';
import {Provider} from 'mobx-react';

import Homepage from './Homepage';
function App() {
  const theme = getMuiTheme();

  return (
    <MuiThemeProvider muiTheme={theme}>
    <Provider stores={stores} inbox={stores.InboxStore} spam={stores.SpamStore} delete={stores.DeleteStore}>
    <Homepage />
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
