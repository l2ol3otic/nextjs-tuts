'use client';

import { useParams, useRouter } from 'next/navigation'
import { animalLists } from '../static'
import Titler from '../component/Titler'
import ZooPresent from '../component/ZooPresent'
import { Button} from '../../../component/button'

const Page = () => {
    const params = useParams()
    const router = useRouter()
    const { id } = params
    const findAnimal: any = typeof id == 'string' ? animalLists.find(animal => animal.id.toString() == id ) : undefined
    return <div className='p-12 w-3/4 m-auto'>
        { findAnimal != undefined && <>
            <Titler text={`${findAnimal.name} details`} />
            <hr className='my-6' />
            <div className='grid grid-cols-4 gap-12'>
                <div className='col-span-2'>
                    <ZooPresent animal={findAnimal} />
                </div>
                <div className='col-span-2'>
                    <ul className='list-disc text-xl'>
                        {Object.keys(findAnimal).map(key => {
                            return <div>
                                <span className='text-yellow-500'>{key}: </span>
                                {findAnimal[key]}
                            </div>
                        })}
                    </ul>
                    <br />
                    <Button action={() => router.push('/routing-detail') } text="Go Back" />
                </div>
            </div>
        </> }
        
    </div>
}

export default Page