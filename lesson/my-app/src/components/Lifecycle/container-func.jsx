import React, { useEffect } from 'react';

const Lifecycle = () => {
  useEffect(() => {
    console.log('componentDidMount');
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate');
  })

  useEffect(() => {
    return () => {
      console.log('componentDidUpdate');
    }
  })

  return (
    <div>Lifecycle</div>
  )
}

export default Lifecycle;
