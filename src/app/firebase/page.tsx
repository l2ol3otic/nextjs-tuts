import * as firebase from '../../method/firebase'
import { Toy } from './interface'

const mock: Toy = { 
    id: 7, 
    genre: 'lovely', 
    name: 'ชิงช้าสวรรค์', 
    price: 2000, 
    image: '🥁' 
}

const Page = () => {
    const getAll = async () => {
        return await firebase.getToy()
    }
    const getById = async () => {
        return await firebase.getToyById(mock.id.toString())
    }
    const add = async () => {
        await firebase.addNewToy(mock)    
    }
    const deleteToy = async () => {
        await firebase.deleteToy(mock.id.toString())
    }
    const updateToy = async () => {
        await firebase.updateToy
    }
    return <div>
        firebase example
    </div>
}

export default Page