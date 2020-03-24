import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoIosMoon, IoMdBulb } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.div`
  background-color: #4f4f4f;
  border-radius: 8px;
  box-shadow: -3px 4px 1px 0px #0c0c0c83 inset;
  width: 48px;
  height: 16px;
  position: relative;

  .dial{
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #00e5ff;
    border-radius: 10px;
    background-color: #00e5ff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    box-shadow: -1px 1px 4px 0px #5454548c inset;

    &:hover{
      background-color: #18ffff;
    }

    &::after{
      display: block;
      border-radius: 50%;
      content: '';
      width: 8px;
      height: 10px;
      background-color: #ffffff9d;
      position: absolute;
      top: 1px;
      right: 2px;
      transform: rotate(-30deg);
      box-shadow: -2px 0px 4px 0px #ffffffa8;
    }

    &::before{
      display: block;
      content: '';
      width: 22px;
      height: 22px;
      position: absolute;
      top: -3px;
      left: -3px;
      border-radius: 10px;
      box-shadow: 3px 3px 10px 0px #0000007e;
    }
  }

`;

const ButtonRadial = ({ changeTheme })=>{
  let ref = useRef(true);
  const [ spring, setSpring ] = useSpring(()=>({x: (ref.current ? 0 : 1)}));

  const changeHandler = ()=>{
    ref.current = !ref.current;
    changeTheme();
    setSpring(()=>({x: (ref.current ? 0 : 1)}));
  }
  return(
    <>
      <animated.div 
        className="p-0 d-flex align-items-center justify-content-center mr-2" 
        style={{
          color: spring.x.interpolate({
            range: [0,1],
            output: ['#9e9e9e', '#616161']
          }),
        }}
      >
        <IoIosMoon />
      </animated.div>
      <div className=" p-0 d-flex align-items-center justify-content-center">
        <Button onClick={changeHandler}>
          <animated.div
            className="dial"
            style={{
              left: spring.x.interpolate({
                range: [0,1],
                output: [0, 32]
              }).interpolate(x=>x+'px'),
            }}
          />
        </Button>
      </div>
      <animated.div 
        className="p-0 d-flex align-items-center justify-content-center ml-2" 
        style={{
          color: spring.x.interpolate({
            range: [0,1],
            output: ['#616161','#9e9e9e']
          }),
        }}
      >
        <IoMdBulb />
      </animated.div>
      
      
    </>
  )
};

export default ButtonRadial;