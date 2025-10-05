import {useState} from "react";


export default function ludoboard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, SetArr] = useState(["no moves"]);
    let [count, setCount] = useState(0);

    let updateBlue = () => {
        setMoves((prevMoves) =>{
            return {...prevMoves, blue: prevMoves.blue + 1};
        });

        arr.push("blue");
        SetArr(arr);
        console.log(arr);
    };

     let updateRed = () => {
        setMoves((prevMoves) =>{
            return {...prevMoves, red: prevMoves.red + 1};
        });
    };

     let updateYellow = () => {
        setMoves((prevMoves) =>{
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
    };

     let updateGreen = () => {
        setMoves((prevMoves) =>{
            return {...prevMoves, green: prevMoves.green + 1};
        });
    };

    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p> Blue moves = {moves.blue}</p>
                <button style={{background: "blue", color: "black"}} onClick={updateBlue}>+1</button>
                <p> Yellow moves = {moves.yellow}</p>
                <button style={{background: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p> Red moves = {moves.red}</p>
                <button style={{background: "red", color: "black"}} onClick={updateRed}>+1</button>
                <p> Green moves = {moves.green}</p>
                <button style={{background: "green", color: "black"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}