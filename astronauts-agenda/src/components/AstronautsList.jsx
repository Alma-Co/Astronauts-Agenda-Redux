import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    getAstronautsList
} from '../redux/actions/astronauts-actions';
import './AstronautsList.css';



  
function AstronautsList({astronautList, dispatch}) {
  
    useEffect(() => {
      if (!astronautList && !astronautList?.length) {
        dispatch(getAstronautsList(2));
      }
    }, [astronautList?.length]);

    console.log(astronautList)
    
    return (
      <>
      <div>
        <h1>LISTA OF CHARACTERS</h1>
        {astronautList &&
        astronautList?.map((character,i) => (
          <div>
          <h1 className='imageBox' key={'name',i}>{character.name}</h1>
          <div>
          <img  src={character.image} alt={character.name, i}/>
          </div>
          </div>
        ))
        }
        boton onclick= dispatch getAstronautsList())
      </div>
      </>
    );
}



function mapStateToProps({ astronautsReducer }) {
    return {
      astronautList: astronautsReducer.astronautsList,
    };
  }
  
  
connect();
export default connect(mapStateToProps)(AstronautsList);
  
  
