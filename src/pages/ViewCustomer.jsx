import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Spinner from '../helpers/Spinner'

const ViewCustomer = () => {

   const [customer, setCustomer] = useState([])
   const [loading, setLoading] = useState(true)

   const {id} = useParams()

   useEffect(() => {
      
      const getCustomerAPI = async () => {
         try {
            const url = `${import.meta.env.VITE_API_URL}/${id}`
            const res = await fetch(url)
            const resultado = await res.json()

            setCustomer(resultado)
         } catch (error) {
            console.log(error)
         }
         setLoading(!loading)
      }
      getCustomerAPI()
   }, [])

  
   return (
      loading ? <Spinner/> : (
         Object.keys(customer).length === 0 ? 
            <p className='text-4xl font-black text-gray-700 text-center'>No hay resultados</p> 
            : (
               <>
                  <h2 className='text-4xl font-black text-gray-700 mb-3'>Infomación del Cliente</h2>
                  {loading ? <Spinner/> : (
                  <div className='bg-white shadow rounded-md mt-5 py-7 px-5'>
                     <p className='mb-2'><b>Nombre: </b> {customer.customerName}</p>
                     {customer.companyName && (
                        <p className='mb-2'><b>Empresa: </b> {customer.companyName}</p>
                     )} 
                     {customer.phone && (
                        <p className='mb-2'><b>Teléfono: </b> {customer.phone}</p>
                     )} 
                     <p className='mb-2'><b>Email: </b> {customer.email}</p>
                     {customer.customerNotes && (
                        <p className='mb-2'><b>Notas: </b> {customer.customerNotes}</p>
                     )}            
                  </div>   
                  )}      
               </>
               )  
      )
   )
}

export default ViewCustomer