import { useRecoilState } from 'recoil';
import { cartState } from '../store'

const Total = () => {
    const [ cart ] = useRecoilState(cartState)
    return <div className='grid grid-cols-3 gap-5 w-4/5 '>
    { cart.map((stuff,index) => {
        return <div key={index} className='bg-white rounded-xl shadow text-black p-4'>
            <div>{stuff.image} { stuff.name }</div>
            <span 
                className='inline-block bg-red-500 rounded-lg text-xs text-white px-2'>
                {stuff.genre}
            </span>
            <div>{stuff.price} THB</div>
        </div>
    }) }
</div>
}

export default Total