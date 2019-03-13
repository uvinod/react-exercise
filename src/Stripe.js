import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
class Stripe extends Component {
  
  onToken = (token, addresses) => {

    console.log(token);
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    return (
      <div>
        <h2>Stripe</h2>
        <br />
        <StripeCheckout
         stripeKey="pk_test_eb7ctOAdAIzpIYvXsS57EvTv"
         token={this.onToken}
        />
      </div>
    );
  }
}
 
export default Stripe;