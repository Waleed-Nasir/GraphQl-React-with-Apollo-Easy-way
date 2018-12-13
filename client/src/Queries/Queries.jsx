import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Store = gql`
     {
       storeStockDB{
        name
        company
       }
     }
   `
   const Add_Comapnt = gql`
mutation store( $name : String!,$company:String!){
    store(name: $name,company: $company) {
        name
        company
      }
}
` 
export {Store,Add_Comapnt}