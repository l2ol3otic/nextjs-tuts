'use client';

import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Toy, Genre } from './interface'
import { Reporter } from './component/Reporter'
// import { ToyTable } from './component/ToyTable'
import { ToyTable } from './component/TableWithRecoil'
import { RecoilRoot } from 'recoil';

const genres = [ 'standard' , 'extream' , 'lovely' ]

const Total = ({ cart }:{
    cart: Toy[]
}) => {
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



const Page = () => {
    const [ username ] = useState('chin')
    const genreState = useState('extream')
    const [ sortBy, setSort] = useState('ascending')
    const cartState = useState<Toy[]>([])
    const [ cart ] = cartState
    const [ _, setCurrentGenre ] = genreState

    return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <RecoilRoot>
            <div><Toaster /></div>
            <div >this is playground</div>
            <div className='text-blue-400 text-3xl mb-5' >hello <span className='underline capitalize font-bold italic'>{username}</span>  👪</div>
            <Reporter />

            {/* Grid layout */}
            <Total cart={cart} />
            <ToyTable />
            <div className='flex mt-3'>
                <h4>Sort by</h4>
                <button onClick={() => setSort('ascending')} className='px-4'>➡️ ascending</button>            
                <button onClick={() => setSort('descending')} className='px-4'>⬅️ descending</button>
            </div>
            <div>
                <select className='text-black px-3 mt-4 rounded-lg' onChange={e => setCurrentGenre(e.target.value)} >
                    { genres.map((genre,index) => {
                        return <option key={index} className='text-black' value={genre}>{genre}</option>
                    }) }
                </select>
            </div>
        </RecoilRoot>
    </div> 
}

export default Page