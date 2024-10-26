import { useEffect, useState } from "react"
import {Outlet} from "react-router-dom"
const JobsLayout = () => {

    const textToType = 'Joobeasy...!'
    const [typedText, setTypedText] = useState('');
    const typingSpeed = 100;
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < textToType.length) {
                setTypedText((prev) => prev + textToType.charAt(index)); // Append the next character
                index++;
            } else {
                clearInterval(typingInterval); // Clear the interval when done
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, []);

  return (
    <div className='flex flex-col'>
        <div className="ml-4">
            <p className="text-5xl">Find your Dream Job with {typedText}</p>
            <p>Hassle Free Job Search For The Freshers.</p>
        </div>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
