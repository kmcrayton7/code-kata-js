export function getWinningHand(hands) {
//	hands = hands.map(hand => {
//		return hand.map(card => {
//			
//		});
//	})
//	['2H', 'AS'] => [1, 1];
	throw new Error('Not Implemented');
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