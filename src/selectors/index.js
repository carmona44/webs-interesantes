import { createSelector } from 'reselect'

const getWebs = (state) => state.webs.webs
const getSearchWord = (state) => state.global.search

export const getWebsFilter = createSelector(
  [ getWebs, getSearchWord ],
  (webs, search) => {
    if(!webs){
        return;
    }

    const regex = new RegExp(search, 'gi');
    const newWebs = webs.filter(web => {
        return web.nombre.match(regex);
    });

    if(newWebs){
        return newWebs;
    }
    
    return [];

    
  }
)