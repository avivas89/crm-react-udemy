import {useNavigate} from 'react-router-dom'
import {EyeIcon, PencilAltIcon, TrashIcon} from '@heroicons/react/solid'

const Customer = ({customer, handleRemove}) => {
   const {id, customerName, companyName, email, phone, customerNotes} = customer

   const navigate = useNavigate()

   return (
      <div className='grid grid-cols-4 gap-4 py-3'>
         <div>{customerName}</div>
         <div>
            <p><b>Email:</b> {email} </p>
            <p><b>Phone:</b> {phone}</p>
         </div>
         <div>{companyName}</div>
         <div className='flex items-center gap-2'>
            <button 
               type="button"
               onClick={() => navigate(`/${id}`)}
            >
               <EyeIcon className='tex-gray-700 h-5 w-5' />               
            </button>    
            <button 
               type="button"
               onClick={() => navigate(`/editar/${id}`)}
            >
               <PencilAltIcon className='text-green-700 h-5 w-5'/>              
            </button>     
            <button 
               type="button"
               onClick={() => handleRemove(id)}
            >
               <TrashIcon className='h-5 w-5 text-red-700'/>              
            </button> 
         </div>
      </div>
   )
}

export default Customer