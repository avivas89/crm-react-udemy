import FormCustomer from '../components/FormCustomer'

const NewClient = () => {
  return (
    <>
      <h2 className='text-4xl font-black text-gray-700 mb-3'>Nuevo Cliente</h2>
      <p>Llena los siguientes campos para registrar un nuevo cliente</p>
      <FormCustomer/>
    </>
  )
}

export default NewClient
