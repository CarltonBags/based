import { Outlet} from 'react-router-dom'
import  Navbar  from '../components/nav/Navbar'
import Footer from '../components/Footer'


function AppLayout() {

  return (
    <div className="bg-slate-100">
      <div className="w-100">
        <Navbar />

      </div>
      <main 
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '100%',
          margin: '5px auto',
        }}
        className=" bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ADBCFE] via-[#EAEDFF] to-[#EAEDFF] flex items-center justify-center"
      >

        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default AppLayout