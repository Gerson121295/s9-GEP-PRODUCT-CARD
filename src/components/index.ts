
//archivo index.ts de la carpeta components permite exportar todos los archivos de esa carpeta

//export { ProductCard } from "./ProductCard";

import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


//Config para que en ShoppingPage se pueda agregar a ProducCard de esta forma <ProductCard.Image /> 
//para esta conf es necesario los import 

//en javascript todos los datos excepto por los primitivos son objetos
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})


export default ProductCard;
