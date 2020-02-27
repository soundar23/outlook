import React, { Component, useState } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Folder from '../Folders';
import Mails from '../Mails';
import Content from '../Content';
import { MyProvider } from '../MyProvider';
// import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { DefaultButton,PrimaryButton } from 'office-ui-fabric-react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const Homepage = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleToggle = () => setOpen(!open);

    return (
        <div className="App">
            {/*{Main Toolbar}*/}
            <Toolbar style={{ backgroundColor: '#0078D4', color: 'white', padding: 0, height: 45 }}>
                <IconButton className="iconColor" style={{ color:'white',height:45,padding:'0px 30px'}}><i className="material-icons" onClick={() => { return null; }}>apps</i></IconButton>
                 <div  style={{ flex: 1,textAlign:'left',padding:10 }}>
                 <Text  variant={'xLarge'}  >
                 <span>Outlook </span>
                 </Text>
                 </div>
                  <div  style={{ flex: 6,textAlign:'left',padding:'7px 0px' }}>
                  <SearchBox
                    styles={{ root: { width: 400,backgroundColor:'#B3D7F2',border:'1px solid transparent' } }}
                    iconProps={{iconName:'Search'}}
                    placeholder="Search"
                    onEscape={ev => {
                    console.log('Custom onEscape Called');
                    }}
                    onClear={ev => {
                    console.log('Custom onClear Called');
                    }}
                    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                    onFocus={() => console.log('onFocus called')}
                    onBlur={() => console.log('onBlur called')}
                />
                    </div>
                    <div  style={{flex: 2}}>
                        
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'SkypeLogo' }} title="SkypeLogo" ariaLabel="SkypeLogo" />
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'settings' }} title="settings" ariaLabel="settings" />
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'help' }} title="help" ariaLabel="help" />
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'Megaphone' }} title="Megaphone" ariaLabel="Megaphone" />
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'Ringer' }} title="Ringer" ariaLabel="Ringer" />
                         <IconButton className="iconColor" style={{ color:'white'}} iconProps={{ iconName: 'EventToDoLogo' }} title="EventToDoLogo" ariaLabel="EventToDoLogo" />
              
                 </div>
            </Toolbar>

            <MyProvider>
                <Toolbar style={{ backgroundColor: '#FAF9F8', color: 'white', padding: 0,height:'55px' }}>
                    <div style={{ flex: 1.5 ,textAlign:'left'}}>
                        
                         <IconButton style={{ color:'grey',padding:'25px'}} onClick={() => handleToggle()} iconProps={{ iconName: 'GlobalNavButton' }} title="GlobalNavButton" ariaLabel="GlobalNavButton" />
                         <PrimaryButton text="New message" allowDisabledFocus style={{margin:'10px 0px',whiteSpace:'nowrap',width:'110px'}} />
                    </div>
                    <div >
                   <DefaultButton text="Mark all as read" iconProps={{iconName:'Mail'}} style={{margin:'10px 0px',whiteSpace:'nowrap',color:'#0078D4',border:'none'}} allowDisabledFocus  />
                      
                        <DefaultButton text='undo' iconProps={{iconName:'undo'}}  style={{margin:'10px 0px'}} disabled={true}/>
                    </div>
                    <div style={{ flex: 5 }}>
                    </div>
                </Toolbar>


                <div className='Main-Wrapper'>

                    {/*<Drawer open={true} containerStyle={{ position: 'unset', width: 218, boxShadow: 'none' }}>*/}
                    {open?<div className='Folder-Wrapper'><Folder open={open} /></div>:
                    <div className='Icon-Wrapper'><Folder open={open} /></div>}
                    {/*</Drawer> Listing of folder(First Child)*/}
                    <div className='Mail-Wrapper'><Mails  /></div>{/*Listing of Mails(Second Child)*/}
                    <div className='Content-Wrapper'><Content /></div>{/*Displaying MailContent(Third Child)*/}

                </div>
            </MyProvider>
        </div>
    );
}

export default Homepage;