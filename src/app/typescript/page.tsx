'use client';

import { useState } from 'react'

interface Animal {
    id: number;
    name: string;
    species: string;
    emoji: string
}

const animalLists: Animal[] = [
    { emoji: '🐯' , id: 1, name: 'Roger', species: 'tiger' },
    { emoji: '🦁' , id: 2, name: 'Pete', species: 'Lion' },
    { emoji: '🐧' , id: 3, name: 'Beth', species: 'Penguin' },
    { emoji: '🐉' , id: 4, name: 'Budge', species: 'Dragon' },
]

const Page = () => {
    const [zoolists, setAnimals] = useState<Animal[]>([]);
    const addToZoo = (animal: Animal) => {
        setAnimals([ animal, ...zoolists ])
    }   

    const removeFromZoo = (removeAnimal: Animal) => {
        setAnimals( zoolists.filter(animal => animal.id != removeAnimal.id ))
    }   
    return <div className="p-12">
        {/* Title */}
        <h1 className="text-2xl">Animal zoo</h1>
        <hr className="my-4" />
        <ul className="text-yellow-400 list-disc">

            { zoolists.length > 0 ? 
                zoolists.map((animal,index) => <div key={index}>{animal.emoji} {animal.name} - {animal.species}</div> ) :
                <div>No animal in zoo !!! add it 🦁</div>
            }
        </ul>
        <hr className="my-4" />
        {/* Table */}
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>picture</th>
                    <th>name</th>
                    <th>species</th>
                    <th>in zoo</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { animalLists.map((animal, index) => {
                    const {id , name, species, emoji} = animal
                    const added = zoolists.map(animal => animal.id).includes(id)
                    return <tr key={index}>
                        <td className="border border-white p-2">{id}</td>
                        <td className="border text-xl border-white p-2">{emoji}</td>
                        <td className="border border-white p-2">{name}</td>
                        <td className="border border-white p-2">{species}</td>
                        <td className="border border-white p-2">{ added ? '✅' : '' }</td>
                        <td className="border border-white p-2">
                            { !added ? 
                                <button  onClick={() => addToZoo(animal)} className="bg-blue-500 text-white rounded-lg px-4 py-2">add</button>:
                                <button  onClick={() => removeFromZoo(animal)} className="bg-red-500 text-white rounded-lg px-4 py-2">Remove</button>
                            }
                        </td>
                    </tr>
                }) }
            </tbody>
        </table>
    </div>
}

export default Page