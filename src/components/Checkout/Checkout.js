import { useContext, useState } from "react"
import { Navigate, useNavigate} from "react-router-dom"
import { CartContext } from "../context/CartContex"
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import Swal from 'sweetalert2'
import { Formik } from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'El nombre es demasiado corto')
                .max(30, 'Maximo 30 caracteres'),
    direccion: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(4, 'El nombre es demasiado corto')
                    .max(30, 'Maximo 30 caracteres'),
    email: Yup.string()
                .required('Este campo es obligatorio')            
                .email('El email es invalido'),
    telefono: Yup.number()
                    .required('Este campo es obligatorio')
                    .min(9999999, 'El numero es incorrecto')
})  

const Checkout = () => {

    const navigate = useNavigate()
    const { cart, tBuy, tKg, itemQuantity, purchaseDone } = useContext (CartContext)
    const [ orderId, setOrderId ] = useState(null)
    

    const createOrder = async (values) => {
        
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({
                id: prod.id,
                nombre: prod.producto,
                destino: prod.destino,
                cliente: prod.cliente,
                kgCaja: prod.kg,
                precio: prod.precio,
                cantidad: prod.counter
             })),
            totalBuy: tBuy(),
            totalKg: tKg(),
            itemsQ: itemQuantity(),
            fecha: new Date().toLocaleDateString()
        }

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
            })
    }

    const showTicket = () => {
        let timerInterval
        Swal.fire({
            title: 'Generando ticket',
            html: 'Faltan <b></b> millisegundos.',
            timer: 2000,
            allowEscapeKey: false,
            allowEnterKey: false,
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
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(`/ItemListContainer`)
                            purchaseDone()

                        } else if (result.isDenied) {
                                navigate(`/Ticket/${orderId}`)
                                purchaseDone()
                        } 
                    })
                })
        }

    if (orderId)  {
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
                <div className="my-[20px] sm:grid-cols-2 mx-0 sm:w-[600px] max-h-fit bg-white p-2 rounded-lg overflow-hidden shadow-lg flex">

                    <Formik
                        initialValues={{
                            nombre: '',
                            direccion: '',
                            email: '',
                            telefono: ''
                            }}
                            validationSchema={schema}
                            onSubmit={createOrder}
                    >
                            {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
                                <form className="sm:col-start-1" onSubmit={handleSubmit}>
                                    <input 
                                        onChange={handleChange}
                                        value={values.nombre}
                                        type={'text'}
                                        placeholder={" Nombre Cliente o Empresa"}
                                        if 
                                        className={errors.nombre
                                             ? "block text-red-400 border-2 border-red-500 bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] mx-5 mt-5 mb-2 max-sm:placeholder:text-sm"
                                            
                                             : "block text-white bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] m-5"}
                                        name="nombre"
                                    />
                                    {errors.nombre && <p className="mt-2 ml-6 max-sm:text-xs text-sm text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.nombre}</span></p>}           
                                                       
                                    <input 
                                        onChange={handleChange}
                                        value={values.direccion}
                                        type={'text'}
                                        placeholder={" Direccion"}
                                        className={errors.direccion
                                            ? "block text-red-400 border-2 border-red-500 bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] mx-5 mt-4 mb-2 max-sm:placeholder:text-sm"
                                            : "block text-white bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] m-5"}
                                        name="direccion"
                                    />
                                    {errors.direccion && <p className="mt-2 ml-6 max-sm:text-xs text-sm text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.direccion}</span></p>}

                                    <div className="flex sm:ml-5 mt-4 max-sm:justify-center">
                                        <span className="items-center px-3 max-sm:px-1 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                                            @
                                        </span>
                                        <input 
                                            onChange={handleChange}
                                            value={values.email}
                                            type={'email'}
                                            placeholder={" e-mail.com"}
                                            className={errors.email
                                                ? "text-red-400 border-2 border-red-500 bg-gray-700 max-sm:pl-4 rounded-l-none rounded-r-md max-sm:w-[210px] w-[260px] rounded"
                                                
                                                : "bg-gray-700 text-white max-sm:pl-4 rounded-l-none rounded-r-md max-sm:w-[210px] w-[260px] rounded max-sm:placeholder:text-sm"}
                                            name="email"
                                            />    
                                    </div>
                                    {errors.email && <p className="mt-2 ml-6 max-sm:text-xs text-sm text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.email}</span></p>}
        
                                    <input 
                                        onChange={handleChange}
                                        value={values.telefono}
                                        type={'number'}
                                        inputMode={'numeric'}
                                        placeholder={" Telefono de contacto"}
                                        className={errors.telefono
                                            ? "block text-red-400 border-2 border-red-500 bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] mx-5 mt-4 mb-2 max-sm:placeholder:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                           
                                            : "block text-white bg-gray-700 pl-9 rounded-md max-sm:w-[230px] w-[300px] m-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}
                                        name="telefono"
                                    />    
                                    {errors.telefono && <p className="mt-2 ml-6 max-sm:text-xs text-sm text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.telefono}</span></p>}
                                    
                                    <div className="flex flex-col items-center justify-center">  
                                    <button type="submit" disabled={isSubmitting} className="bg-green-600 py-[2px] px-[5px] max-sm:mb-2 mt-5 mx-[10px] mb-2 rounded-md text-gray-100 hover:bg-green-500 hover:text-white ease-in-out duration-300">Continuar</button>
                                    </div>
                                </form>




                            )}
                    </Formik>
                    
                    <div className="relative w-[240px] flex flex-col justify-center items-center max-sm:hidden sm:col-start-2">
                          <img src="./imgs/bg.jpg" alt="fork" className="absolute bottom-0 max-h-[220px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout