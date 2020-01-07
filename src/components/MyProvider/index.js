import React, { Component } from 'react';

const MyContext= React.createContext();
 class MyProvider extends Component{
    state = {folder:"Inbox",mail:{},route:location.pathname};
 
    render(){
    console.log(location);
        
        return(
            //Context Provider for maintaining the state  
           <MyContext.Provider value={{state:this.state,setFolder:(value)=>this.setState({folder:value}),setMail:(value)=>this.setState({mail:value}),setRoute:(value)=>this.setState({route:value})}}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}
export {MyContext,MyProvider}
