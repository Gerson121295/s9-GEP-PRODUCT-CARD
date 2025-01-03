import React from "react";
import { render } from "@testing-library/react";
import { ProductImage, ProductCard  } from "../../src/components";
import { product2 } from "../data/products";


describe('ProductImage', () => {

    test('Debe mostrar el componente correctamente con la img personalizada', () => {
        
        //se desestructura de render el container
        const { asFragment } = render(
        <ProductImage img="https://hola.png" className='custom-class'/>
        );
        expect(asFragment()).toMatchSnapshot();  
    });

    test('Debe mostrar el componente con la imagen del producto', () => {
        
        const { asFragment } = render(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ ProductCard >
        );
        expect(asFragment()).toMatchSnapshot(); 

    });

});