import { useEffect, useState } from "react"
import UserBet from '../components/UserBet'
import { useMutation, gql } from '@apollo/client'

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
    }    `
// 1000 - 500 = 500

function GameScreen(props) {
    const [playercard, setPlayerCard] = useState(null);
    const [compcard, setCompCard] = useState(null);
    const [winner, setWinnerCard] = useState('');
    const [betAmount, setBetAmount] = useState(0);

    const [addBet, { loading, error, data }] = useMutation(ADD_BET);

    // SHUFFLE NEW DECK OR DECKS
    // WE WILL HAVE TO GET DECK ID FROM THIS FETCH 

    //     fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    //         .then(res => res.json())
    //         .then(data => getCards(data.results))
    // }

    // DRAW FROM NEW DECK
    // PLUG IN DECK ID FROM FIRST FETCH
    // YOU CAN ALSO DRAW FROM 'new' DECK
    // YOU CAN SPECIFY HOW MANY CARDS WITH THE COUNT=X QUERY
    const grabDeck = async () => {
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
                    return card
                }

                let playercard = convertCard(data.cards[0].value)
                let compcard = convertCard(data.cards[1].value)

                // Call server to update based on bet amt and win/loss
                const userWon = playercard > compcard;
                addBet({ variables: { user_bet: betAmount, winner: userWon ? 'player' : 'comp' } }).then((response) => {
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

    useEffect(grabDeck, [])

    return (
        <div>
            < UserBet winner={winner} user={props.user} setUser={props.setUser} betAmount={betAmount} setBetCb={setBetCb} />
            <h1>GameScreen</h1>
            {playercard && (
                <div className="cards">
                    <img src={playercard.image} className="cardplayer" alt='Card'></img>
                    <img src={compcard.image} className="cardplayer" alt='Card'></img>
                </div>
            )}
            {winner && (winner === 'player' ? <h1>Player Wins!</h1> : <h1>Computer Wins!</h1>)}
            <div>
                <button onClick={grabDeck} disabled={isNaN(betAmount)}>Deal</button>
            </div>
        </div>
    )
}

export default GameScreen