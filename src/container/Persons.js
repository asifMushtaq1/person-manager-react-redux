import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import * as actionTypes from '../store/actions'
import AddPerson from '../components/AddPerson/AddPerson';


 class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson}/>
        {this.props.prs.map(person => (
          <Person key = {person.id}
                  name = {person.name}
                  age = {person.age}
                  clicked = {() => this.props.onRemovePerson(person.id)}/>
        ))}
      </div>
    )
  }
}

const mapStatetoProps = state => {
    return {
      prs : state.persons
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson : (name , age ) => dispatch({
                        type : actionTypes.ADD_PERSON , 
                        personData : {name : name , age : age }}),
    onRemovePerson : (id) => dispatch ({type : actionTypes.REMOVE_PERSON , personId : id})
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Persons);