import { observable, action } from 'mobx';
import { create, persist } from 'mobx-persist'

class DeleteStore {
    @persist('object') @observable delete=[];
@action addDelete =(mail)=>{
    console.log(this.delete);
    this.delete.push(mail);
    console.log(this.delete);
    
}
@action flagMail =(mail)=>{
    Object.keys(this.delete).map((obj,index)=>{
        console.log(this.delete[obj].flag);
        if(this.delete[obj].mId==mail.mId)
        this.delete[obj].flag=!mail.flag;
    });
}
@action readMail =(mail)=>{
    Object.keys(this.delete).map((obj,index)=>{
        console.log(this.delete[obj].mId);
        if(this.delete[obj].mId==mail.mId)
        this.delete[obj].unread=false;
    });
}
@action unreadMail =(mail)=>{
    Object.keys(this.delete).map((obj,index)=>{
        console.log(this.delete[obj].mId);
        if(this.delete[obj].mId==mail.mId)
        this.delete[obj].unread=true;
    });
}
    
}
export default DeleteStore;