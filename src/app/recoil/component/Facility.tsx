import { useRecoilState } from 'recoil';
import { facilityState, selectedFacilityState } from '../store'

const Facility = () => {
    const [ facList ] = useRecoilState(facilityState)
    const [ selected  ] = useRecoilState(selectedFacilityState)
    return <div>
        { facList.map((fac,index) => {
            return <div key={index}
                className={`${selected == fac ? 
                    'text-yellow-500 bg-green-600' : 
                    'text-white'}`}>
                    {fac}
                </div>
        })}
    </div>
}

export const SelectFacility = () => {
    const [ facList  ] = useRecoilState(facilityState)
    const [ _, setSelectedFac  ] = useRecoilState(selectedFacilityState)
    return <div>
    <select className='text-black px-3 mt-4 rounded-lg' onChange={e => setSelectedFac(e.target.value)} >
            { facList.map((facility,index) => {
                return <option key={index} className='text-black' value={facility}>{facility}</option>
            })}
        </select>
    </div>
}

export default Facility


