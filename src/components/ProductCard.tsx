
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import React, { createContext, JSX} from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';


//Context para compartir informacion en los componentes hijos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider} = ProductContext; //Provider es el proveedor del ProductContext


//Definicion de propiedades que recibe el componente ProductCard
export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[]; //viene un hijo o un arreglo de hijos
    children: ( args: ProductCardHandlers ) => JSX.Element, //children es una funcion que retorna un JSX.Element eb ShoppingPage
    className?: string;  //forma 1 de agregar style mediante className
    style?:  React.CSSProperties; //forma 2 de agregar style mediante style. para saber que style es tipo React.CSSProperties | undefined en un div se agrega la etiqueta style y luego se pasa el cursos y aparece el tipo de dato
    onChange?: (args: onChangeArgs) => void;  //se creo una interfaz con los args. otra forma es definirlo aqui: (product:Product, count :number) => void; //es una funcion que  recibe 2 parametros y no retorna nada
    value?: number; //cantidad del producto en el carrito de compras
    initialValues?: InitialValues; //initialValues definida en la interfaz InitialValues 
  }


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    //customHook useProduct
    const {counter, increaseBy, maxCount, isMaxCountReached, reset, 
    }  = useProduct({onChange, product, value, initialValues }); //se pasa el valor de onChange, product y value al hook useProduct
    
  return (

    <Provider value={{ //value es la informacion que el Provider comparte a los hijos de ProductCard
        counter,
        product, 
        maxCount,
        increaseBy, 
    }}> 
        <div 
          className={`${ styles.productCard } ${ className }`} //por className se pasa el style definido en el padre ShoppingPage.tsx
          style={style} //se agrega el style proveniente de la prop style definido en el padre ShoppingPage.tsx
        >
            
            {
              children({ //se ejecuta la funcion children que retorna un JSX.Element en ShoppingPage.tsx
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,

                increaseBy,
                reset: reset,
            })
          }

        </div>
    </Provider>
  )
}


