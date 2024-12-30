
import React, { useContext } from "react";
import { ProductContext } from "./ProductCard"; 
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    img?: string;
    style?:  React.CSSProperties; //forma 2 de agregar style mediante style. para saber que style es tipo React.CSSProperties | undefined en un div se agrega la etiqueta style y luego se pasa el cursos y aparece el tipo de dato
}


export const ProductImage = ({ img, className, style } :Props) => { //{ img = '' }  //{product}: Props  

    const {product} = useContext(ProductContext)

    let imgToShow: string;

    if (img){
        imgToShow = img; //si imagen es true o vine por props del padre entonces imgToShow es igual a img
    }else if (product.img){
        imgToShow = product.img; //si product.img es true o viene del context entonces imgToShow es = a product.img
    }else{ 
        imgToShow = noImage;  //en caso contrario de no venir la imagen imgToShow es = a noImage
    }

    return (
        <img 
            //className={styles.productImg}  //sin el className enviado desde el padre ShoppingPage
            className={`${styles.productImg} ${className}`}  //esta forma permite definir estilos desde ShoppingPage a ProductImage
            style={style} //se agrega el style proveniente de la prop style definido en el padre ShoppingPage.tsx
            src={ imgToShow } 
            alt="Product" 
        /> 
    )
}