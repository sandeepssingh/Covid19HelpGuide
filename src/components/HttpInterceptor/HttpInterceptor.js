import React from 'react';
import Firebase from "firebase";

export async function GetCovid19Data(){
    const data = await fetch('https://api.covid19india.org/data.json');
  return await data.json();
  }
export async function FetchCovidResources() {

  const dbRef = Firebase.database().ref();
  dbRef.child("CovidResources").get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());     
      return snapshot.val();;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};