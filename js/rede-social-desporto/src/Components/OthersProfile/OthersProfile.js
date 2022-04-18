import React from "react";
import './OthersProfile.css'
import {FaCity} from 'react-icons/fa'
import {MdSportsTennis} from 'react-icons/md'

class OthersProfile extends React.Component {

    render() {
      return (
        <div id="body">
            <div id="backgroundProfile">
                <div id="backgroundLeft">
                    <img id="profileImg" src={require('./Img/user_icon.png')}></img>
                </div>

                <div id="backgroundRight">
                    <div className="rightProfile" id="rightName">
                        <h2>Name Surname</h2>
                    </div>
                    <div className="rightProfile" id="rightInfo">
                        <h4><FaCity></FaCity> Cidade</h4>
                        <h4><MdSportsTennis></MdSportsTennis> Desportos</h4>
                    </div>
                    <div className="rightProfile" id="rightBtn">
                        <button id="friendRequest">Friend</button>
                    </div>
                </div>

            </div>
        </div>
      );
    }
  }

  export default OthersProfile