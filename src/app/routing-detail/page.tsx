'use client';

import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Animal } from './interface'
import Table from './component/Table';
import ZooPresent from './component/ZooPresent';
import Titler from './component/Titler';
import NoAnimalBanner from './component/BlankBanner';
import { Button } from '@/component/button'
import { useRouter } from 'next/navigation';

import {
    useSearchParams
} from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams() // get current search query
    const Router = useRouter();
    const region = searchParams.get('region')
    const zooState = useState<Animal[]>([]);
    const [zoolists] = zooState

    return <div className="p-12 w-4/5 m-auto">
        <div><Toaster /></div>
        <div className='grid grid-cols-3 gap-3'>
            <Button color={1} text="โลก" action={() => Router.push('/routing-detail/region/earth')}></Button>
            <Button color={2} text="นก" action={() => Router.push('/routing-detail/region/sky')}></Button>
            <Button color={3} text="ทะเล" action={() => Router.push('/routing-detail/region/ocean')}></Button>
        </div>
        <Titler text="🇯🇲 🦓 🦒  Animal Zoo 🦒 🦓 🇯🇲" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {zoolists.length > 0 ?
                zoolists.map((animal, index) => (
                    <ZooPresent key={index} animal={animal} />
                )) :
                <NoAnimalBanner />
            }
        </div>
        <Table zooState={zooState} region={region} />
       

    </div>
}

export default Page