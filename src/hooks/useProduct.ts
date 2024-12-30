
import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


//interface con datos que recibe el hook useProduct
interface useProductArgs {
    product : Product;
    onChange?: ( args: onChangeArgs) => void;
    value?: number; 
    initialValues?: InitialValues;
}


export const useProduct = ( {onChange, product, value=0, initialValues}: useProductArgs) => { //recibe una funcion que puede venir o no y que no recibe nada y no retorna nada //desestructura el objeto que recibe el hook y son de tipo useProductArgs

    const [counter, setCounter] = useState<number>( initialValues?.count || value ); //useState es de tipo number y se inicializa si viene valores de initialValues si no viene entonces se inicializa con value

    //useRef es un hook que permite mantener una referencia mutable que no se renderiza en el componente   
    const isMounted = useRef(false);  //useRef crea un objeto que sobrevive a las renderizaciones o refresh del mismo hook o component y se inicializa en false

    console.log(initialValues?.count);

    const increaseBy = (value:number) => {

        //toma el valor anterior y no puede regresar un numero menor a 0
        //setCounter(prev => Math.max( prev + value, 0))

        let newValue = Math.max( counter + value, 0)

        if(initialValues?.maxCount){ //si initialValues existe y el maxCount tiene un valor
            newValue = Math.min(newValue, initialValues.maxCount); //newValue toma el valor minimo entre newValue y maxCount
        }

        setCounter(newValue); //cambia el valor del contador


        //cuando el  contador cambia se ejecuta la funcion onChange
        onChange?.({count: newValue, product}); //onChange && onChange(); /if(onChange){ onChange(); } //si onChange es verdadero se ejecuta la funcion onChange
         

    }

    const reset = () => {
        setCounter(initialValues?.count || value ); //resetea el contador con valor de initialValues si existe, si no existe entoces con value
    }

    useEffect(() => {
        if( !isMounted.current ) return; //si no esta montado no hace nada
            //console.log('Componente montado')
            setCounter(initialValues?.count || value); //setCounter(value); //cuando cambie el value setCounter cambia el valor del contador
        }, [initialValues, value]); //}, [value]) //se ejecuta el codigo dentro del useEffect cuando value cambia
    
    useEffect(() => {
        isMounted.current = true; //cuando el componente se monta se cambia el valor de isMounted a true
    }, []) //se ejecuta una sola vez cuando el componente se monta

    //lo que retorna el hook
  return {
    counter, 
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, //si initialValues?.count existe entonces && evalua si initialValues.maxCount es igual a counter, si es regresa true
    maxCount: initialValues?.maxCount || value, //maxCount toma el valor de initialValues.maxCount si existe, si no existe toma el valor de value
    
    increaseBy,
    reset,
}
}


