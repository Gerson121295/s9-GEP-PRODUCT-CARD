import React, { useContext } from "react";
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'

export interface Props{
    className?: string,
    title?: string,
    activeClass?: string; //ejemplo de que aqui se puede agregar mas elementos ya que esta interfaz es definida en interfaces.ts
    style?:  React.CSSProperties; //forma 2 de agregar style mediante style. para saber que style es tipo React.CSSProperties | undefined en un div se agrega la etiqueta style y luego se pasa el cursos y aparece el tipo de dato
}


export const ProductTitle = ({title, className, style} :Props) => {        //({title}: {title?:string}) => {  //cuando es de 2 o mas ya se crea una interface

    const {product} = useContext(ProductContext);

    return(
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style} //se agrega el style proveniente de la prop style definido en el padre ShoppingPage.tsx
        > 
            { 
                title ? title : product.title //si title viene por props del padre lo usa sino utiliza el titulo del product.title
            } 
        </span>
    );
}