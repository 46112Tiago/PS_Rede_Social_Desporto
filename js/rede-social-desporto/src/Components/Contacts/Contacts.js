import React from 'react';
import './Contacts.css'
import Account from './Account';
import ConversationIdle from './ConversationIdle';
import Friends from './Friends';
import Groups from './Groups';



class Contacts extends React.Component {
  



    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

    render() {



      return (
        <div>
            <div className='flex-container' >
                <div className='itemFlex' id='leftItem'>
                    
                    {/*<Friends></Friends>*/}
                    <Groups></Groups>

                    <Account></Account>
                    
                </div>
                <div className='itemFlex' id='rightItem'>

                    <ConversationIdle></ConversationIdle>
                    
                </div>

            </div>
        </div>
      );
    }
  }

  export default Contacts