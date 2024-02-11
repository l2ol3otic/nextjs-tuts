import React from 'react'
import { useRecoilState } from 'recoil'
import { facilityState, facilitySelectorState } from '../store'

type Props = {
    facList: string[]
}

const facList = ['toilet', 'shower', 'kitchen']

const Facility = (/*{facList}: Props*/) => {
    const [facList] = useRecoilState(facilityState)
    const [selector] = useRecoilState(facilitySelectorState)
    return (
        <div>
            {facList.map((fac, index) => {
                return <div key={index} className={`${selector == fac ? 'bg-gray-300 p-2 m-2 rounded-lg text-yellow-500' : 'bg-gray-300 p-2 m-2 rounded-lg'}`}>{fac}</div>

            })}
        </div>
    )
}

const FacilityController = () => {
    const [facList, setFacList] = useRecoilState(facilityState)
    const addFac = () => {
        setFacList([...facList, facList[Math.floor(Math.random() * facList.length)]])
    }
    return (
        <div>
            <button onClick={addFac}>add facility</button>
        </div>
    )
}
export const FacilitySelector = () => {
    const [facList, setFacList] = useRecoilState(facilityState)
    const [facSelector, setFacSelector] = useRecoilState(facilitySelectorState)
    return (
        <div className='flex flex-col'>
            <select className='text-black px-3 mt-4 rounded-lg' onChange={e => setFacSelector(e.target.value)} >
                {facList.map((genre, index) => {
                    return <option key={index} className='text-black' value={genre}>{genre}</option>
                })}
            </select>
            <br />
            <div className='items-center'>
                คุณผีบ้าเลือก : {facSelector}
            </div>
        </div>
    )
}

export default Facility
