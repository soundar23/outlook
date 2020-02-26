import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {MyContext} from '../MyProvider';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  
const MailContent=({obj})=>{
    console.log(obj);
    const classes = useStyles();
  if(obj!=undefined)
  {
    return (
        <div>
             <div style={{padding:'40px 0px 0px 15px',textAlign:'left',fontSize:24}}>
              {obj.subject}
          </div>
            <Paper className={classes.root}>
      <Typography>
      <div > 
          <div style={{padding:'0px 0px 40px 0px',textAlign:'left',fontSize:22,color:'#0078D4'}}>
              {obj.mId}<br/>
              <span style={{fontSize:16}}>{obj.time}</span>
          </div>
          <div>
              {obj.content}
          </div>
          </div>
      </Typography>
      
    </Paper>
          
         
        </div>
    )
}
return <div>
    <i class="material-icons" style={{ color:'rgb(0, 120, 212)',fontSize: 100,padding: '150px 150px 0px' }}>mail_outline</i>
    <div>Select an item to read</div>
</div>;

}
const Content =(props)=>{
   
    const context = React.useContext(MyContext);
    
    const [mail,setMail]=useState({});
    useEffect(() => {
        setMail(context.state.mail.mailObj);
    });
    console.log("dfsf",context.state.mail.mailObj);
    
        return(
            <MailContent obj={context.state.mail.mailObj}/>
            // <div>{props.mailObj.map((obj,index)=><MailContent obj={obj}/>)}</div>
        );
}
export default Content;