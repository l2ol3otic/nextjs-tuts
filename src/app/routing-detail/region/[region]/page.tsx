'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { animalLists } from '../../static'
import { Button} from '../../../../component/button'

const Page = () => {
    const params = useParams()
    const router = useRouter()
    const { region } = params

    const searchParams = useSearchParams() // get current search query
    const id = searchParams.get('id')
    const getAnimal = typeof id == 'string' ? 
        animalLists.find(animal => animal.id.toString() == id ) : 
        animalLists.filter(animal => animal.region == region )

    return <div className='p-12 w-3/4 m-auto'>
        { JSON.stringify(getAnimal) }
        <Button action={() => router.push('/routing-detail') } text="Go Back" />
    </div>
}

export default Page