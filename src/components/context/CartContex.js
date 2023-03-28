import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState (init)

    //console.log(cart)
    
    const addToCart = ( item ) => {
      console.log(item)

        if (item.cajas >= item.counter) {
        setCart ([...cart, item])
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            
          })
          } else {
            Swal.fire({
              toast: true,
              icon: 'error',
              title: 'No hay stock'
        })
      }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    } 
    const itemQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.counter, 0)

    }
    
    const tBuy = () => {
        return cart.reduce((acc, prod) => acc + prod.counter * prod.kg * prod.precio, 0)
    
        }
    
    const tKg = () => {
        return cart.reduce((acc, prod) => acc + prod.counter * prod.kg, 0)
    
        }
    
    const emptyCart = () => {

        setCart ([])
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'Carrito vaciado'
        })
     
    }

    const purchaseDone = () => {
       
        setCart ([])
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Gracias por su preferencia!'
        })

        

    }

    const removeItemFromCart = (id) => {

        setCart ( cart.filter((prod) => prod.id !== id))

      
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          }) 
          
          Toast.fire({
            icon: 'warning',
            title: 'Producto quitado del carrito',
            text: "Tu compra ahora $ " +
                   tBuy(),

          })

    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            itemQuantity,
            tBuy,
            tKg,
            emptyCart,
            removeItemFromCart,
            purchaseDone
          }}>
            {children}

        </CartContext.Provider>
    )
}