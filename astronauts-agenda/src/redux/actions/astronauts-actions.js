import axios from 'axios';

function astronautsListSuccess(astronautsList) {
   return {
       type: 'LOAD_ASTRONAUTS_LIST',
       astronautsList
   }
};

function astronautsListError(errorList) {
    return {
        type: 'LOAD_LIST_ERROR',
        errorList
    }
};

export function getAstronautsList(pageNum) {
    return async (dispatch) => {
        const endpointList = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
    try {
        const loadingList = await axios.get(endpointList);
        console.log('ENTRA EN ACTIONS', loadingList)
        dispatch(astronautsListSuccess(loadingList.data.results))
    } catch(error) {
        dispatch(astronautsListError(error))
    }
    };   
}

