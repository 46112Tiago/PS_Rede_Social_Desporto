import React from 'react';
import './Friends.css'
import Friends from './Friends';
import FriendsPending from './FriendsPending';

const FriendsRadio = (props) => {

    const [component, setComponent] = React.useState(<Friends/>);
 
   React.useEffect(() => {
 
   },[component]);

      return (
       <>
        <div className="radio" >
            <input label="Friends" type="radio" id="friends" name="friendsPage" value="friends" onChange={() => {setComponent(<Friends />)}} defaultChecked/>
            <input label="Request" type="radio" id="request" name="friendsPage" value="request" onChange={() => {setComponent(<FriendsPending/>)}}  />
        </div>
        <div>
            {component}
        </div>
       </>
      );
    }

  export default FriendsRadio