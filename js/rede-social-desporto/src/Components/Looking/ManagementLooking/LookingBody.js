import React from 'react';
import './LookingBody.css'
import Pending from './Pending/Pending';
import Navigate from './Navigate/Navigate';
import Made from './Made/Made';
import Accept from './Accept/Accept'

const LookingBody = () => {

   const [component, setComponent] = React.useState(<Navigate/>);


  React.useEffect(() => {

  },[component]);

   return (
   <>      
      <div className="radio" >
         <input label="Navigate" type="radio" id="navigate" name="looking" value="navigate" onChange={() => {setComponent(<Navigate/>)}} defaultChecked />
         <input label="Pending" type="radio" id="pending" name="looking" value="pending" onChange={() => {setComponent(<Pending/>)}} />
         <input label="Made" type="radio" id="made" name="looking" value="made" onChange={() => {setComponent(<Made/>)}} />
         <input label="Accept" type="radio" id="accept" name="looking" value="accept" onChange={() => {setComponent(<Accept/>)}} />

      </div>
      <div id='pendingBody'>
         {component}
      </div>
   </>
   );
  }

  export default LookingBody