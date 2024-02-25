import './Caracter.css'


function Caracter({name, value,image,bgColor,color}){
return(
    <div className='caracterBlock'  style={{backgroundColor:bgColor}}>
        <div className='icon'>
        <img className='symbol' src={image} alt='img'/>
    <p className='caracter' style={{color:color}} >{name}</p>
    </div>
    <div className='rate'>
    <p className='note'>{value}</p>
    <p className='echel'>/100</p>
    </div>
    </div>
)



}
export default Caracter