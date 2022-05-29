import React from 'react';
import './LookingBody.css'
import Pending from './Pending/Pending';
import Navigate from './Navigate/Navigate';
import Made from './Made/Made';
import Accept from './Accept/Accept'
import Confirmed from './Confirmed/Confirmed';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import LookingModal from './LookingModal';
import Paging from '../../Paging/Paging';

const LookingBody = () => {


   const getLookingPlayers = (data) => {
      setLookingPlayers(data)
   }

   const [component, setComponent] = React.useState(<SearchPlayer/>);
   const [lookingObj, setLookingPlayers] = React.useState({})

  React.useEffect(() => {

  },[component]);

   return (
   <>      
      <div className="radio" >
         <input label="Navigate" type="radio" id="navigate" name="looking" value="navigate" onChange={() => {setComponent(<Navigate/>)}} />
         <input label="Made" type="radio" id="made" name="looking" value="made" onChange={() => {setComponent(<Made getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Accept" type="radio" id="accept" name="looking" value="accept" onChange={() => {setComponent(<Accept/>)}} />
         <input label="Pending" type="radio" id="pending" name="looking" value="pending" onChange={() => {setComponent(<Pending/>)}} />
         <input label="Confirmed" type="radio" id="confirmed" name="looking" value="confirmed" onChange={() => {setComponent(<Confirmed/>)}} />
         <input label="Create" type="radio" id="create" name="looking" value="create" onChange={() => {setComponent(<SearchPlayer/>)}} defaultChecked />
      </div>
      <div id='pendingBody'>
         {component}
         <LookingModal lookingInfo={lookingObj}></LookingModal>
      </div>
   </>
   );
  }

  export default LookingBody