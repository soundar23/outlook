import React, { useContext } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { MyContext } from '../MyProvider';
import {observer, inject} from 'mobx-react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { IOverflowSetItemProps, OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const setlink=()=>{
    history.pushState(null,'Inbox',"/Inbox");context.setFolder("Inbox"); context.setRoute(location.pathname); 
}

const Folder = (props) => {
  const classes = useStyles();
  const context = React.useContext(MyContext);
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = (expanded) => {
    setExpanded(!expanded);
  };
  const _onRenderItem = (item) => {
    return (
      <CommandBarButton
        role="menuitem"
        aria-label={item.name}
        styles={{ root: { padding: '10px' } }}
        iconProps={{ iconName: item.icon }}
        onClick={item.onClick}
      />
    );
  };
 
  return (props.open?
  <div>
   <Nav
      styles={{ root: { width: 300 } }}
      ariaLabel="Nav example similiar to one found in this demo page"
      groups={[
        {
          name: 'Favourites',
          expandAriaLabel: 'Expand Basic components section',
          collapseAriaLabel: 'Collapse Basic components section',
          links: [
            {
              key: 'Inbox',
              name: 'Inbox',
              iconProps:{ iconName: 'Inbox' },
              onClick:() => { history.pushState(null,'Inbox',"/Inbox");context.setFolder("Inbox"); context.setRoute(location.pathname); }
            },
            {
              key: 'Spam',
              name: 'Spam',
              iconProps:{ iconName: 'Edit' },              
              onClick:() => {  history.pushState(null,'Spam','/Spam'); context.setFolder("Spam"); context.setRoute(location.pathname); }
            },
            {
              key: 'Deleted Items',
              name: 'Deleted Items',
              iconProps:{ iconName: 'Delete' },              
              onClick:() => {  history.pushState(null,'Delete','/Delete');context.setFolder("Delete"); context.setRoute(location.pathname); }
            },
            {
              key: 'Sent Items',
              name: 'Sent Items',
              iconProps:{ iconName: 'send' },              
              onClick:() => { history.pushState(null,'Custom','/Custom');  context.setFolder("Custom"); context.setRoute(location.pathname); }
            }
          ]
        }
      ]}
     
    />
    </div>:<div style={{flex:0.5}}> <Typography>
       <OverflowSet
        aria-label="Vertical Example"
        role="menubar"
        vertical
        items={[
          {
            key: 'Inbox',
            icon: 'Inbox',
            name: 'Inbox',
            ariaLabel: 'New. Use left and right arrow keys to navigate',
              onClick:() => {  history.pushState(null,'Spam','/Spam'); context.setFolder("Spam"); context.setRoute(location.pathname); }
          },
          {
            key: 'Spam',
            icon: 'Edit',
            name: 'Spam',
              onClick:() => {  history.pushState(null,'Spam','/Spam'); context.setFolder("Spam"); context.setRoute(location.pathname); }
          },
          {
            key: 'Deleted Items',
            icon: 'Delete',
            name: 'Deleted items',
              onClick:() => {  history.pushState(null,'Delete','/Delete');context.setFolder("Delete"); context.setRoute(location.pathname); }
          },
          {
            key: 'Sent Items',
            icon: 'Send',
            name: 'Sent items',
            onClick:() => { history.pushState(null,'Custom','/Custom');  context.setFolder("Custom"); context.setRoute(location.pathname); }
          },
        ]}
      
        onRenderItem={_onRenderItem}
      />
   
      </Typography></div>);

}
export default inject('inbox','spam','delete')(observer(Folder))
