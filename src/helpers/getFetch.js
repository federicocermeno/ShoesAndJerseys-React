let productos = [
  {id:"1",categoria: 'zapatillas',nombre:"Nike jordan 1 Low", precio:"5000", descripcion:"Jordan 1", stock: "10", foto:"https://images.pexels.com/photos/9565802/pexels-photo-9565802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"2",categoria: 'zapatillas',nombre:"Nike jordan 2 Mid",precio:"4000", descripcion:"Jordan 2", stock: "22", foto:"https://images.pexels.com/photos/6540939/pexels-photo-6540939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"3",categoria: 'zapatillas',nombre:"Nike Air Max 90",precio:"7000", descripcion:"Air Max 90", stock: "12", foto:"https://images.pexels.com/photos/6050921/pexels-photo-6050921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"4",categoria: 'zapatillas',nombre:"Nike jordan 4",precio:"2000", descripcion:"Jordan 4", stock: "50", foto:"https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"5",categoria: 'remeras',nombre:"Nike jordan 4",precio:"1000", descripcion:"Jordan 4", stock: "50", foto:"https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"6",categoria: 'zapatillas',nombre:"Nike jordan 4",precio:"4000", descripcion:"Jordan 4", stock: "50", foto:"https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
]

 export const getFetch = (id) => {

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(id) {
          resolve(productos.find(producto => producto.id == id))
        } else {
          resolve(productos)
        }
      }, 1000);
    })
  }