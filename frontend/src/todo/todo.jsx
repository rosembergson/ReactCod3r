import React, { Component } from 'react'

import pageHeader from '../template/pageHeader'

export default class Todo extends Component {
   remder() {
       return (
           <div>
               <pageHeader name="Tarefas" small="Cadastro" />
           </div>
       )
   } 
}