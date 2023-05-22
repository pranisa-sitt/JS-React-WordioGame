import "./StartGame.css"

const StartGame = ({ onClick }) => {
  return (
    <div className="startGame-container">
    <div className="startGame-card">
      <h3>Welcome to</h3>
      <h2>"WORDLE GAME"</h2>
      <ol>
      <p>How to PLAY</p>  
        <li>Guess what word which has 5 letters.</li>
        <li>Each attempt, pick 5 letters by clicking on keyboard, hit ENT to start a new row or DEL to edit it in current row.</li>
        <li>You can attempt uptill 6 times</li>
      </ol>
      <h3>Good luck!</h3>
      <button className="btn" onClick={onClick}>START</button>
    </div>
    </div>
  )
}

export default StartGame;