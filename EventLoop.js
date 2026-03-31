// // PREDICT OUTPUT
// console.log('First');
// setTimeout(() => console.log('Second'), 0);
// console.log('Third');

// // ORDER TRACKER
// const trackOrder = (orderId, item, qty, customer) => {
//   console.log(`[0s] Order #${orderId} received: ${qty} x ${item}`);

//   setTimeout(() => {
//     console.log(`[1s] Kitchen started cooking...`);
//   }, 1000);

//   setTimeout(() => {
//     console.log(`[3s] Packaging your order...`);
//   }, 3000);

//   setTimeout(() => {
//     console.log(`[4s] Out for delivery!`);
//   }, 4000);

//   setTimeout(() => {
//     console.log(`[6s] Delivered! Enjoy your meal, ${customer}!`);
//   }, 6000);
// };

// trackOrder(42, 'Chicken Momo', 2, 'Riya');


// set Interval Example
const countdownTimer = (seconds) => {
  let count = seconds;

  const interval = setInterval(() => {
    if (count > 0) {
      console.log(`Delivery in: ${count}...`);
      count--;
    } else {
      console.log("Arrived!");
      clearInterval(interval);
    }
  }, 3000);
};

countdownTimer(5);