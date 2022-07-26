import {Link} from 'react-router-dom'

const Item = ({item}) => {

  return (
    <div className="card" style={{width: "20em", display:"block"}} key={item.id} >
         <img src={item.foto} className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{item.nombre}</h5>
           <p className="card-text">{item.descripcion}</p>
           <Link to={`/detalle/${item.id}`}>
              <button href="#" className="btn btn-primary">Ver detalle</button>
           </Link>
         </div>
       </div>
  )
}

export default Item