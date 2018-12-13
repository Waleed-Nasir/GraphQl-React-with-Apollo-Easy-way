import React, { Component } from 'react';
import { graphql } from "react-apollo";
import {Store} from'../Queries/Queries'

class ListComponent extends Component {
  renderStoreItem(){
    var data = this.props.data
    if (data.loading) return <p>Loading...</p>;
        if (data.error) return <p>Error :(</p>;
          else{
            return data.storeStockDB.map((info,index) => (
                    <div key={index} style={{width:'240px',height:'80px',backgroundColor:'skyblue',float:'left',margin:'2%',textAlign:'left',padding:'2%'}}>
                      <p>Company: {info.company}</p>
                      <p>User Name : {info.name}</p>
                    </div>
                  ));
          }
  }
  render() {
   
    return (
      <div>
        <h1>test</h1>
      {this.renderStoreItem()}
      </div>
      
    );
  }
}

export default graphql(Store)(ListComponent);
