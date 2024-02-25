import Note from "./Note";
import './Result.css'

function Result(){
    return(
        <div className="fileResult" >
        <h2 fileTitle>Your Result</h2>
     <Note/>
     <h1>Great</h1>
     <p className="comment">You scored higher than 65% of the people who have taken these tests</p>
</div>

        )
} 
export default Result