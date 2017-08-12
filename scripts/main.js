console.log("loaded javascript")

function handValue(hand) {
  let handTotal = 0
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] != "J" && hand[i] != "Q" && hand[i] != "K" && hand[i] != "A") {
      handTotal += parseInt(hand[i])
    }
  }

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      handTotal += 10
    }
  }

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A" && handTotal + 11 > 21) {
      handTotal += 1
    } else if (hand[i] === "A" && handTotal + 11 <= 21) {
      handTotal += 11
    }
  }
  return handTotal
}
