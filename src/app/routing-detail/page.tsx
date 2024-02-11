'use client';

import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Animal } from './interface'
import Table  from './component/Table';
import ZooPresent from './component/ZooPresent';
import Titler from './component/Titler';
import NoAnimalBanner from './component/BlankBanner';

import { 
    useRouter,
    useSearchParams
} from 'next/navigation'
import { Button } from '@/component/button'

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams() // get current search query
    const region = searchParams.get('region')
    const zooState = useState<Animal[]>([]);
    const [ zoolists ] = zooState
    
    return <div className="p-12 w-4/5 m-auto">
    <div><Toaster/></div>
    <Titler text="🇯🇲 🦓 🦒  Animal Zoo 🦒 🦓 🇯🇲" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {zoolists.length > 0 ? 
            zoolists.map((animal, index) => (
                <ZooPresent key={index} animal={animal} />
            )) :
            <NoAnimalBanner />
        }
    </div>
    
    <div>
        <Button color='red' action={() => router.push(`/routing-detail/region/earth`) } text="earth" />
        <Button color='red' action={() => router.push(`/routing-detail/region/ocean`) } text="ocean" />
        <Button color='red' action={() => router.push(`/routing-detail/region/sky`) } text="sky" />
    </div>

    <Table zooState={zooState} region={region}  />
</div>
}

export default Page