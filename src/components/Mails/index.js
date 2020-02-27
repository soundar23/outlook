import React, { useState, useEffect } from "react";
import { Container, Hidden } from "@material-ui/core";
import { MyContext } from "../MyProvider";
import { observer, inject } from "mobx-react";
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Scrollbars } from "react-custom-scrollbars";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/IconMenu";
import { Text } from "office-ui-fabric-react/lib/Text";
import {
  ContextualMenuItemType,
  IContextualMenuProps,
  IContextualMenuItem
} from "office-ui-fabric-react/lib/ContextualMenu";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
const useStyles = makeStyles(theme => ({
  root: {}
}));
const Mail = ({ mailObj, props }) => {
  //console.log(mailObj);
  const context = React.useContext(MyContext);
  console.log(context.state.route);
  const classes = useStyles();
  var mailData = "";
  const deleteMail = props => {
    // props.delete.addDelete(mailObj);
    props.inbox.removeMail(mailObj);
    context.setFolder("Inbox");
    console.log(props.delete.all.slice());
  };
  if (context.state.route == "/Inbox") {
    mailData = props.inbox;
  } else if (context.state.route == "/Spam") {
    mailData = props.spam;
  } else if (context.state.route == "/Delete") {
    mailData = props.inbox;
  }
  const flagMail = props => {
    console.log(context.state.route, "fsdsds", context.state.folder);
    if (context.state.route == "/Inbox") {
      mailData.flagMail(mailObj);
      context.setFolder("Inbox");
    } else if (context.state.route == "/Spam") {
      mailData.flagMail(mailObj);
      context.setFolder("Spam");
    } else if (context.state.route == "/Delete") {
      mailData.flagDeletedMail(mailObj);
      context.setFolder("Delete");
    }

    // console.log(props.delete.all.slice());
  };
  return (
    <Container style={{ padding: "0px 5px 0px 5px" }}>
      <Paper>
        <Typography>
          <div
            className="mail"
            style={{
              borderLeft: mailObj.unread ? "2px solid " : "",
              borderColor: mailObj.unread ? "#0078D4" : "",
              height: 90,
              display: "flex",
              textAlign: "left",
              wordBreak: "break-word"
            }}
          >
            <div
              style={{
                flex: 8,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
              onClick={() => {
                context.setMail({ mailObj });
                mailData.readMail(mailObj);
              }}
            >
              <div
                style={{
                  height: "25%",
                  overflow: "hidden",
                  paddingLeft: 10
                }}
              >
                <Text variant="medium" style={{fontWeight: mailObj.unread ? "bold" : "normal"}}>{mailObj.mId}</Text>
              </div>
              <div
                style={{
                  height: "30%",
                  overflow: "hidden",
                  lineHeight: "25px",
                  color: mailObj.unread ? "#0078D4" : "black",
                  fontWeight: mailObj.unread ? "bold" : "normal",
                  paddingLeft: 10
                }}
              >
               <Text variant="medium" style={{fontWeight: mailObj.unread ? "bold" : "normal"}}> {mailObj.subject}</Text>
              </div>
              <div
                style={{
                  height: "30%",
                  overflow: "hidden",
                  lineHeight: "25px",
                  paddingLeft: 10
                }}
              >
                <Text variant="medium">  {mailObj.content}</Text>
              </div>
            </div>
            <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
              <div
                style={{ flex: 3, flexDirection: "row" }}
                className="mailers"
              >
               <IconButton   iconProps={{ iconName: 'delete' }}  onClick={() => deleteMail(props)} title="delete" ariaLabel="delete" />
               <IconButton   iconProps={{ iconName: mailObj.unread ?'Mail':'Read' }}   onClick={() => {
                    context.setMail({ mailObj });
                    mailData.unreadMail(mailObj);
                  }} title="Mark as unread" ariaLabel="Mark as unread" />
               <IconButton   style={{ color: mailObj.flag ? "red" : "#0078D4" }} iconProps={{ iconName: 'flag' }}  onClick={() => flagMail(props)} title="Flag" ariaLabel="Flag" />
               
               
              </div>
              <div
                style={{
                  flex: 2,
                  color: mailObj.unread ? "#0078D4" : "black",
                  margin: "auto"
                }}
              >
               <Text variant="medium"> {mailObj.time}</Text>
              </div>
            </div>
          </div>
        </Typography>
      </Paper>
    </Container>
  );
};

const Mails = props => {
  const context = React.useContext(MyContext);
  const [value, setValue] = useState("All");
  const style = {
    display: "inline-block",
    margin: "16px 32px 16px 0"
  };
  const [route, setRoute] = useState("/Inbox");
  // useEffect(() => {
  //     if(context.state.route)
  //     setRoute(context.state.route);
  // });
  const handleChange = (event, index, value) => setValue({ value });
  var mails = "";

  var heading = "";
  if (location.pathname == "/Inbox" || location.pathname == "/") {
    mails = props.inbox.inbox;
    heading = "Inbox";
  } else if (location.pathname == "/Spam") {
    mails = props.spam.spam;
    heading = "Spam";
  } else if (location.pathname == "/Delete") {
    mails = props.inbox.deleted;
    heading = "Deleted Items";
  } else {
    mails = null;
    heading = "SentItems";
  }
   const  menuItems = [
      {
        key: "All",
        text: "All",
        onClick: ()=>{setValue('All')}
      },
      {
        key: "divider_1",
        itemType: ContextualMenuItemType.Divider
      },
      {
        key: "Unread",
        text: "Unread",
        onClick: ()=>{setValue('Unread')}
      },
      {
        key: "Flag",
        text: "Flag",
        onClick: ()=>{setValue('Flagged')}
      }
    ];
      const menuProps= {
       shouldFocusOnMount: true,
  shouldFocusOnContainer: true,
  items: menuItems
    };
  const filters = inbox => {
    console.log(inbox);
   
  
    return (
      <div >
        <DefaultButton text="Filter" menuProps={menuProps}  persistMenu={true} style={{border:'none',color:"#0078D4"}} />
        
      </div>
    );
  };
  //setFolder(context.state.folder);
  console.log(route, "dfsf", context.state.route);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            paddingLeft: 15,
            textAlign: "left",
            flex: 1,
            color: "#282c34db"
          }}
        >
          <Text variant="xLarge">{heading}</Text>
        </div>
        {filters(mails)}
      </div>
      <Scrollbars style={{ width: 430, height: 500 }}>
        {mails &&
          mails
            .slice()
            .map(
              (obj, index) =>
                value == "Flagged" ? obj.flag ? (
                  <Mail mailObj={obj} props={props} />
                ) : (
                  ""
                ) : value == "Unread" ? obj.unread ? (
                  <Mail mailObj={obj} props={props} />
                ) : (
                  ""
                ) : (
                  <Mail mailObj={obj} props={props} />
                )
            )}
      </Scrollbars>
    </div>
  );
};

export default inject("inbox", "spam", "delete")(observer(Mails, Mail));
