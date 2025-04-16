import React, { useEffect } from 'react'
import { useState } from 'react'
import {useAppContext} from '../../context/AppContext'

const SellerLogin = () => {
    const {isSeller, SetIsSeller, navigate} = useAppContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        SetIsSeller(true)
    }

    useEffect(
        () => {
if(isSeller){
    navigate('/seller')
}

        }, [isseller]
    )
  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>

        <div className='flex flex-col gap-5 m-auto items-start p-8  py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
            <p><span className='text-primary'>Seller</span>Login</p>
        </div>




    </form>
  )
}

export default SellerLogin
