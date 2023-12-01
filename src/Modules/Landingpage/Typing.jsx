import Typed from 'typed.js';
import React,{useEffect,useRef} from 'react'

const Typing = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['develop beautiful web apps', 'work with frontend in React.js', 'write backend in Node.js', 'work with firebase and mongodb','develop responsive apps with css frameworks'],
            typeSpeed: 30,
            backSpeed: 15,
            loop: true,
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return <span className='text-white' ref={typedRef}></span>;
}

export default Typing
