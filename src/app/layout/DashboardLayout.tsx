import React, { type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../shared/components/Header'
import Sidebar from '../../shared/components/Sidebar'
import ChatSection from '../../shared/components/ChatSection'
import useAuth from '../../shared/hooks/useAuth'

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { role } = useAuth();

  const navigate = useNavigate();
  return (
    <div className='w-full h-full overflow-x-hidden max-w-screen'>
      <Header />
      <div className="w-full h-[90vh] flex align-center">
        <Sidebar />
        <div className="w-[80vw] h-[90vh] flex justify-center items-center p-5">
          {children}
        </div>
        <div className="fixed right-8 bottom-8 z-500">
          {role === 'admin' ?
            <button
              onClick={() => navigate('/adminchat')}
              className="w-14 h-14 rounded-full shadow-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all"
              aria-label="Toggle Chat"
            >
              💬
            </button>
            : <ChatSection />}

        </div>
      </div>

    </div>
  )
}

export default DashboardLayout
