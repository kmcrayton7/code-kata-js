export function getWinningHand(hands) {
//	hands = hands.map(hand => {
//		return hand.map(card => {
//			
//		});
//	})
//	['2H', 'AS'] => [{ value: 1, suite: 'H'} ...];

	//hands ===
	// [
	// ['2H', 'KD', 'JS', '10C', '5D'],
	// ['2S', '5S', 'JD', '10S', 'AS'],
	// [...]
	// ]
	var transformedHands = hands.map(transformCards);

	// what we want:
	//[
	//		[
	//			{
	//			value: 2,
	//			suite: 'H'
	//		},
	//			{
	//				value: 5,
	//				suite: 'D'
	//			}
	//		],
	//		[{
	//			value: 2,
	//			suite: 'S'
	//		}]
	//]
	var highestCardInHand = transformedHands.reduce(reduceHighestHand, 0);

}

function reduceHighestHand(currentHighestHandValue, hand){
	handValue = hand.reduce(reduceHighestCardValue, 0);
	return currentHighestHandValue >= handValue ? currentHighestHandValue : handValue;
}

function reduceHighestCardValue(currentHighestValue, card){
	return currentHighestValue >= card.value ? currentHighestValue : card.value;
}
	
export function transformCards(cards){
	return cards.map(card => {
		const stringValue = card.substring(0, card.length -1);

		let value;
		if (isNaN(stringValue)){
			if (stringValue === 'J') {
				value = 11;
			}	else if (stringValue === 'Q') {
				value = 12;
			} else if(stringValue === 'K') {
				value = 13;
			} else {
				value = 14;
			}
		}
		else{
			value = parseInt(stringValue);
		}
		
		return {
			value,
			suit: card[card.length - 1]
		};
	});
}