import { useEffect, useState } from "react"
import { useMutation, gql } from '@apollo/client'

const ADD_BET = gql`
    mutation addBet($user_bet: INT!) {
        addBet(user_bet: $user_bet){
            bank,
            user_bet
        }
    }
    `

function UserBank() {
    const [user_bet, setUserBet] = useState('');
    const [addBet, { loading, error, data }] = useMutation(ADD_BET, {
        variables: { user_bet }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        addBet()
        setUserBet('')
    }

    return (
        <form>
            <h1>Place Bet</h1>
            <p>Bank: show user amount</p>
            <div>
                <input value={user_bet} onChange={e => setUserBet(e.target.value)} name="bet" className="bet-input" type="text"></input>
                <button onClick={handleSubmit}>Place Bet!</button>
                <p>Current Bet: how much they bet</p>
            </div>
        </form>
    )
}

export default UserBank