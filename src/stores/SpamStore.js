import { observable ,action,computed} from 'mobx';
import { create, persist } from 'mobx-persist'

class SpamStore {
    @persist('object') @observable spam=[
    {
        "mId": "guid-1",
        "unread": true,
        "flag":false,
        "time":'Sat 9.04',
        "subject" : "Training Program About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community",
        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },
    {
        "mId": "guid-2",
        "unread": false,
        "flag":false,
        "time":'Sat 9.04',
        "subject" : "Empower your future",
        "content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
    }
    ];
    @computed get spamCount(){
        var unreadMails=[];
        Object.keys(this.spam).map((obj,index)=>{
            if(this.spam[obj].unread==true)
            {
            unreadMails.push(this.spam[obj]);
            }
        });
        return unreadMails.length;
    }
    @action removeMail =(mail)=>{
        Object.keys(this.spam).map((obj,index)=>{
            console.log(this.spam[obj].mId);
            if(this.spam[obj].mId==mail.mId)
            this.spam.splice(index,1);
        });
    }
    @action flagMail =(mail)=>{
        Object.keys(this.spam).map((obj,index)=>{
            console.log(this.spam[obj].flag);
            if(this.spam[obj].mId==mail.mId)
            this.spam[obj].flag=!mail.flag;
        });
    }
    @action readMail =(mail)=>{
        Object.keys(this.spam).map((obj,index)=>{
            console.log(this.spam[obj].mId);
            if(this.spam[obj].mId==mail.mId)
            this.spam[obj].unread=false;
        });
    }
    @action unreadMail =(mail)=>{
        Object.keys(this.spam).map((obj,index)=>{
            console.log(this.spam[obj].mId);
            if(this.spam[obj].mId==mail.mId)
            this.spam[obj].unread=true;
        });
    }
    
}
export default SpamStore;