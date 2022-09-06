function UserBet(props) {
    // const [user_bet, setUserBet] = useState('');
    // const [addBet, { loading, error, data }] = useMutation(ADD_BET, {
    //     variables: { winner: props.winner, user_bet: parseInt(user_bet) }
    // })

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const response = await addBet()

    //     storeToken(response.data.addBet.token)
    //     props.setUser(response.data.addBet.user)
    //     setUserBet('')
    // }
    //<button onClick={handleSubmit}>Place Bet!</button>

    const currentBet = isNaN(props.betAmount) ? 'Select a bet amount!' : props.betAmount;
    return (
        <form>
            <h1>Place Bet</h1>
            {props.user && <p>Bank: {props.user.bank}</p>}


            <div>
                <input value={props.betAmount} type="number" onChange={e => {
                    let intVal = parseInt(e.target.value);
                    //if (isNaN(intVal)) intVal = 0
                    props.setBetCb(intVal)
                }
                } name="bet" className="bet-input"></input>
                <p>Current Bet: {currentBet}</p>
            </div>
        </form>
    )
}

export default UserBet