import { Animal } from '../interface'

const ZooPresent = ({ animal }:{
    animal: Animal
}) => {
    return <div className="bg-gray-300 p-4 rounded-lg text-black shadow flex items-center space-x-4 flex-col">
        <img src={animal.image} alt={animal.name} className="w-32 h-32 mb-3 rounded-full"/>
        <div>
            <div className="text-xl font-medium">{animal.emoji} {animal.name}</div>
        </div>
    </div>
}

export default ZooPresent