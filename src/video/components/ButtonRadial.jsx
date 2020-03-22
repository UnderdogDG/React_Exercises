import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoIosMoon, IoMdBulb } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.div`
  background-color: #212121;
  border-radius: 16px;
  width: 100%;
  height: 16px;
  position: relative;

  ::after{
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #00e5ff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

`;

const ButtonRadial = ()=>{
  let ref = useRef(false);
  const [ spring, setSpring ] = useSpring(()=>({left: ref ? '0%' : '100%'}));

  const changeHandler = ()=>{
    ref.current = !ref.current;
    setSpring(()=>({left: ref ? '0%' : '100%'}));
  }
  return(
    <>
      <div className="col-3 p-0 d-flex align-items-center justify-content-center">
        <IoIosMoon />
      </div>
      <div className="col-6 p-0 d-flex align-items-center justify-content-center">
        
          <Button onClick={changeHandler}>
            <animated.div
              style={spring}
            />
          </Button>
        
      </div>
      <div className="col-3 p-0 d-flex align-items-center justify-content-center">
        <IoMdBulb />
      </div>
      
    </>
  )
};

export default ButtonRadial;