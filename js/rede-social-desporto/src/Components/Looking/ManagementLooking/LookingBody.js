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

   const getSports = (data) => {
      setSport(data)
   }


   const [component, setComponent] = React.useState(<SearchPlayer/>);
   const [lookingObj, setLookingPlayers] = React.useState({})
   const [sport, setSport] = React.useState('')

  React.useEffect(() => {

  },[component]);

   return (
   <>      
      <div className="radio" >
         <input label="Navigate" type="radio" id="navigate" name="looking" value="navigate" onChange={() => {setComponent(<Navigate getSports={getSports} getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Made" type="radio" id="made" name="looking" value="made" onChange={() => {setComponent(<Made getSports={getSports} getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Accept" type="radio" id="accept" name="looking" value="accept" onChange={() => {setComponent(<Accept getSports={getSports} getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Pending" type="radio" id="pending" name="looking" value="pending" onChange={() => {setComponent(<Pending getSports={getSports} getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Confirmed" type="radio" id="confirmed" name="looking" value="confirmed" onChange={() => {setComponent(<Confirmed getSports={getSports} getLookingPlayers={getLookingPlayers}/>)}} />
         <input label="Create" type="radio" id="create" name="looking" value="create" onChange={() => {setComponent(<SearchPlayer/>)}} defaultChecked />
      </div>
      <div id='pendingBody'>
         {component}
         <LookingModal sport={sport} lookingInfo={lookingObj}></LookingModal>
      </div>
   </>
   );
  }

  export default LookingBody