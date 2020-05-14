// var express = require('express');
// var router = express.Router();
// const stripe = require('stripe')('sk_test_cRhZRfW6XKZajQqBQKUlPC37000Tmt5x6d');

// var fakeDataBike = [
//   {name: "BIK045", price: 679, url:"/images/bike-1.jpg"},
//   {name: "ZOOK7", price: 779, url:"/images/bike-2.jpg"},
//   {name: "GEW08", price: 899, url:"/images/bike-3.jpg"},
//   {name: "LIKO89", price: 1399, url:"/images/bike-4.jpg"},
//   {name: "KIWIT", price: 1249, url:"/images/bike-5.jpg"},
//   {name: "NASAY", price: 839, url:"/images/bike-6.jpg"}
// ]



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   if(req.session.dataBasket == undefined){
//  req.session.dataBasket = [];
//   }
// res.render('shop', { fakeDataBike:fakeDataBike} );
// });

// router.get('/basket',async function(req, res, next) {
  
//   if(req.session.dataBasket == undefined){
//  req.session.dataBasket = [];
//   }
//   var stripeCard = []
// for(var i=0;i<req.session.dataBasket.length; i++){
//   stripeCard.push(
//     {name: req.session.dataBasket[i].name,
//     amount: req.session.dataBasket[i].price * 100,
//     currency: 'eur',
//     quantity: req.session.dataBasket[i].quantity
//      } )
// }

// var sessionStripeID;
// if(stripeCard.length>0){
//   var session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: stripeCard,
//     success_url: 'http://127.0.0.1:3000/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'http://127.0.0.1:3000/',
//   });
//   sessionStripeID = session.id;
// }
// res.render('basket', {dataBasket : req.session.dataBasket,sessionStripeID } );
// });


// // GET Basket page
// router.post('/basket',async function(req, res, next) {
//   if(req.session.dataBasket == undefined){
//     req.session.dataBasket = [];
//      }

//   var alreadyexiste = false
//   console.log("add")

//  for(var i=0; i<req.session.dataBasket.length; i++){
//    if(req.session.dataBasket[i].name == req.body.name){
//     req.session.dataBasket[i].quantity = Number(req.session.dataBasket[i].quantity) + 1;
//     alreadyexiste = true
//    }
//   }
//   if(alreadyexiste == false){
//     req.session.dataBasket.push({
//       name:req.body.name,
//       url:req.body.url,
//       price:req.body.price,
//       quantity:req.body.quantity}
//   )
// }

// var stripeCard = []
// for(var i=0;i<req.session.dataBasket.length; i++){
//   stripeCard.push(
//     {name: req.session.dataBasket[i].name,
//     amount: req.session.dataBasket[i].price * 100,
//     currency: 'eur',
//     quantity: req.session.dataBasket[i].quantity
//      } )
// }

// var sessionStripeID;
// if(stripeCard.length>0){
//   var session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: stripeCard,
//     success_url: 'http://127.0.0.1:3000/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'http://127.0.0.1:3000/',
//   });
//   sessionStripeID = session.id;
// }
//   res.render('basket', { dataBasket : req.session.dataBasket,sessionStripeID});
// });

// // GET delete 
// router.get('/delete', async function(req, res, next) {

//   req.session.dataBasket.splice( req.query.position, 1)
//   var stripeCard = []
// for(var i=0;i<req.session.dataBasket.length; i++){
//   stripeCard.push(
//     {name: req.session.dataBasket[i].name,
//     amount: req.session.dataBasket[i].price * 100,
//     currency: 'eur',
//     quantity: req.session.dataBasket[i].quantity
//      } )
// }

// var sessionStripeID;
// if(stripeCard.length>0){
//   var session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: stripeCard,
//     success_url: 'http://127.0.0.1:3000/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'http://127.0.0.1:3000/',
//   });
//   sessionStripeID = session.id;
// }
//   res.render('basket', { dataBasket:req.session.dataBasket, sessionStripeID} );
// });

// // POST delete 
// router.post('/addquantity', async function(req, res, next) {
//   var position = req.body.position
//   var newquantity = req.body.quantity

//   req.session.dataBasket[position].quantity = newquantity
//   var stripeCard = []
// for(var i=0;i<req.session.dataBasket.length; i++){
//   stripeCard.push(
//     {name: req.session.dataBasket[i].name,
//     amount: req.session.dataBasket[i].price * 100,
//     currency: 'eur',
//     quantity: req.session.dataBasket[i].quantity
//      } )
// }

// var sessionStripeID;
// if(stripeCard.length>0){
//   var session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: stripeCard,
//     success_url: 'http://127.0.0.1:3000/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'http://127.0.0.1:3000/',
//   });
//   sessionStripeID = session.id;
// }

//   res.render('basket', {dataBasket: req.session.dataBasket, sessionStripeID } );
// });

// router.get('/success', function(req, res, next){
// res.render('confirm')
// })
// module.exports = router;
