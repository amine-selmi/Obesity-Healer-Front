import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../src/App.css";
import { Link } from 'react-router-dom';
import userService from '../../services/user.service';
import { MDBDataTable,MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
//import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


const columns = [
  { key: 'id', header: 'ID', searchable: true, sortable: true, primaryKey: true },
  { key: 'name', header: 'Name', searchable: true, sortable: true },
];

const propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

class ListePatients extends Component {

  constructor(props){
    super(props)
    this.state ={
      data : [],
      showMe :false
    }

    userService.getAllUsers().then((response) => { 
      this.setState({
        data : response.data
      })

       //  let rows = []
      //  let columns =[
      //   {
      //     label: 'nom',
      //     field: 'nom',
      //     sort: 'asc',
      //     width: 150
      //     },
      //     {
      //     label: 'prenom',
      //     field: 'prenom',
      //     sort: 'asc',
      //     width: 270
      //     },
      //     {
      //     label: 'email',
      //     field: 'email',
      //     sort: 'asc',
      //     width: 200
      //     },
      //     {
      //     label: 'numTel',
      //     field: 'numTel',
      //     sort: 'asc',
      //     width: 100
      //     },
      //     {
      //     label: 'date Naissance',
      //     field: 'dateNaissance',
      //     sort: 'asc',
      //     width: 150
      //     },
      //     {
      //     label: 'username',
      //     field: 'username',
      //     sort: 'asc',
      //     width: 100
      //     },
      //     {
      //     label: 'taille',
      //     field: 'taille',
      //     sort: 'asc',
      //     width: 100
      //     },
      //     {
      //     label: 'poids',
      //     field: 'poids',
      //     sort: 'asc',
      //     width: 100
      //     },
      //     {
      //     label: 'Actions',
      //     field: 'Actions',
      //     sort: 'asc',
      //     width: 150
      //     }
      // ]
    //   for ( let i =0 ; i < response.data.length ; i++ ){

    //     let dataObj = {
    //       nom: response.data[i].nom+'',
    //       prenom: response.data[i].prenom+'',
    //       numTel: response.data[i].numTel+'',
    //       dateNaissance: response.data[i].dateNaissance+'',
    //       username: response.data[i].username+'',
    //       email: response.data[i].email+'',
    //       taille: response.data[i].taille+'',
    //       poids : response.data[i].poids+'',
    //       Actions :null,
         

    //   }
 
    //   rows.push(this.setActions(dataObj))
    //   }

    //   this.setData (columns , rows )
    //   // this.state.data.columns = columns 
    //   // this.state.data.rows = rows
     })


  }

  setActions(dataobj) {
    dataobj.Actions  =<div><Button >Success</Button></div> 
    return dataobj

  }

  setData (columns , rows ){
    this.setState({
      data : {
        columns : columns,
        rows : rows
      }
    })
  }
  // <MDBDataTable btn  data={data}/>

  render() {
    const {
      data,
    } = this.state;
    return (
      
      <div>
        <div className="col col-md-12">
        <div className="row div-center">
          {data.map((person, index) => (
    
              <div  className="card border-primary text-center col-md-3"  style={{margin:"15px", borderRadius:"20px", boxShadow: "5px 5px #88888875"}} key={index}>
                  <div className="Text-center" >
                      <Image src="logo192.png" fluid thumbnail/>
                  </div>
                <h3>{person.nom+' '+person.prenom }</h3>
                <h5 className="title">{person.email}</h5>
                <p>{person.taille}</p>
                <p><Button  variant="outline-success">Details</Button></p>
                
              </div>

              
            
              
              ))}
              
              
              
        </div>
        </div>
        </div>
      
    );
  }
}

//listePatients.propTypes = propTypes;
export default ListePatients;

     

 