import { Game } from "../types";
import 'localstorage-polyfill';
import { EventRegister } from 'react-native-event-listeners'
import { getFirestore, collection, query, where, getDocs, Firestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

export let nameList: string[] = [];
export const setNameList = (newNameList: string[] ) => nameList = newNameList;

export const deleteName = (name: string) => {
    const index = nameList.indexOf(name);
    if(index > -1){
        nameList.splice(index, 1); 
    }
}

export let gameName : string = "";
export const setGameName = (newName: string) => gameName = newName;


export const getGameList = () : Game[] => {
    return JSON.parse(localStorage.getItem("gameList") || "[]") ;
}


export const setGameList = (newGameList: Game[] ) => {
    const serialisedGameList = JSON.stringify(newGameList); 
    localStorage.setItem("gameList", serialisedGameList);
    EventRegister.emit('localStorageModification');
}

//********* */