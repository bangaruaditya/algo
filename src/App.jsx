import Navbar from './components/Navbar'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import Courses from './pages/Courses';
import Contact from './pages/Contact.jsx';
const App= () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='Jobs' element={<Jobs/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App