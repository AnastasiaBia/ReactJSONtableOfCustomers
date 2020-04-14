import React from 'react';
import axios from 'axios';

export default class Customers extends React.Component{

    state ={
        customers:[]
    };

    renderTableData() {
        return this.state.customers.map((customer, index) => {
           const { id, firstName, lastName, email,age,companyId } = customer //destructuring
           return (
              <tr key={id}>
                 <th></th>
                 <td>{id}</td>
                 <td>{firstName}</td>
                 <td>{lastName}</td>
                 <td>{email}</td>
                 <td>{age}</td>
                 <td>{companyId}</td>
              </tr>
           )
        })
     }

     


    render(){
     //   return <div> {this.state.customers.map(customer =><li key={customer.id}> <div>Name: {customer.firstName} </div><div>Last Name: {customer.lastName}  </div><div> Email: {customer.email} </div><div>Age: {customer.age}</div></li>)} </div>
     return (
        <div>
           <h1 id='title'>Customers table</h1>
           <table id='customers'>
              <tbody>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
   
    }

    componentDidMount(){
axios.get('http://localhost:8081/customers').then(
    res=>{
        console.log(res)
       this.setState({customers: res.data })
    }
)
    }

    


}