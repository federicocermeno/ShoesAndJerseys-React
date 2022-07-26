let productos = [
  {id:"1",categoria: 'shoes',nombre:"Nike jordan 1 Low", precio:"5000", descripcion:"Jordan 1", stock: "10", foto:"https://images.pexels.com/photos/9565802/pexels-photo-9565802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"2",categoria: 'remeras',nombre:"Pacman T-Shirt",precio:"2000", descripcion:"Pacman T-Shirt", stock: "12", foto:"https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"3",categoria: 'shoes',nombre:"Nike jordan 2 Mid",precio:"4000", descripcion:"Jordan 2", stock: "22", foto:"https://images.pexels.com/photos/6540939/pexels-photo-6540939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"4",categoria: 'remeras',nombre:"NPFS T-Shirt",precio:"1000", descripcion:"NPFS T-Shirt", stock: "5", foto:"https://images.pexels.com/photos/5432532/pexels-photo-5432532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"5",categoria: 'shoes',nombre:"Nike Air Max 90",precio:"7000", descripcion:"Air Max 90", stock: "12", foto:"https://images.pexels.com/photos/6540953/pexels-photo-6540953.jpeg?cs=srgb&dl=pexels-ox-street-6540953.jpg&fm=jpg"},
  {id:"6",categoria: 'remeras',nombre:"USA T-Shirt",precio:"4000", descripcion:"Jordan 4", stock: "19", foto:"https://images.pexels.com/photos/11345874/pexels-photo-11345874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"7",categoria: 'shoes',nombre:"Nike Jordan 4 Orange",precio:"4000", descripcion:"Jordan 4 Orange", stock: "19", foto:"https://images.pexels.com/photos/6540963/pexels-photo-6540963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:"8",categoria: 'remeras',nombre:"Yellow T-Shirt",precio:"4000", descripcion:"Jordan 4", stock: "19", foto:"https://images.pexels.com/photos/9499141/pexels-photo-9499141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
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