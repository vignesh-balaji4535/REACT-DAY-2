import { useState } from 'react'
import './App.css'
import Comp from './comp'

function App() {

 
  return (
    <>
     <div className="container-fluid ">
      <div className="row ">
        <div className="col-lg-4">
        <Comp rate="FREE" h1="$0/" 
        cl1="fa fa-check"
        cl2="fa fa-check"
        cl3="fa fa-check"
        cl4="fa fa-check"
        cl5="fa fa-times"
        cl6="fa fa-times"
        cl7="fa fa-times"
        cl8="fa fa-times"
        e="gray"
        f="gray"
        g="gray"
        h="gray"
         />
        </div>
        <div className="col-lg-4">
        <Comp rate="PLUSE" h1="$9/"
        cl1="fa fa-check"
        cl2="fa fa-check"
        cl3="fa fa-check"
        cl4="fa fa-check"
        cl5="fa fa-check"
        cl6="fa fa-check"
        cl7="fa fa-times"
        cl8="fa fa-times"
        g="gray"
        h="gray"
         />
        </div>
        <div className="col-lg-4">
        <Comp rate="PRO" h1="$49/"
        cl1="fa fa-check"
        cl2="fa fa-check"
        cl3="fa fa-check"
        cl4="fa fa-check"
        cl5="fa fa-check"
        cl6="fa fa-check"
        cl7="fa fa-check"
        cl8="fa fa-check"
         />
        </div>
      </div>
     </div>
    </>
  )
}

export default App
