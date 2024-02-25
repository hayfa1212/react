import Caracter from "./Caracter.jsx";
import './Summary.css'
import chat from '../Assets/rocketchat.svg'
import brain from '../Assets/brain-solid.svg'
import eye from '../Assets/eye-regular.svg'
import symbol from '../Assets/symbol.svg'
import Button from "./button.jsx";

function Summary(){
    return(
        <div className="sumary">
        <h1>Summary</h1>
        <Caracter
      image={symbol}
      name={'Reaction'}
      color={'rgb(201, 47, 72)'}
      value={'80'}
      bgColor={"rgba(253, 195, 205,0.7)"} />
        <Caracter
      image={brain}
      name={'Memory'}
      color={'rgb(245, 245, 10)'}
      value={'80'}
      bgColor={"rgba(228, 228, 128,0.4)"} />
        <Caracter
      image={chat}
      name={'Verbal'}
      color={'rgb(26, 167, 84)'}
      value={'80'}
      bgColor={"rgba(114, 209, 114,0.4)"} />
        <Caracter
      image={eye}
      name={'Visual'}
      color={'rgb(110, 27, 121)'}
      value={'80'}
      bgColor={"rgba(204, 146, 204,0.4)"} />
      <Button/>
      </div>
    )
}
export default Summary