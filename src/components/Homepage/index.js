import React, { Component, useState } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Folder from '../Folders';
import Mails from '../Mails';
import Content from '../Content';
import { MyProvider } from '../MyProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
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
    const [open, setOpen] = useState(undefined);

    const handleToggle = () => setOpen(!open);

    return (
        <div className="App">
            {/*{Main Toolbar}*/}
            <Toolbar style={{ backgroundColor: '#0078D4', color: 'white', padding: 0, height: 45 }}>
                <IconButton style={{ color:'white'}}><i className="material-icons" style={{ verticalAlign: "middle", flex: 1, padding: 12 }} onClick={() => { return null; }}>apps</i></IconButton>
                <span style={{ flex: 25 }}><h1 style={{ float: "left", margin: 'auto', fontSize: 18, padding: 15 }}>Outlook Mail</h1></span>
                 <IconButton style={{ color:'white'}}><i className="material-icons" style={{ verticalAlign: "middle", flex: 2 }}>settings</i></IconButton>
                 <IconButton style={{ color:'white'}}><i className="material-icons" style={{ verticalAlign: "middle", flex: 2 }}>help</i></IconButton>
                 <IconButton style={{ color:'white'}}><i className="material-icons" style={{ verticalAlign: "middle", flex: 2 }}>notifications</i></IconButton>
                 <IconButton style={{ color:'white'}}><i className="material-icons" style={{ verticalAlign: "middle", flex: 2 }}>messages</i></IconButton>
            </Toolbar>

            <MyProvider>
                <Toolbar style={{ backgroundColor: '#FAF9F8', color: 'white', padding: 0 }}>
                    <div style={{ flex: 1.5 }}>
                        <IconButton style={{ color:'grey'}} onClick={() => handleToggle()}><i class="material-icons" style={{ fill: 'rgba(0, 0, 0, 0.54)', color: 'rgba(0, 0, 0, 0.54)' }}>menu</i></IconButton>
                        <RaisedButton label="New Message" backgroundColor='#0078D4' labelColor='white' labelStyle={{ fontWeight: 'bold', textTransform: 'capitalize' }} style={{ margin: 12, }} />
                    </div>
                    <div style={{ flex: 3 }}>
                        <RaisedButton label="Mark All As Read" icon={<i class="material-icons">
                            mail_outline
                       </i>} style={{ margin: 12, boxShadow: 'none' }} />
                        <RaisedButton label="undo" icon={<i class="material-icons">
                            undo
                       </i>} disabled={true} backgroundColor='#FAF9F8' style={{ margin: 12, boxShadow: 'none', }} />
                    </div>
                    <div style={{ flex: 5 }}>
                    </div>
                </Toolbar>


                <div className='Main-Wrapper'>

                    {/*<Drawer open={true} containerStyle={{ position: 'unset', width: 218, boxShadow: 'none' }}>*/}
                    {open?<div className='Folder-Wrapper'><Folder open={open} /></div>:
                    <div style={{flex:0.3}}><Folder open={open} /></div>}
                    {/*</Drawer> Listing of folder(First Child)*/}
                    <div className='Mail-Wrapper'><Mails  /></div>{/*Listing of Mails(Second Child)*/}
                    <div className='Content-Wrapper'><Content /></div>{/*Displaying MailContent(Third Child)*/}

                </div>
            </MyProvider>
        </div>
    );
}

export default Homepage;