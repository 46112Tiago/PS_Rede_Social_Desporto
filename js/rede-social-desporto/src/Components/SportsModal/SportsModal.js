import React from "react";
import './SportsModal.css'
import {MdSportsTennis} from 'react-icons/md'

class SportsModal extends React.Component {

    render() {
      return (
        <div>
            <div>
                <a id="activateModal" href="#demo-modal"><b><MdSportsTennis></MdSportsTennis> Desportos</b></a>
            </div>
            
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Desportos</h1>
                    <ul>
                        <li>
                            Tenis
                        </li>
                        <li>
                            FootBall
                        </li>
                    </ul>
                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }
  }

  export default SportsModal