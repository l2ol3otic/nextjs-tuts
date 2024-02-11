import { Toy, Genre } from '../interface'
import { toast } from 'react-hot-toast'
// import { toys } from '../static'
import { useRecoilState } from 'recoil';
import { cartState, genreState, sortState, toyState } from '../store'
import { useEffect, useState } from 'react'
import * as firebase from '@/method/firebase'

export const ToyTable = () => {
    const [ cart, setCart ] = useRecoilState(cartState)
    const [ sortBy ] = useRecoilState(sortState)
    const [ currentGenre ] = useRecoilState(genreState)
    const [ toys, setToy ] = useRecoilState(toyState)

    const [ load, setLoad ] = useState(false)
    useEffect(() => {
        ( async () => {
          setLoad(true)
          const toys: any[] = await firebase.getToy()
          setToy(toys)
          setLoad(false)
        })()
    }, []);
    
    const addToCart = (item: Toy) => {
        let cartUpdate: Toy[] = [ item, ...cart ]
        setCart(cartUpdate)
        toast.success('added')
    }

    const reomveFromCart = (item: Toy) => {
        let cartUpdate = cart.filter( stuff => stuff.id != item.id )
        setCart(cartUpdate)
        toast.error('removed')
    }
    return <table className='mt-4'>
    <thead>
        <tr>
            <th className='border border-white'>id</th>
            <th className='border border-white'>genre</th>
            <th className='border border-white'>name</th>
            <th className='border border-white'>price</th>
            <th className='border border-white'>image</th>
            <th className='border border-white'>action</th>
        </tr>
    </thead>
    <tbody>
        { toys
            .filter(toy => toy.genre == currentGenre)
            .sort((a,b) =>  sortBy == 'ascending' ? a.price - b.price : b.price - a.price)
            .map( (toy,index) => {
            const { id, name, price, image, genre } = toy
            const extrameIs = (genre: Genre ) => genre == 'extream' ? 'text-red-500' : 'text-white'
            return <tr key={index}>
                <td className='p-3 border border-white'>{id}</td>
                <td className='p-3 border border-white'>{name}</td>
                <td className='p-3 border border-white'>{price} THB</td>
                <td className={`${extrameIs(genre)} p-3 border border-white underline`}>{genre}</td>
                <td className={`border border-white p-3`}>{image}</td>
                <td>
                    {
                        cart.map(stuff => stuff.id).includes(id) ? 
                        <button className='bg-red-500 text-white rounded-xl' onClick={() => reomveFromCart(toy)} >Remove</button> :
                        <button className='bg-blue-500 text-white rounded-xl' onClick={() => {
                            addToCart(toy)
                        }} >Add</button>
                    }
                </td>
            </tr>
        } ) }
    </tbody>
</table>
}