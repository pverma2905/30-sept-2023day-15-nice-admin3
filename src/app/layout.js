
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../public/assets/vendor/boxicons/css/boxicons.min.css'
import '../../public/assets/vendor/quill/quill.snow.css'
import '../../public/assets/vendor/quill/quill.bubble.css'
import '../../public/assets/vendor/remixicon/remixicon.css'
import '../../public/assets/vendor/simple-datatables/style.css'
import '../../public/assets/css/style.css'

import './globals.css'
import { Open_Sans, Nunito, Poppins } from 'next/font/google'


const opensans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Dashboard - NiceAdmin Bootstrap Template',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${opensans.className} ${nunito.className} ${poppins.className}`}>
        {children}

      </body>
    </html>
  )
}
