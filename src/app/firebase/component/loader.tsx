import { useRecoilState } from 'recoil';
import { userState, loadState } from '../store'

const Loader = () => {
    const [onLoad, setOnLoad] = useRecoilState(loadState)
    return <>
        {onLoad && <div className=' w-screen h-screen fixed top-0 left-0 z-50 bg-white text-black flex items-center justify-center opacity-70'>
            Loading.......
        </div>}
    </>
}

export default Loader
