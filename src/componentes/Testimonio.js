 
import '../stylesheets/Testimonio.css';
function Testimonio(props) { 
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../img/testimonio${props.img}.jpg`)} alt={`imagen de ${props.alt}`} />
     <div className='contenedor-texto'>
      <p className='nombre-testimionio'> <
      strong>{props.nombre} </strong> en {props.pais}</p>
      <p className='cargo-testimonio'> 
      {props.cargo} </p>
      <p className='texto-testimonio'>"{props.testimonio}"</p>
       </div>
    </div>
  );
}
export default Testimonio;

