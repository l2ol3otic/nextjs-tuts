'use client';

import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Animal } from './interface'
import Table  from './comp/Table';
import ZooPresent from './comp/ZooPresent';
import Titler from './comp/Titler';
import NoAnimalBanner from './comp/BlankBanner';

const Page = () => {
    const zooState = useState<Animal[]>([]);
    const [ zoolists ] = zooState
    return <div className="p-12 w-4/5 m-auto">
    <div><Toaster/></div>
    <Titler text="🇯🇲 🦓 🦒  Animal Zoo 🦒 🦓 🇯🇲" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {zoolists.length > 0 ? 
            zoolists.map((animal, index) => (
                <ZooPresent animal={animal} key={index} />
            )) :
            <NoAnimalBanner />
        }
    </div>
    <Table zooState={zooState}  />
</div>
}

export default Page