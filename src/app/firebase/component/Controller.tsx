import { genreState, sortState } from '../store'
import { useRecoilState } from 'recoil';
import { genres } from '../static'

export const Controller = () => {
    const [ _, setSort ] = useRecoilState(sortState)
    const [ __, setCurrentGenre ] = useRecoilState(genreState)
    return <> 
        <div className='flex mt-3'>
            <h4>Sort by</h4>
            <button onClick={() => setSort('ascending')} className='px-4'>➡️ ascending</button>            
            <button onClick={() => setSort('descending')} className='px-4'>⬅️ descending</button>
        </div>
        <div>
            <select className='text-black px-3 mt-4 rounded-lg' onChange={e => setCurrentGenre(e.target.value)} >
                { genres.map((genre, index) => {
                    return <option key={index} className='text-black' value={genre}>{genre}</option>
                })}
            </select>
        </div>
    </>
}