/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    getAstronautsList
} from '../redux/actions/astronauts-actions';
import './AstronautsList.css';



  
function AstronautsList({astronautList, dispatch}) {
  
    useEffect(() => {
      if (!astronautList && !astronautList?.length) {
        dispatch(getAstronautsList(20));
      }
    }, [astronautList?.length]);

    console.log(astronautList)
    
    return (
      <>
      <div>
        <h1>LIST OF CHARACTERS</h1>
        <div className="seccion__characters">
            <div className="seccion__characters__top">
        {astronautList &&
        astronautList?.map((character,i) => (
          <div className="seccion__characters__top__img">
                    <img className="seccion__characters__items__img"  src={character.image}/>
                    <h2>{character.name}</h2>
                </div>
        ))
        }
          </div>
        </div>       
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
  
  
