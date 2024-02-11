// import { animalLists } from '../static'
import { Toast, toast } from 'react-hot-toast'
import { Animal } from '../interface'
import { Button } from '../../../component/button'
import { useRouter } from  'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Table = ({ zooState, region }:
    { 
        zooState : [ Animal[], any ],
        region: string | null
    }) => {
    const [ zoolists, setAnimals ] = zooState
    const [ loadAnimal, setLoad ] = useState<Animal[]>([])
    
    // Fetch API /animal
    useEffect(() => {
        (async () => {  
            const resp = await axios.get(`http://localhost:3000/api/animal`)
            const animalLists = resp.data
            setLoad(animalLists)
        })()
    }, []);

    const router = useRouter()
    const addToZoo = (animal: Animal) => {
        toast.success('Added to Zoo')
        setAnimals([ animal, ...zoolists ])
    }
    const removeFromZoo = (removeAnimal: Animal) => {
        toast(`Goodbye ! ${removeAnimal.name}`, {
            icon: '👏',
        });
        setAnimals( zoolists.filter(animal => animal.id != removeAnimal.id ))
    }   

    const filter = (animals: Animal[]) => {
        if(typeof region == 'string' ){
            return animals.filter(animal => animal.region == region)
        }else{
            return animals
        }
    }
    return <table className="w-full table-fixed bg-white rounded-lg shadow text-black">
    <thead className="bg-green-500 text-white">
        <tr>
            <th className="w-1/12 p-2">ID</th>
            <th className="w-2/12 p-2">Picture</th>
            <th className="w-3/12 p-2">Name</th>
            <th className="w-3/12 p-2">Species</th>
            <th className="w-1/12 p-2">In Zoo</th>
            <th className="w-2/12 p-2">Action</th>
        </tr>
    </thead>
    <tbody>
        {filter(loadAnimal).map((animal, index) => {
            const { id, name, species, emoji } = animal;
            const added = zoolists.map(a => a.id).includes(id);
            return <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="p-2 text-center">{id}</td>
                <td className="p-2 text-center text-2xl">{emoji}</td>
                <td className="p-2 text-center">{name}</td>
                <td className="p-2 text-center">{species}</td>
                <td className="p-2 text-center">{added ? '✅' : ''}</td>
                <td className="p-2 text-center">
                    {!added ? 
                        <button onClick={() => addToZoo(animal)} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button> :
                        <button onClick={() => removeFromZoo(animal)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button>
                    }
                    <span className='inline-block ml-2'></span>
                    <Button action={() => router.push(`/routing-detail/${id}`) } text="Detail" color={2}/>
                </td>
            </tr>
        })}
    </tbody>
</table>
}

export default Table