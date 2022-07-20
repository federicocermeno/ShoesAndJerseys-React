let productos = [
  {id:"1",nombre:"nike jordan 1",descripcion:"jordan 1", stock: "10", foto:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e9b9d43-0379-4b0f-8798-5ad5cccfbf13/air-jordan-1-mid-se-zapatillas-nmnWW6.png"},
  {id:"2",nombre:"nike jordan 2",descripcion:"jordan 2", stock: "22", foto:"https://cf.shopee.com.ar/file/4b1cf8622f485350797dc2a1486d25d7"},
  {id:"3",nombre:"nike jordan 3",descripcion:"jordan 3", stock: "12", foto:"https://cf.shopee.com.ar/file/4bf6e8cc55b9870052ff4068ff31ce89"},
  {id:"4",nombre:"nike jordan 4",descripcion:"jordan 4", stock: "50", foto:"https://essential.vtexassets.com/arquivos/ids/572716-500-auto?v=637915396967900000&width=500&height=auto&aspect=true"},
]


 export const getFetch = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
  
    })
  }