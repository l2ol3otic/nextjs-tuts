'use client';

import { use, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Reporter } from './component/Reporter'
import { ToyTable } from './component/TableWithRecoil'
import Total from './component/Total'
import { Controller } from './component/Controller'
import Form from './component/Form'
import { useRecoilState } from 'recoil';
import { userState } from './store'
import Loader from './component/loader'

const Page = () => {
    const [username] = useRecoilState(userState)
    return <div className="relative w-screen h-screen flex flex-col items-center justify-center">
        <Loader />
        <div><Toaster /></div>
        <div >this is playground</div>
        <div className='text-blue-400 text-3xl mb-5' >hello <span className='underline capitalize font-bold italic'>{username}</span>  👪</div>
        <Reporter />

        <div className='grid grid-cols-2 gap-6'>
            <div>
                <Total />
                <ToyTable />
                <Controller />
            </div>
            <Form />
        </div>

    </div>
}

export default Page