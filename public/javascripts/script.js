var stripe = Stripe('pk_test_GLK2GfkP4kJAnMb24g5gKDDP001oWUAbbo');

$('#checkout').click(function(){
    console.log('checkout')
    stripe.redirectToCheckout({
        
        sessionId: sessionStripeID
      }).then(function (result) {
        
      });
})