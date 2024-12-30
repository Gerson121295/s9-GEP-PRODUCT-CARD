
## DO-Product-Card

## Gerson Ep

### Ejemplo

```jsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';

```

```jsx
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```