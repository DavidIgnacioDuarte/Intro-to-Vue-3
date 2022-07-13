# EJERCICIO RESUELTO

Agregar botón para remover del carrito un producto, de forma que:

1. Sólo se encuentre _enabled_ si el producto en cuestión, fue agregado al carrito;
2. Descuente el contador del carrito por cada producto quitado;
3. El producto que se quitó debe "devolverse" a su stock;

## Mis pasos

El botón es agregado al lado del de ***Add to cart***:

```html
        <button 
          class="button" 
          :class="{ disabledButton: !inCart }" 
          :disabled="!inCart" 
          v-on:click="removeFromCart">
          Remove from Cart
        </button>
```

desactivándose cuando no se cumple:

```javascript
      inCart() {
          return this.variants[this.selectedVariant].inCart > 0;
      }
```

El método a ejecutar:

```javascript
      removeFromCart() {
          this.$emit('remove-from-cart', this.productName);
          this.variants[this.selectedVariant].quantity++;
          this.variants[this.selectedVariant].inCart--;
      }
```

emite el evento `'remove-from-cart` al root (donde está la app de Vue) pasándole como argumento el nombre del producto, en su importación como componente:

```html
<product-display :premium="premium" @add-to-cart="add_to_cart" @remove-from-cart="remove_from_cart"></product-display>
```

Así, nuestra app ejecutará:

```javascript
        remove_from_cart(productName) {
            var i = this.cartArray.indexOf(productName);
            this.cartArray.splice( i, 1 );
            this.cartCounter--;
        }
```

## Conclusión

Esta solución es poco óptima, puesto que no es correcto desde un punto de vista de diseño, que cada producto guarde el campo **inCart**. Este carrito puede ser manejado por un nuevo componente con una más fácil comunicación con nuestro `Product Display`.


