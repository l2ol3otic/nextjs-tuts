'use client';

import {
    useRouter,
    usePathname,
    useSearchParams
} from 'next/navigation'
import { Button } from '../../component/button'

const Page = () => {
    const Router = useRouter();
    const pathname = usePathname() // get current routing
    const searchParams = useSearchParams() // get current search query
    return <div className="p-12 w-4/5 m-auto">
        {/* Title */}
        <div className='font-bold mb-3'>Curent path name is <span className='text-yellow-500'>{pathname}</span></div>
        <div className='font-bold mb-3'>Current param [id] is <span className='text-yellow-500'>{searchParams.get('id')}</span></div>
        <hr className="my-6" />
        <div className='font-bold mb-3'>Project example</div>
        <div className="grid grid-cols-5 gap-6">
            <Button color={Math.floor(Math.random() * 5)} text="intro" action={() => Router.push('/intro')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="animal zoo" action={() => Router.push('/tailwind')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="toasting" action={() => Router.push('/toasting')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="refactor" action={() => Router.push('/refactoring')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="pomodoro" action={() => Router.push('/pomodoro')}></Button>

        </div>
        <div className='grid grid-cols-5 gap-6 mt-2 '>
            <Button color={Math.floor(Math.random() * 5)} text="รีคอย" action={() => Router.push('/recoil')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="เพลกราว" action={() => Router.push('/playground')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="ฟายเบด" action={() => Router.push('/firebase')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="เอสอีโอ" action={() => Router.push('/seo')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="เฟด" action={() => Router.push('/fetch')}></Button>
            <Button color={Math.floor(Math.random() * 5)} text="ฟอร์ม" action={() => Router.push('/from')}></Button>
        </div>
        <hr className="my-6" />

    </div>
}

export default Page

