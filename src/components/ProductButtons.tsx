
import React, { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export interface Props{
    className? :string; //forma 1 de agregar style mediante className
    style?:  React.CSSProperties; //forma 2 de agregar style mediante style. para saber que style es tipo React.CSSProperties | undefined en un div se agrega la etiqueta style y luego se pasa el cursos y aparece el tipo de dato
}

export const ProductButtons = ( {className, style} :Props ) => {    //  ({counter, increaseBy}: ProductButtonsProps) => {

    //useContext para extraer datos: counter, increaseBy evitando asi recibirlo por argumento
    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    //useCallback para memorizar una funcion y no se vuelva a renderizar
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount, //si maxCount existe (!!maxCount) entonces evalua si counter es igual a maxCount, si es regresa true
      [counter, maxCount], //memoria la funcion cuando counter y maxCount cambian
    )
    
    return(
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style} //se agrega el style proveniente de la prop style definido en el padre ShoppingPage.tsx
        >
        <button 
            className={styles.buttonMinus}
            onClick={ () => increaseBy( -1 )}
        > - </button>

        <div className={styles.countLabel}> {counter} </div>

        <button 
            className={ `${ styles.buttonAdd }  ${ isMaxReached() && styles.disabled}`} //si isMaxReached es true se agrega la clase disabled
            onClick={ () => increaseBy (+1)}
        > + </button>
    </div>
    )
}

