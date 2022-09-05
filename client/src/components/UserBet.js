import { useEffect, useState } from "react"
import { useMutation, gql } from '@apollo/client'
import { storeToken } from '../utils/auth'

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
    }
    `

function UserBet(props) {
    const [user_bet, setUserBet] = useState('');
    const [addBet, { loading, error, data }] = useMutation(ADD_BET, {
        variables: { winner: props.winner, user_bet: parseInt(user_bet) }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await addBet()

        storeToken(response.data.addBet.token)
        props.setUser(response.data.addBet.user)
        setUserBet('')
    }

    return (
        <form>
            <h1>Place Bet</h1>
            {props.user && <p>Bank: {props.user.bank}</p>}


            <div>
                <input value={user_bet} onChange={e => setUserBet(e.target.value)} name="bet" className="bet-input" type="text"></input>
                <button onClick={handleSubmit}>Place Bet!</button>
                <p>Current Bet: how much they bet</p>
            </div>
        </form>
    )
}

export default UserBet