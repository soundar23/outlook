import { observable ,action, computed} from 'mobx';
import { create, persist } from 'mobx-persist'
class InboxStore {
    @persist('object') @observable deleted=[];
    @persist('object') @observable inbox=[
    {
        "mId": "guid-1",
        "unread": true,
        "flag":false,
        "time":'Sat 9.04',
        "subject" : "Training Program About Microsoft Virtual Academy",
        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },
    {
        "mId": "guid-2",
        "unread": false,
        "flag":false,     
        "time":'Mon 10.04',           
        "subject" : "Empower your future",
        "content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
    },{
        "mId": "guid-3",
        "unread": true,
        "flag":false,
        "time":' Sun 9.11',                
        "subject" : "Training Program",
        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },{
        "mId": "guid-4",
        "unread": true,
        "flag":false,
        "time":'Tue 8.06',                
        "subject" : "Training Program About Microsoft Virtual Academy",
        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },
    {
        "mId": "guid-5",
        "unread": false,
        "time":'Tue 9.04',
        "flag":false,        
        "subject" : "Empower your future",
        "content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
    },{
        "mId": "guid-6",
        "unread": true,
        "flag":false,     
        
        "time":'Wed 9.04',        
        "subject" : "Training Program",
        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    }
    ];
    @computed get inboxCount(){
        var unreadMails=[];
        Object.keys(this.inbox).map((obj,index)=>{
            if(this.inbox[obj].unread==true)
            {
            unreadMails.push(this.inbox[obj]);
            }
        });
        return unreadMails.length;
    }
    @computed get deleteCount(){
        var unreadMails=[];
        Object.keys(this.deleted).map((obj,index)=>{
            if(this.deleted[obj].unread==true)
            {
            unreadMails.push(this.deleted[obj]);
            }
        });
        return unreadMails.length;
    }
    @action removeMail =(mail)=>{
        Object.keys(this.inbox).map((obj,index)=>{
            console.log(this.inbox[obj].mId);
            if(this.inbox[obj].mId==mail.mId)
            // delete this.inbox[obj];
            {
            this.inbox.splice(index,1);
            this.deleted.push(mail);                
            }
        });
    }
    @action flagMail =(mail)=>{
        Object.keys(this.inbox).map((obj,index)=>{
            console.log(this.inbox[obj].mId);
            if(this.inbox[obj].mId==mail.mId)
            this.inbox[obj].flag=!mail.flag;
        });
    }
    @action flagDeletedMail =(mail)=>{
        Object.keys(this.deleted).map((obj,index)=>{
            console.log(this.deleted[obj].mId);
            if(this.deleted[obj].mId==mail.mId)
            this.deleted[obj].flag=!mail.flag;
        });
    }
    @action readMail =(mail)=>{
        Object.keys(this.inbox).map((obj,index)=>{
            console.log(this.inbox[obj].mId);
            if(this.inbox[obj].mId==mail.mId)
            this.inbox[obj].unread=false;
        });
    }
    @action unreadMail =(mail)=>{
        Object.keys(this.inbox).map((obj,index)=>{
            console.log(this.inbox[obj].mId);
            if(this.inbox[obj].mId==mail.mId)
            this.inbox[obj].unread=true;
        });
    }
    
    
}

export default InboxStore;
