import React, { Component } from 'react';
import { Query, ApolloConsumer, Mutation } from "react-apollo";
import { graphql,compose } from "react-apollo";
import {Add_Comapnt} from'../Queries/Queries'


class CreateList extends Component {

    render() {
        return (
            <Mutation mutation={Add_Comapnt}>
      {(store, { data }) => (
        <div>
          <form 
            onSubmit= {e => {
                e.preventDefault();
                store({ variables: {name:this.state.name,company:this.state.company}});
              }}

          >
            <div className="row" >
                                     <div className="col-md-4"><label>Your name:</label></div>
                                     <div className="col-md-8">
                                         <input type="tetx" name="name" title="name" required onChange={(e) => this.setState({ name: e.target.value})} />
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-4"><label>Your Company</label></div>
                                     <div className="col-md-8">
                                         <input type="text" onChange={(e) => this.setState({ company: e.target.value})} name="company" title="company" required />
                                     </div>
                                 </div>
            <button type="submit">Add Company</button>
          </form>
        </div>
      )}
    </Mutation>
        );
    }
}

export default compose(
    graphql(Add_Comapnt,{name:'Add_Comapnt'})
)(CreateList)
