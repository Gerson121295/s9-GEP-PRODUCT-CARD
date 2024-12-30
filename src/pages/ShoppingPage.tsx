import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/product";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />

          <ProductCard 
            key={product.id}
            product={product} 
            initialValues={{
              count: 4,
              maxCount: 10, //el maxCount es opcional si se definde que el user solo podrá llevar una cantidad maxima especifica de un producto (10 articulos)
            }}
         >
              
              {  //Retorna un JSX definido en ProductCard 
                ({ reset,  increaseBy, count, isMaxCountReached, maxCount} ) => ( //(args)
                  <>
                    <ProductImage />   
                    <ProductTitle />
                    <ProductButtons /> 

                  </>
                )
              }

          </ProductCard>

    </div>
  )
}
