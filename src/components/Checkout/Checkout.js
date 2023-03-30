import { useContext, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { CartContext } from "../context/CartContex"
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import Swal from 'sweetalert2'


const Checkout = () => {


    const navigate = useNavigate()

    const { cart, tBuy, emptyCart } = useContext (CartContext)

    const [orderId, setOrderId] = useState(null)
    
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
        telefono: ''

    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre.length < 3) {
            Swal.fire("Nombre inválido")
            return
        
        }
        if(values.direccion.length < 3) {
            Swal.fire("Dirección inválida")
            return
        }
        if(values.email.length < 5) {
            Swal.fire("Email inválido")
            return
        }
        if(values.telefono.length < 5) {
            Swal.fire("Debe incluir un numero válido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({
                id: prod.id,
                nombre: prod.producto,
                cliente: prod.cliente,
                kgCaja: prod.kg,
                precio: prod.precio,
                cantidad: prod.counter
             })),
            total: tBuy(),
            fecha: new Date()
        }

        //console.log("Submit", orden)
      
        const productosRef = collection(db, 'productos')

        cart.forEach((item) => {

            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {

                    if (doc.data().cajas >= item.counter) {
                        updateDoc(docRef, {
                            cajas: doc.data().cajas - item.counter
                    })
                    } else {
                        Swal.fire({
                            text: 'No hay stock de ' + item.producto})
                            navigate(-1)
                    }
                })
         
        });

        const ordersRef = collection(db, 'Ordenes de compras')
       

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                console.log(orden)
                
                
            })
    }

    const showTicket = () => {
        console.log()
        let timerInterval
        Swal.fire({
            title: 'Generando ticket',
            html: 'Faltan <b></b> millisegundos.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
                }
            }).then((result) => {
                
                Swal.fire({
                    icon: 'success', 
                    title: '<b>Ticket creado correctamente<b/>',
                    text: 'Ref: ' + orderId,
                    footer: '<b>Gracias!</b>',
                    toast: true,
                    padding: '10px',
                    width: '390px',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Imprimir`,
                    
                    cancelButtonText: 'Volver'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(`/ItemListContainer`)
                            emptyCart()

                        } else if (result.isDenied) {
                            
                           
                                navigate(`/Ticket/${orderId}`)
                        
                        } 
                    })
            })
            
            
            }
        

    if (orderId)  {
        console.log(orderId)

        return (
            showTicket()

        )
    }        

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
   
    return (
        <div>
            <div className=" h-30 max-sm:mt-[20px] my-[50px] items-center bg-slate-50 mx-auto max-sm:w-[330px] rounded-lg max-w-[900px] shadow-lg">
            <h2 className="text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Checkout</h2>
            </div>
            <br/>

            <div className="grid mx-auto max-w-[900px] place-items-center">
                <div className="my-[20px] mx-0 sm:w-[600px] max-h-fit bg-white p-2 rounded-lg overflow-hidden shadow-lg flex">
                    <form className="" onSubmit={handleSubmit}>
                        <input 
                        onChange={handleInputChange}
                        value={values.nombre}
                        type={'text'}
                        placeholder={" Nombre Cliente o Empresa"}
                        className="block text-white bg-gray-700 rounded-md max-sm:w-[230px] w-[300px] m-5"
                        name="nombre"
                        />
                
                        <input 
                        onChange={handleInputChange}
                        value={values.direccion}
                        type={'text'}
                        placeholder={" Direccion"}
                        className="block bg-gray-700 text-white rounded-md max-sm:w-[230px] w-[300px] m-5"
                        name="direccion"
                        />
                        <div className="flex sm:ml-5 max-sm:justify-center">
                            <span className="items-center px-3 max-sm:px-1 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                                @
                            </span>
                            <input 
                                onChange={handleInputChange}
                                value={values.email}
                                type={'email'}
                                placeholder={" e-mail.com"}
                                className="bg-gray-700 text-white rounded-l-none rounded-r-md max-sm:w-[210px] w-[260px] rounded"
                                name="email"
                                />    
                        </div>

                        <input 
                        onChange={handleInputChange}
                        value={values.telefono}
                        type={'number'}
                        placeholder={" Telefono de contacto"}
                        className="block bg-gray-700 text-white rounded-md max-sm:w-[230px] w-[300px] m-5"
                        name="telefono"
                        />    

                        <button type="submit" className="bg-green-600 py-[2px] px-[5px] max-sm:mb-2 mt-4 mx-[10px] rounded-md text-gray-100 hover:bg-green-500 hover:text-white ease-in-out duration-300">Continuar</button>
                    </form>

                    <div className="w-[220px] backgroundimg m-auto max-sm:hidden">
                          <img src="./imgs/bg.jpg" className="h-fit max-h-[250px] max-w-full"/>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Checkout