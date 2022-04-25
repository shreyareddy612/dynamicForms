import { Component, useState } from 'react';
//import { useState } from 'react';
//import Form from '../components/Form';
import {useRef } from 'react';

class Table extends Component { 
    emptyfield={  name: '',
    coloumnType: '',
    labelType: '',
    inputType: '',
    required:false,
    checked:false
}
    //hook
    constructor(props){
        super(props)
        this.state={fieldnames:[],newfield:this.emptyfield};
        // this.handleName1Change = this.hanhandleName1Change.bind(this)
    }

    //storing the field values in local storgae
  componentDidMount(){
        var fields = localStorage.getItem('fieldnames')
        if(fields === null) return
        const fieldnames = JSON.parse(fields)
         const newstate =  Object.assign(...this.state.fieldnames, fieldnames)     
         this.setState(newstate)

    } 

    //Handling name change
    handleName1Change = (event) =>{
        var newstate =  {...this.state};
        newstate.newfield.name = event.target.value
        this.setState(newstate)
        console.log(this.state)
        }

    //Handling coloumn type change
    handleColoumnTypeChange = (event) =>{
        var newstate =  {...this.state};
        newstate.newfield.coloumnType = event.target.value
        this.setState(newstate)
        console.log(this.state)
        }

    //Handling label type change
    handleLabelTypeChange = (event) =>{
        var newstate =  {...this.state};
        newstate.newfield.labelType = event.target.value
        this.setState(newstate)
        console.log(this.state)
        }
    //Handling input type change
    handleInputTypeChange = (event) =>{
        var newstate =  {...this.state};
        newstate.newfield.inputType = event.target.value
        this.setState(newstate)
        console.log(this.state)
        }

    //handling Submit button (form - entry)
    handleSubmit = (event) =>{
        //  alert(`${this.state.name1} ${this.state.coloumnType} ${this.state.labelType} ${this.state.inputType}`)
        event.preventDefault()
        var newstate =  {...this.state};
        // this.state.newfield.id=
        newstate.fieldnames.push(this.state.newfield) 
        newstate.newfield = this.emptyfield;
        this.setState(newstate)
        console.log(newstate)
        localStorage.clear()
        localStorage.setItem('fieldnames',JSON.stringify({fieldnames:newstate.fieldnames}))
    }

    // state = {
    //     Fieldnames: {
    //         Name: false,
    //         Quantity: false,
    //         Unitprice: false
    //     }
    // }
    //checkboxes
    chkclick = (e) => {
        
        var { name, checked } = e.target;
        
        console.log(name, "name");
        console.log(checked, "Checked");
        let obj = {...this.state.fieldnames}
        let fieldnames = Object.values(obj)
        console.log(fieldnames)
        var index = fieldnames.findIndex((field)=> field.name === name);
        console.log(fieldnames[index])
        fieldnames[index].checked=checked;
        this.setState({fieldnames:fieldnames});

        
        // this.setState((e) => {
        //     var SelectedField = e.Fieldnames;
        //     console.log(Fieldnames, "field names");
        //     return SelectedField[name] = checked;

        // });


    };

    generateForm = () => {
        this.clearfields("formContainer")
        // var displayField = Object.keys(this.state.fieldnames).filter((x) => this.state.fieldnames[x]);
        // console.log(displayField)
        // displayField.forEach(element => { this.createFiled(element, "formContainer") });
        this.state.fieldnames.forEach((field)=>{
            if(field.checked) this.createForm(field,"formContainer")
        })
    }
    //to hide label field on click
    hideLabelField = () => { document.getElementById('formLabel').innerHTML = '';}
    
    createForm = (form, parent) => {
        if (form == undefined) {
            return
        }
        var formgroup = document.createElement('div');
        var formlabel = document.createElement('div');
        var formfield = document.createElement('input');
        formfield.setAttribute("class", "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500")
        formlabel.innerHTML = form.name;
        formfield.type=form.inputType.toLowerCase()
        formfield.placeholder=form.labelType
        formgroup.appendChild(formlabel)
        formgroup.appendChild(formfield)
        document.getElementById(parent).appendChild(formgroup)
        
    }

    clearfields = (parent) => { document.getElementById(parent).innerHTML = ''; }


    render() {

        return (
            <div>
                <div className="container flex justify-center mx-auto">
                    <div className="flex flex-col">
                        <div className="w-/2">
                            <div className="border-b border-gray-200 shadow">
                                <table>
                                    <thead className="bg-gray-50">
                                        <tr className="bg-blue-300">
                                            <th className="px-6 py-2 text-sm text-black-500">
                                            <input className="check-box" type="checkbox" />
                                            </th>
                                            <th className="px-6 py-2 text-sm text-black-500">
                                                Column Name
                                            </th>
                                            {/* <th className="px-6 py-2 text-sm text-black-500">
                                                Column Type
                                            </th> */}
                                            <th className="px-6 py-2 text-sm texr-black-500">
                                                Label
                                            </th>
                                            <th className="px-6 py-2 text-sm text-black-500">
                                                Input type
                                            </th>
                                            <th className="px-6 py-2 text-sm text-black-500">
                                                Required
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                       { this.state.fieldnames.map((field,index)=>(
                                            <tr key={field.name} className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                            <input className="check-box" type="checkbox" checked={field.checked} name={field.name} onChange={(e)=>this.chkclick(e)} />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                               &nbsp; {field.name}
                                            </td>
                                            {/* <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                {field.coloumnType}
                                                </div>
                                            </td> */}
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{field.labelType}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                            {field.inputType}
                                            </td>
                                            <td className="px-6 py-4">
                                                <center><input className="check-box" type="checkbox"></input></center>
                                            </td>

                                        </tr>
                                       ))}
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                </div>
                <center className="my-5"><button className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
                focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={this.generateForm}>
                    Generate Form</button></center>
                
                <form className=" text-black-500">
                    <div id="formContainer"></div>
                                            
                    {/* submit button */}
                </form>

        <div className="m-8 border-gray-500 shadow">
        <div className="container justify-center ">
        <form className="m-8 p-8" onSubmit={this.handleSubmit}>
        
        
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          <input type="text" id="text" value={this.state.name1} onChange={this.handleName1Change}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           required>
          </input>
        </div>
        {/* <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coloumn Type</label>
          <input type="text" value={this.state.coloumnType} onChange={this.handleColoumnTypeChange} 
          id="text" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          required>
          </input>
        </div> */}
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Label</label>
          <input type="text" id="formLabel" value={this.state.labelType} onChange={this.handleLabelTypeChange} onClick = {this.hideLabelField}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          required>
          </input>
        </div> 
        
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Input Type</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={this.state.iputType} onChange={this.handleInputTypeChange} required>
        <option className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="" disabled selected hidden>Choose the Input type</option>
        <option >Text</option>
        <option >Number</option>
        <option>Datetime-local</option>
        <option>checkbox</option>
        <option>url</option>
        <option >Image</option>
        <option >Radio</option>
        <option>File</option>
       

       
    </select>
    </div>

          {/* <input type="text" id="text" value={this.state.iputType} onChange={this.handleInputTypeChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          required>
          </input> */}
          
       
         
        
        <center><button type="submit" 
        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit</button>
        </center>
      </form>
      </div>
      </div>
            </div>

        );
    }
}

export default Table;
