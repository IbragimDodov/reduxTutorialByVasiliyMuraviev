import { useSelector } from 'react-redux/es/hooks/useSelector'
import {Oval} from 'react-loader-spinner'


import React from 'react'

function Spin(props) {
  const spinner = useSelector(state => state.appReducer.loading);
  return (
    <div className='loader-styles'>
      <Oval
        type="TailSpin"
        color="#00bfff"
        width={100}
        visible={spinner}
      />
    </div>
  )
}

export default Spin