import ApolloGraphqlProvider from '@/apollo/provider'
import './globals.css'
import Navbar from '@/components/Navbar'
import { AppProvider } from '@/contexts/AppContext'
import { Toaster } from 'react-hot-toast'
import ReduxProvider from '@/store/provider'

export const metadata = {
  title: 'Fyuzion',
  description: 'Fyuzion Social Media App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className='w-screen h-screen flex flex-col'>
        <AppProvider>
          <ApolloGraphqlProvider>
            <ReduxProvider>
              <Navbar />
              {children}
              <Toaster />
            </ReduxProvider>
          </ApolloGraphqlProvider>
        </AppProvider>
      </body>
    </html>
  )
}