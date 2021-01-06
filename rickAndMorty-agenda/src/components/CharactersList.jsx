/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    getCharactersList
} from '../redux/actions/rickAndMorty-actions';
import './CharactersList.css';



  
function CharactersList({charactersList, dispatch}) {
  
    useEffect(() => {
      if (!charactersList && !charactersList?.length) {
        dispatch(getCharactersList(20));
      }
    }, [charactersList?.length]);

    console.log(charactersList)
    
    return (
      <>
      <div>
        <h1>LIST OF CHARACTERS</h1>
        <div className="seccion__characters">
            <div className="seccion__characters__top">
        {charactersList &&
        charactersList?.map((character,i) => (
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



function mapStateToProps({ rickAndMortyReducer }) {
    return {
      charactersList: rickAndMortyReducer.charactersList,
    };
  }
  
  
connect();
export default connect(mapStateToProps)(CharactersList);
  
  
