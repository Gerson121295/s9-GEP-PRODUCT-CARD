
import React from 'react';
import { ProductTitle } from '../../src/components/ProductTitle';
import { render } from '@testing-library/react';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
 
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {

    //se desestructura de render el container
    const { asFragment } = render(
    <ProductTitle title="Custom Product" className='custom-class'/>
    );
    expect(asFragment()).toMatchSnapshot();  
  });
 

  test('Debe de mostrar el componente con el nombre del producto', () => {

    const { asFragment } = render(
      <ProductCard product={ product1 }>
          {
              () => (
                  <ProductTitle />
              )
          }
      </ProductCard>
  );

  expect(asFragment()).toMatchSnapshot();    

 });

});