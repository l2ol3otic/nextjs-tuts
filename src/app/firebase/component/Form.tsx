import { useForm, SubmitHandler } from "react-hook-form"
import { useRecoilState } from 'recoil';
import { toyState } from '../store'
import { Toy } from '../interface'
import { toast } from 'react-hot-toast'

enum GenreEnum {
  extream = "extream",
  standard = "standard",
  lovely = "lovely",
}

interface IFormInput {
  name: string
  genre: GenreEnum
  price: number
  image: string
}

const Form = () => {
    const [ toys, setToyLists ] = useRecoilState(toyState)
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        console.log(data)
        const getIDs = toys.length + 1
        const parcel = {
            id: getIDs,
            ...data
        }
        let toyUpdate: Toy[] = [ parcel, ...toys ]
        setToyLists(toyUpdate)
        toast.success('add new toy to list')
    }   

    return (
        <div>
            <h2 className="mb-2 text-white">Add new item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="text-black grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
                <div>
                    <label className="block mb-1 text-xs">Name</label>
                    <input className="border h-6" {...register("name")} />
                </div>
                <div>
                    <label className="block mb-1 text-xs">Genre</label>
                    <select className="border h-6 w-full" {...register("genre")}>
                        <option value="extream">extream</option>
                        <option value="standard">standard</option>
                        <option value="lovely">lovely</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-xs">Price</label>
                    <input className="border h-6" {...register("price")} />
                </div>
                <div>
                    <label className="block mb-1 text-xs">Image</label>
                    <input className="border h-6" {...register("image")} />
                </div>
                <input className="col-span-2 bg-blue-600 rounded-lg text-white h-8" type="submit"  />
            </form>
        </div>
    )
}

export default Form