/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

console.log('loaded javascript');

function handValue(hand) {
  let handTotal = 0

  for (var i = 0; i < hand.length; i++) {
    if ((hand[i] != "J") && (hand[i] != "Q") && (hand[i] != "K") && (hand[i] != "A")) {
      handTotal += parseInt(hand[i])
    }
  }

  for (var i = 0; i < hand.length; i++) {
    if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")){
      handTotal += 10
    }
  }

  for (var i = 0; i < hand.length; i++) {
    if ((hand[i] === "A") && (handTotal + 11 > 21)) {
      handTotal += 1
    } else if ((hand[i] === "A") && (handTotal + 11 <= 21)){
      handTotal += 11
    }
  }
  return handTotal
}

// Goal: A function that can take any hand and return the total value of that hand.
// Takes an array of cards as an argument and returns single number.








/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
