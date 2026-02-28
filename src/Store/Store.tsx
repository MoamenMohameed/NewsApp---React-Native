import { create } from 'zustand'
type ArticleState = {
  FavList: any[];
  AddFav: (article:any) => void;};    
    
const useFavStore = create<ArticleState>((set) => ({
  FavList:[],
  AddFav: (article) => set((state) => ({ FavList: [...state.FavList,article]})),
}))

export default useFavStore