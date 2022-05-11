import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import FormCustomer from '../components/FormCustomer'

import Spinner from '../helpers/Spinner'

const EditClient = () => {

  const [customer, setCustomer] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
     
     const getCustomerAPI = async () => {
        try {
           const url = `http://localhost:4000/clientes/${id}`
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
    <>
      <h2 className='text-4xl font-black text-gray-700 mb-3'>Editar Cliente</h2>
      <p>Podés modificar los siguientes campos para editar el registro del cliente</p>
      {
        loading ? <Spinner/> : (
          customer?.customerName ? 
            (
              <FormCustomer
                customer={customer}
                loading={loading}
              />
            ) : <p>Cliente no valido</p>
          )
      }      
    </>        
  )
}

export default EditClient
