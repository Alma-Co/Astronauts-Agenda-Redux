/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getCharactersList,
    getSpeciesList
} from '../redux/actions/rickAndMorty-actions';
import './CharactersList.css';

  
function CharactersList({charactersList, speciesList, dispatch}) {
    const [choosenSpecie, setChoosenSpecie] = useState('')
    const [pageNum, setPageNum] = useState(0)

  
    useEffect(() => {
      if (!charactersList && !charactersList?.length) {
        dispatch(getCharactersList(20));
      }
    }, [charactersList?.length]);

    useEffect(() => {
      if (!speciesList && !speciesList?.length) {
        dispatch(getSpeciesList('Alien', 2));
      }
    }, [speciesList?.length]);

    const setSpecie = (specie) => {
      setChoosenSpecie(specie)
      setPageNum(0);
      dispatch(getSpeciesList(choosenSpecie, pageNum))
      };

    const changePage = () => {
      setPageNum(+1);
      console.log(pageNum)
      dispatch(getSpeciesList(choosenSpecie, pageNum));
    }
    
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

        <div>
          <button onClick={() => setSpecie('Human')}>
            Human
          </button>
          <button onClick={() => setSpecie('Humanoid')}>
            Humanoid
          </button>
          <button onClick={() => setSpecie('Alien')}>
            Alien
          </button>
          <button onClick={() => setSpecie('Robot')}>
            Robot
          </button>
          <button onClick={() => setSpecie('Unknown')}>
            Unknown
          </button>
          <button onClick={()=> changePage()}>
            Next
          </button>
        </div>

         <h1>LIST OF SPECIES</h1>
        <div className="seccion__characters">
            <div className="seccion__characters__top">
        {speciesList &&
        speciesList?.map((character,i) => (
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
      speciesList: rickAndMortyReducer.speciesList,
    };
  }
  
  
connect();
export default connect(mapStateToProps)(CharactersList);
  
  
