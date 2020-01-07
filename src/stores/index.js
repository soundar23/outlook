import InboxStore from './InboxStore';
import SpamStore from './SpamStore';
import DeleteStore from './DeleteStore';
import { create, persist } from 'mobx-persist'


const hydrate = create({
    storage: localStorage,   // or AsyncStorage in react-native.
                            // default: localStorage
    jsonify: true  // if you use AsyncStorage, here shoud be true
                    // default: true
})
class stores{
    
    constructor()
    {
        this.InboxStore = new InboxStore();
        this.SpamStore = new SpamStore();
        this.DeleteStore = new DeleteStore();
        hydrate('inbox',this.InboxStore);
        hydrate('spam',this.SpamStore);
       
        const result = hydrate('delete',this.DeleteStore);
        const rehydrate = result.rehydrate
        result.then(() => console.log('some hydrated'))

        setTimeout(() => {
            rehydrate().then(() => console.log('rehydrated'))
        }, 3000)

    }
    
}
export default stores=new stores();