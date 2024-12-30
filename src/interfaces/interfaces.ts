import React from "react";
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductButtonsProps} from '../components/ProductButtons';


export interface Product {
    id: string;
    title: string;
    img?: string;
}

//Interface para context permite definir el tipo de dato de los datos que seran exportados 
export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

//interfaz ya no es necesario debido a que los datos de ProductButtons se recibieron mediante Context y por argumentos
/* export interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
} */ 

//Interface para /src/02-components/components/index.ts de com
export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    //Title: ( Props: { title?: string, className?: string}) => JSX.Element,
    //Image: (Props: { img?: string, classname?: string }) => JSX.Element,
    //Buttons: (Props: {className?: string }) => JSX.Element,

    //Forma de importar las interfqaces de los componentes para tener el tipo de dato
    Title: ( Props: ProductTitleProps) => JSX.Element, //utiliza Props de la interfaz definida en ProductTitle
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps ) => JSX.Element,
    
    //Image: ({ img }: { img?: string }) => JSX.Element,
    //Buttons: ({ className}: {className?: string }) => JSX.Element,
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

//la interface ProductInCart tendra todas las propiedades de Product y ademas la cantidad de productos
export interface ProductInCart extends Product {
    count: number
  }
  

  //interface para definir las propiedades iniciales
  export interface InitialValues {
    count?: number;
    maxCount?: number;
  }

  export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    
    increaseBy: (value: number) => void;
    reset: () => void;
  }
