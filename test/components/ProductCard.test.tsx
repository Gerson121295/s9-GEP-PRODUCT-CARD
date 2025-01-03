import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ProductCard  } from "../../src/components";
import { product1 } from "../data/products";


describe('ProductImage', () => {

    test('Debe mostrar el componente correctamente', () => {
        
        //se desestructura de render el container
        const { asFragment } = render(
        <ProductCard product={ product1 }>
            {
                () => (
                    <h1>Product Card</h1>
                )
            }
        </ProductCard>
        );
        expect(asFragment()).toMatchSnapshot();  
    });


  test('Debe de incrementar el contador', () => {
    const { asFragment, container } = render(
        <ProductCard product={ product1 }>
            {
                ({count, increaseBy}) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={ () => increaseBy(1)} ></button>
                    </>
                )
            }
        </ProductCard>
        );

        expect(asFragment()).toMatchSnapshot();
 
        const initialCount = container.querySelector('span');
        expect(initialCount?.textContent).toBe('0'); //asigna el span a 0
     
        console.log(container.innerHTML); //imprime el html del container span para ver el valor

        //fireEvent simula un click en el boton aumenta a 1
        fireEvent.click(container.querySelector('button')!);
     
        const updatedCount = container.querySelector('span');
        console.log(container.innerHTML);

        //valida que el span tenga el valor 1
        expect(updatedCount?.textContent).toBe('1'); 

    });

});