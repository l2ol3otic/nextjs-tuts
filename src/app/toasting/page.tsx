'use client';

import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

interface Animal {
    id: number;
    name: string;
    species: string;
    emoji: string;
    image?: string
}

const animalLists: Animal[] = [
    { emoji: '🐯' , id: 1, name: 'Roger', species: 'tiger' , image: '/image/tiger.png'},
    { emoji: '🦁' , id: 2, name: 'Pete', species: 'Lion', image: '/image/lion.png' },
    { emoji: '🐧' , id: 3, name: 'Beth', species: 'Penguin', image: '/image/penguin.png' },
    { emoji: '🐉' , id: 4, name: 'Budge', species: 'Dragon', image: '/image/dragon.png' },
    { emoji: '🦒' , id: 5, name: 'Rambo', species: 'Giraffe', image: '/image/giraffe.png' },
    { emoji: '🐟' , id: 6, name: 'Nemo', species: 'Fish', image: '/image/nemoo.png' },
]

const Page = () => {
    const [zoolists, setAnimals] = useState<Animal[]>([]);
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
    return <div className="p-12 w-4/5 m-auto">
    <div><Toaster/></div>
    <h1 className="text-3xl font-bold mb-6 text-green-600">🇯🇲 🦓 🦒  Animal Zoo 🦒 🦓 🇯🇲</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {zoolists.length > 0 ? 
            zoolists.map((animal, index) => (
                <div key={index} className="bg-gray-300 p-4 rounded-lg text-black shadow flex items-center space-x-4 flex-col">
                    <img src={animal.image} alt={animal.name} className="w-32 h-32 mb-3 rounded-full"/>
                    <div>
                        <div className="text-xl font-medium">{animal.emoji} {animal.name}</div>
                    </div>
                </div>
            )) :
            <div className="col-span-3 text-center">No animal in zoo! Add one 🦁</div>
        }
    </div>
    <table className="w-full table-fixed bg-white rounded-lg shadow text-black">
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
            {animalLists.map((animal, index) => {
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
                    </td>
                </tr>
            })}
        </tbody>
    </table>
</div>
}

export default Page