import axios from 'axios';

function charactersListSuccess(charactersList) {
   return {
       type: 'LOAD_CHARACTERS_LIST',
       charactersList
   }
};

function charactersListError(errorList) {
    return {
        type: 'LOAD_LIST_ERROR',
        errorList
    }
};

export function getCharactersList(pageNum) {
    return async (dispatch) => {
        const endpointList = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
    try {
        const loadingList = await axios.get(endpointList);
        console.log('ENTRA EN ACTIONS', loadingList)
        dispatch(charactersListSuccess(loadingList.data.results))
    } catch(error) {
        dispatch(charactersListError(error))
    }
    };   
}

