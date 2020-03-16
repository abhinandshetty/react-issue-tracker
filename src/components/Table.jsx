import React, { Component } from 'react';


// This class was intended for 2nd and 3rd question

export default class Table extends Component {

    componentDidMount() {
        fetch(`http://lms.labyrinthelab.com/api/ws_get_zipcode_details.php?zipcode=33186`, {
            method: "GET",
            headers :{
                "access_token": "ZiPcoDeDetAiLs",
                "Content-Type" : "application/json"
            }
        }).then(res => {
            console.log(res)
            //res.json();
        })
        //.then(resp => console.log(resp));
    }

    
    render() {
      return (
          <></>
      );
    }
  }