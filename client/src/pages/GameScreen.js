function GameScreen() {

    // SHUFFLE NEW DECK OR DECKS
    // WE WILL HAVE TO GET DECK ID FROM THIS FETCH 
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => console.log(data))

    // DRAW FROM NEW DECK
    // PLUG IN DECK ID FROM FIRST FETCH
    // YOU CAN ALSO DRAW FROM 'new' DECK
    // YOU CAN SPECIFY HOW MANY CARDS WITH THE COUNT=X QUERY
    fetch(`https://www.deckofcardsapi.com/api/deck/ae6c8099xfbp/draw/?count=10`)
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <h1>GameScreen</h1>
    )
}

export default GameScreen