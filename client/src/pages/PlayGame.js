import React from "react";
import backgroundImage from "./img/bgforphone2b.png";
import dealbuttonImage from "./img/dealbutton01.png";
import cardbackImage from "./img/spinningcardbas1.png";
import transImage from "./img/transparent.png";
import './css/style.css';
// import { Header } from '../components/Header.js';
// const headerdata = Header;

const cardbacks = cardbackImage;
const background = backgroundImage;
const dealbutton = dealbuttonImage;
const transpng = transImage;


function PlayGame() {
    return (
    <div className="overoverall">
        <div className="overall" style={{ backgroundImage: `url(${background})`,
                      backgroundRepeat: 'no-repeat',
                    //   backgroundPosition: 'center',
                      
                      }}>
                <div className="wordsblocktop">
                    <span className="usertoptext">Welcome: Gamer</span><br />
                    <span className="usertoptext">Bank: $134,000.00</span><br />
                    <span className="usercurrentbet">CURRENT BET: $5,000.00</span><br />
                </div>

                <div className="dealbutton" >
                    <img src={dealbutton} width="70%" alt="Button for dealing playing card for the game"/>
                </div>

                <div className="sprinningcardswrap">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                        <img src={cardbacks} width="38%" alt="back of playing card"/>
                        <img src={cardbacks} width="38%" alt="back of playing card"/>
                    </div>
                    
                </div>
                <img src={transpng} height="120px" alt="opening graphics"/>
        </div>
    </div>
    )
}


export default PlayGame