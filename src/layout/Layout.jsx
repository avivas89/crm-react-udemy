import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation()
  const curretUrl = location.pathname

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-gray-700 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link 
            to="/" 
            className={`${curretUrl === '/clientes' ? 'text-gray-300' : 'text-white'} text-white block text-2xl hover:text-gray-300 mb-2`}>
              Clientes
            </Link>
          <Link 
            to="/nuevo" 
            className={`${curretUrl === '/clientes/nuevo' ? 'text-gray-300' : 'text-white'} text-white block text-2xl hover:text-gray-300 mb-2`}>
              Nuevo Cliente
            </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
        <Outlet/>
      </div>     
    </div>
  )
}

export default Layout
