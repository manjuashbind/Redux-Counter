import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './REDUX/counterSlice'


function Counter() {
    //accessing state from reducer
    const count =useSelector((state)=>state.counter.count) //counter is the reducer counter is the count from counterSlice
  //dispatch action
  const dispatch= useDispatch()
    return (
    <div>
      <Container>
        <Row  className='px-2 ' >
          <Col className='col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 col-xxl-6 text-center mx-auto bg-info-subtle py-5 mt-5 rounded'>
           <h1>Counter App</h1>
           <h3 className='text-center display-2 fw-bold py-3 '>{count}</h3>
           <button className='btn btn-success me-2' onClick={()=>dispatch(increment())}>Increment</button>
           <button className='btn btn-danger me-2'  onClick={()=>dispatch(decrement())}>Decrement</button>
           <button className='btn btn-primary me-2'  onClick={()=>dispatch(reset())}>Reset</button>
          </Col>
        </Row>
      </Container>
       
    </div>
  )
}

export default Counter