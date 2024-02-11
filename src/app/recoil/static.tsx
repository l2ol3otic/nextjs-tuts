import { Toy } from './interface'

export const genres = [ 'standard' , 'extream' , 'lovely' ]
export const toys: Toy[] = [
    { id: 1, genre: 'standard', name: 'หนังยาง', price: 300, image: '🥁' },
    { id: 2, genre: 'extream', name: 'ม้ากระโดด', price: 1200, image: '🐴' },
    { id: 3, genre: 'extream', name: 'รถไฟเหาะ', price: 400, image: '🚂' },
    { id: 4, genre: 'lovely', name: 'ม้าหมุน', price: 800, image: '👸' },
    { id: 5, genre: 'extream', name: 'โรลเลอร์โคสเตอร์', price: 5000, image: '🎢' },
]