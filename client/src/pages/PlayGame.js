import React from "react";
import { useEffect, useState } from "react"
import UserBet from '../components/UserBet'
import { useMutation, gql } from '@apollo/client'
import backgroundImage from "./img/bgforphone2d.png";
import dealbuttonImage from "./img/dealbutton01.png";
import cardbackImage from "./img/spinningcardbas1.png";
import kingofheartsImage from "./img/KH.png";
import transImage from "./img/transparent.png";
import { storeToken } from "../utils/auth"
import '../fonts/Neuliner Bold.otf';
import './css/style.css';
// import { Header } from '../components/Header.js';
// const headerdata = Header;


const ADD_BET = gql`
    mutation addBet($user_bet: Int!, $winner: String!) {
        addBet(user_bet: $user_bet, winner: $winner){
            user {
            _id
            email
            username
            bank
            }
            token
        }
    }`

const kinfoghearts = kingofheartsImage;
const cardbacks = cardbackImage;
const background = backgroundImage;
const dealbutton = dealbuttonImage;
const transpng = transImage;



function PlayGame(props) {
    const [playercard, setPlayerCard] = useState(null);
    const [compcard, setCompCard] = useState(null);
    const [winner, setWinnerCard] = useState('');
    const [betAmount, setBetAmount] = useState(0);
    const [user_bet, setUserBet] = useState('');
    // const chaching = new Audio('shuffle01.mp3')

    const [addBet, { loading, error, data }] = useMutation(ADD_BET);


    const grabDeck = (e) => {
        
        fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setPlayerCard(data.cards[0])
                setCompCard(data.cards[1])
                const convertCard = (card) => {
                    switch (card) {
                        case 'ACE':
                            card = 14
                            break
                        case 'KING':
                            card = 13
                            break
                        case 'QUEEN':
                            card = 12
                            break
                        case 'JACK':
                            card = 11
                            break
                        default:
                    }
                    card = parseInt(card)
                    console.log(card)
                    // chaching.play()
                    return card
                }

                let playercard = convertCard(data.cards[0].value)
                let compcard = convertCard(data.cards[1].value)

                // Call server to update based on bet amt and win/loss

                // e.preventDefault()

                // const response = addBet()

                // props.storeToken(response.data.addBet.token)
                // props.setUser(response.data.addBet.user)
                // setUserBet('')

                const userWon = playercard > compcard;
                if (e) e.preventDefault()

                addBet({ variables: { user_bet: betAmount, winner: userWon ? 'player' : 'comp' } }).then((response) => {
                    storeToken(response.data.addBet.token)
                    props.setUser(response.data.addBet.user);
                })

                if (playercard > compcard) {
                    setWinnerCard('player')
                } else setWinnerCard('comp')

            })

    }

    const setBetCb = (betNumber) => {
        setBetAmount(betNumber);
    }

    useEffect(() => {
        grabDeck()
    }, [])


    console.log(props.user)

    const currentBet = isNaN(props.betAmount) ? 'Make a bet' : props.betAmount;
    return (
        <div>
            <div className="overoverall">
                <div className="overall" style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    //   backgroundPosition: 'center',

                }}>
                    <div className="wordsblocktop">
                        {props.user && (
                            <>
                                <span className="usertoptext">Welcome: {props.user.username}</span><br />
                                <span className="usertoptext">Bank: {props.user.bank}</span><br />
                                <span className="usercurrentbet">CURRENT BET: <input value={props.betAmount} type="number" onChange={e => {
                                    let intVal = parseInt(e.target.value);
                                    //if (isNaN(intVal)) intVal = 0
                                    setBetCb(intVal)
                                }
                                } name="bet" className="form-box-betfront input, textarea"></input></span><br />
                            </>
                        )}

                    </div>

                    <div className="dealbutton" >
                        <img onClick={grabDeck} disabled={isNaN(betAmount)} src={dealbutton} width="65%" alt="Button for dealing playing card for the game" />
                    </div>

                    <div className="sprinningcardswrap">
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            {playercard && (
                                <>
                                    <img src={playercard.image} width="38.5%" alt="back of playing card" />
                                    <img src={compcard.image} width="38.5%" alt="front of playing card" />
                                </>
                            )}
                        </div>

                    </div>
                    {winner && (winner === 'player' ? <h1>Player Wins!</h1> : <h1>Computer Wins!</h1>)}
                    <img src={transpng} height="120px" alt="opening graphics" />
                </div>
            </div>
        </div>
    )
}


export default PlayGame