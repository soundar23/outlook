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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const Folder = (props) => {
  const classes = useStyles();
  const context = React.useContext(MyContext);
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = (expanded) => {
    setExpanded(!expanded);
  };
  return (props.open?<ExpansionPanel expanded={expanded} onChange={() => handleChange(expanded)} style={{ boxShadow: 'none' }}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Folders</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        <MenuList>
          <MenuItem onClick={() => { location.href='/Inbox'; context.setFolder("Inbox"); context.setRoute("/Inbox"); }}><i class="material-icons" style={{ paddingRight: 10, margin: 0 }} >inbox</i>Inbox {props.inbox.inboxCount}</MenuItem>
          <MenuItem onClick={() => { location.href='/Spam'; context.setFolder("Spam"); context.setRoute("/Spam"); }}><i class="material-icons" style={{ paddingRight: 10, margin: 0 }}  >edit</i>Spam {props.spam.spamCount}</MenuItem>
          <MenuItem onClick={() => { location.href='/Delete';context.setFolder("Delete"); context.setRoute("/Delete"); }}><i class="material-icons" style={{ paddingRight: 10, margin: 0 }}  >delete </i>Deleted Items</MenuItem>
          <MenuItem onClick={() => { location.href='/Custom';  context.setFolder("Custom"); context.setRoute("/Custom"); }}><i class="material-icons" style={{ paddingRight: 10, margin: 0 }} >play_arrow</i> Sent Items</MenuItem>

        </MenuList>
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>:<div style={{flex:0.5}}> <Typography>
        <MenuList>
          <MenuItem onClick={() => { location.href='/Inbox'; context.setFolder("Inbox"); context.setRoute("/Inbox"); }}><i class="material-icons" style={{ margin: 0 }} >inbox</i></MenuItem>
          <MenuItem onClick={() => { location.href='/Spam'; context.setFolder("Spam"); context.setRoute("/Spam"); }}><i class="material-icons" style={{ margin: 0 }}  >edit</i></MenuItem>
          <MenuItem onClick={() => { location.href='/Delete';context.setFolder("Delete"); context.setRoute("/Delete"); }}><i class="material-icons" style={{ margin: 0 }}  >delete </i></MenuItem>
          <MenuItem onClick={() => { location.href='/Custom';  context.setFolder("Custom"); context.setRoute("/Custom"); }}><i class="material-icons" style={{ margin: 0 }} >play_arrow</i></MenuItem>

        </MenuList>
      </Typography></div>);

}
export default inject('inbox','spam','delete')(observer(Folder))
