import { Product } from "../interfaces/interfaces"

const product1 ={ 
  id: '1',
  title: 'Coffe Mug - Card',
  img: "./coffee-mug.png"
}

const product2 ={ 
  id: '2',
  title: 'Coffe Mug - Meme',
  img: "./coffee-mug2.png"
}

//products es un array de productos y se asigna los productos creados
export const products: Product[] = [product1, product2]
