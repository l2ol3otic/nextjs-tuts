import { atom } from 'recoil';
import { Toy } from './interface'
import { toys } from './static'

export const userState = atom<string>({
    key: 'userState',
    default: 'Chin',
  });

export const cartState = atom<Toy[]>({
  key: 'cartState',
  default: [],
});

export const genreState = atom<string>({
    key: 'genreState',
    default: 'extream'
})

export const sortState = atom<string>({
    key: 'sortState',
    default: 'ascending'
})

export const toyState = atom<Toy[]>({
  key: 'toyState',
  // default: toys,
  default: []
});

export const loadState = atom<boolean>({
  key: 'loadState',
  default: false
});
