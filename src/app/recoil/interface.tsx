export interface Toy {
    id: number
    name: string
    price: number
    image: string
    genre: Genre
}

export type Genre = 'standard' | 'extream' | 'lovely'