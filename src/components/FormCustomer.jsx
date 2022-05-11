import { useNavigate } from 'react-router-dom'
import Message from './Message'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

import Spinner from '../helpers/Spinner'

const FormCustomer = ({customer, loading}) => {

   const navigate = useNavigate()

   const newShemaCustomer = Yup.object().shape({
      customerName: Yup.string()
                        .min(3, 'El nombre es muy corto')
                        .required('El nombre es obligatorio'),
      companyName: Yup.string()
                        .min(2, 'Nombre de empresa muy corto')
                        .required('El nombre de la empresa es obligatorio'),
      email: Yup.string().email('El mail no es valido')
                        .required('El email es obligatorio'),
      phone: Yup.number().positive()
                        .integer('El teléfono solo debe contener números')
                        .typeError('El teléfono solo debe contener números')
                        .min(8, 'El teléfono es muy corto'),
      customerNotes: Yup.string()
   })

   const handleSubmit = async (values) => {
      try {
         let res
         if(customer.id) {
            //editando registro
            const url = `${import.meta.env.VITE_API_URL}/${customer.id}`

            res = await fetch(url, {
               method: 'PUT',
               body: JSON.stringify(values),
               headers: {
                  'Content-Type': 'application/json'
               }
            })      
         } else {
            //Nuevo registro
            const url = import.meta.env.VITE_API_URL

            res = await fetch(url, {
               method: 'POST',
               body: JSON.stringify(values),
               headers: {
                  'Content-Type': 'application/json'
               }
            })  
         }
         const resultado = await res.json()             
         navigate('/')
      } catch (error) {
         console.log(error)
      }
   }
   return (
      loading ? <Spinner/> : (
         <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
               {customer.customerName ? 'Editar Cliente': 'Agregar Cliente' }
            </h1>
            <Formik
               initialValues={{
                  customerName: customer?.customerName ?? '',
                  companyName: customer?.companyName ?? '',
                  email: customer?.email ?? '',
                  phone: customer?.phone ?? '',
                  customerNotes: customer?.customerNotes ?? ''
               }}
               enableReinitialize={true} //Para habilitar que tome los valores para editar
               onSubmit={async (values, {resetForm}) => {
                  handleSubmit(values)
                  resetForm()
               }}
               validationSchema = {newShemaCustomer}
            >
               {({errors, touched}) => {
               return ( 
               <Form className='mt-10'>
                  <div className='relative z-0 w-full mb-8 group'>                  
                     <Field
                        type="text"
                        id="customerName"
                        name="customerName"
                        className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer ${errors.customerName && touched.customerName ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500' : 'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:border-gray-700'}`}
                        placeholder=" "
                     />
                     <label htmlFor="customerName" className='peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Nombre del cliente</label>
                     {errors.customerName && touched.customerName ? (
                        <Message>
                           {errors.customerName}
                        </Message>  
                     ) : null}
                  </div>
                  <div className='relative z-0 w-full mb-8 group'>                  
                     <Field
                        type="text"
                        id="companyName"
                        name="companyName"
                        className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer ${errors.companyName && touched.companyName ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500' : 'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:border-gray-700'}`}
                        placeholder=" "
                     />
                     <label htmlFor="companyName" className='peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Empresa</label>
                     {errors.companyName && touched.companyName ? (
                        <Message>
                           {errors.companyName}
                        </Message>  
                     ) : null}
                  </div>   
                  <div className='relative z-0 w-full mb-8 group'>                  
                     <Field
                        type="email"
                        id="email"
                        name="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-700 peer invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                        placeholder=" "
                     />
                     <label htmlFor="email" className='peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                     {errors.email && touched.email ? (
                        <Message>
                           {errors.email}
                        </Message>  
                     ) : null}
                  </div>  
                  <div className='relative z-0 w-full mb-8 group'>                  
                     <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer ${errors.phone && touched.phone ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500' : 'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:border-gray-700'}`}
                        placeholder=" "
                     />
                     <label htmlFor="phone" className='peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Teléfono</label>
                     {errors.phone && touched.phone ? (
                        <Message>
                           {errors.phone}
                        </Message>  
                     ) : null}
                  </div>  
                  <div className='relative z-0 w-full mb-8 group'>                  
                     <Field
                        as="textarea"
                        type="text"
                        id="customerNotes"
                        name="customerNotes"
                        className="block h-30 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                        placeholder=" "
                     />
                     <label htmlFor="notesCliente" className='peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Notas</label>
                     {errors.customerNotes && touched.customerNotes ? (
                        <Message>
                           {errors.customerNotes}
                        </Message>  
                     ) : null}
                  </div> 
                  <input type="submit" value={customer.customerName ? 'Guardar cambios': 'Agregar Cliente' } className='block w-full bg-gray-700 text-white font-medium uppercase p-3 hover:bg-gray-800'/>     
                  
               </Form>
               )}}
            </Formik>
         </div>
      )
   )
}


FormCustomer.defaultProps = {
   customer: {},
   loading: false
}
export default FormCustomer

