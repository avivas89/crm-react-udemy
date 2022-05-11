import {useState, useEffect} from 'react'
import Customer from '../components/Customer'

const Home = () => {

  const [customer, setCustomer] = useState([])

  useEffect(() => {
    const getAPICustomer = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const res = await fetch(url)
        const resultado = await res.json()
        setCustomer(resultado)
        
      } catch (error) {
        console.log(error)
      }
    }

    getAPICustomer()
  }, [])
  
  const handleRemove = async id => {
    const confirmar = confirm('Seguro que deseas eliminar cliente?')

    if(confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const res = await fetch(url, {
          method: 'DELETE'
        })
        await res.json()

        const updateCustomers = customer.filter(customer => customer.id !== id)
        setCustomer(updateCustomers)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <h2 className='text-4xl font-black text-gray-700 mb-3'>Clientes</h2>
      <p>Administra tus clientes</p>
      <div className="w-full mt-5 shadow bg-white">
        <div className='grid grid-cols-4 gap-4 px-2 bg-gray-700 text-white'>
          <div className='p-2'>Nombre</div>
          <div className='p-2'>Contacto</div>
          <div className='p-2'>Empresas</div>
          <div className='p-2'>Acciones</div>
        </div>
        <div className='bg-gray-100 text-gray-700 px-2'>
          {
            customer.map(c => (
              <Customer 
                key= {c.id}
                customer = {c}
                handleRemove = {handleRemove}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home
