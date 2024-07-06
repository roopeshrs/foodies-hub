import React, {useRef, useEffect} from 'react'

const CheckOutsideClick = (props) => {
    const ref = useRef(null);
    const {onClickOutside, children} = props;

    if(!children){
        return null;
    }

    const handleClickOutside = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            onClickOutside && onClickOutside();
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

  return (
    <div ref={ref}>{children}</div>
  )
}

export default CheckOutsideClick