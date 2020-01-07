import React, { useState ,useEffect} from 'react';
import { Container, Hidden } from '@material-ui/core';
import {MyContext} from '../MyProvider';
import {observer, inject} from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Scrollbars } from 'react-custom-scrollbars';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
const useStyles = makeStyles(theme => ({
    root: {
     
    },
  }));
const Mail = ({mailObj,props}) => {
    //console.log(mailObj);
    const context = React.useContext(MyContext);
    const classes = useStyles();
    var mailData='';
    const deleteMail=(props)=>{
        // props.delete.addDelete(mailObj);
        props.inbox.removeMail(mailObj);
        context.setFolder("Inbox");
        console.log(props.delete.all.slice());
    };
    if(context.state.route=='/Inbox')
    {
    mailData=props.inbox;
    }
    else if(context.state.route=='/Spam')
    {
    mailData=props.spam;
    
    }
    else if(context.state.route=='/Delete')
    {
    mailData=props.inbox;
    
    }
    const flagMail  =(props)=>{
        console.log(context.state.route,"fsdsds",context.state.folder);
        if(context.state.route=='/Inbox')
        {
            mailData.flagMail(mailObj);
        context.setFolder("Inbox");
        }
        else if(context.state.route=='/Spam')
        {
            mailData.flagMail(mailObj);
        context.setFolder("Spam");
        
        }
        else if(context.state.route=='/Delete')
        {
            mailData.flagDeletedMail(mailObj);
        context.setFolder("Delete");
        
        }
        
        // console.log(props.delete.all.slice());
    }
    return <Container style={{padding:'0px 5px 0px 5px'}} >
    <Paper  >
      <Typography>
        <div className="mail" style={{borderLeft:mailObj.unread?'2px solid ':'',borderColor:mailObj.unread?'#0078D4':'',height:90 ,display:'flex',textAlign:'left',wordBreak:'break-word'}}>
            <div style={{flex:8,display:'flex',flexDirection:'column',overflow:'hidden'}} onClick={()=>{context.setMail({mailObj});mailData.readMail(mailObj);}}>
            <div style={{height:'40%',overflow:'hidden',fontSize:24,paddingLeft:10}}>
            {mailObj.mId}
            </div>
            <div style={{height:'30%',overflow:'hidden',lineHeight:'25px',color:mailObj.unread?'#0078D4':'black',fontWeight:mailObj.unread?'bold':'normal',paddingLeft:10}} >
            {mailObj.subject}
            </div>
            <div style={{height:'30%',overflow:'hidden',lineHeight:'25px',paddingLeft:10}} >
            {mailObj.content}
            </div>
            </div>
            <div style={{flex:2,display:'flex',flexDirection:'column'}}>
            <div style={{flex:3,flexDirection:'row'}} className="mailers">
            <IconButton title='Delete'  onClick={()=>deleteMail(props)}style={{color:'red'}}><i class="material-icons" style={{  color: 'red' }}>clear</i></IconButton>
            <IconButton title='Mark as unread' onClick={()=>{context.setMail({mailObj});mailData.unreadMail(mailObj);}} style={{color: mailObj.unread?'#0078D4':'black'}}><i class="material-icons" >mail_outline</i></IconButton>
            <IconButton title='Flag' onClick={()=>flagMail(props)} style={{color: mailObj.flag?'red':'#0078D4'}}><i class="material-icons" >flag</i></IconButton>
            
            
            </div>
            <div style={{flex:2,color:mailObj.unread?'#0078D4':'black',margin:'auto'}}>
            {mailObj.time}
            </div>
            </div>
        </div>
        </Typography>
      
    </Paper>
        </Container>;
}

const Mails =(props)=> {
    
           const context = React.useContext(MyContext);
        const[value,setValue]=useState('All');
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0',
          }; 
        const [route,setRoute]=useState('/Inbox');
        // useEffect(() => {
        //     if(context.state.route)
        //     setRoute(context.state.route);
        // });
        const handleChange = (event, index, value) => setValue({value});
        var mails='';
      
        var heading='';
        if(context.state.route=='/Inbox' || context.state.route=='/')
        {
            mails=props.inbox.inbox;
            heading='Inbox';            
        }
        else if(context.state.route=='/Spam')
        {
            mails=props.spam.spam;
            heading='Spam';            
        }
        else if(context.state.route=='/Delete')
        {
            mails=props.inbox.deleted;
            heading='Delete';            
        }
        else{
            mails=null;
            heading='SentItems';
        }
        const filters= (inbox)=>{
            console.log(inbox)
        return <IconMenu
        iconButtonElement={<FlatButton label="Filter" />}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="All" onClick={()=>{setValue('All')}} />
        <MenuItem primaryText="Unread" onClick={()=>{setValue('Unread')}} />
        <MenuItem primaryText="Flagged" onClick={()=>{setValue('Flagged')}} />
        </IconMenu>};
        //setFolder(context.state.folder);
        console.log(route,"dfsf",context.state.route);
        return (
            <div>
                 <div style={{display:'flex'}}><div style={{fontSize:22,fontWeight:500,paddingLeft:15,textAlign:'left',flex:1}}>{heading}</div>{filters(mails)}
                </div>
                 <Scrollbars style={{ width: 430, height: 500 }}>
                { mails&& mails.slice().map((obj, index) =>value=='Flagged'?obj.flag?<Mail mailObj={obj} props={props}/>:'':
            value=='Unread'?obj.unread?<Mail mailObj={obj} props={props}/>:'':<Mail mailObj={obj} props={props}/>)}
                </Scrollbars>
            </div>
            );
    }

   
 export default inject('inbox','spam','delete')(observer(Mails,Mail))
