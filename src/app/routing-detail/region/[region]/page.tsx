'use client';

import { useParams, useRouter ,useSearchParams} from 'next/navigation'
import { animalLists } from '../../static'
import Titler from '../../component/Titler'
import ZooPresent from '../../component/ZooPresent'
import { Button } from '../../../../component/button'

const Page = () => {
    const params = useParams()
    const router = useRouter()
    const { region } = params
    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    const getAnimal: any = typeof id == 'string' ?  animalLists.filter(animal => animal.region == region).find(animal => animal.id.toString() == id) : animalLists.filter(animal => animal.region == region) 
    
    
    return <div className='p-12 w-3/4 m-auto'>

        {JSON.stringify(getAnimal)}
        <Button color={Math.floor(Math.random() * 5)} text="กลับไป๊!!" action={() => router.push('/routing-detail')}></Button>
    </div>
}

export default Page
