import * as chai from 'chai';
chai.should();

import {getWinningHand, transformCards} from './../pokerScoreValue';

describe('getWinningHand', function spec() {
	beforeEach(() =>{
		this.actualScore = undefined;
	});
	describe('given an array of poker hands and each hand contains unique cards across suits', () =>{
		beforeEach(()=>{
			this.input = [
				['2H', '5D', 'JS', '10C', 'KD'],
				['2S', '5S', 'JD', '10S', 'AS']
			];
		});
		
		describe('when determing the winning hand for poker', () => {
			beforeEach(() => {
				this.actualScore = getWinningHand(this.input);
			});
			
			it('it should return the hand with the largest card value', () =>{
				this.actualScore.should.be.equal(['2S', '5S', 'JD', '10S', 'AS']);
			})
		});
	});
});

describe('transformCards', function spec() {
	describe('given a collection cards', () =>{
		beforeEach(()=>{
			this.input = ['2H', '5D', 'JS'];
		});
		describe('when transforming the cards', () =>{
			beforeEach(() =>{
				this.output = transformCards(this.input);
			});
			
			it('it should output the cards\' value and suit', () =>{
				this.output[0].value.should.be.equal(2);
				this.output[0].suit.should.be.equal('H');
				this.output[1].value.should.be.equal(5);
				this.output[1].suit.should.be.equal('D');
				this.output[2].value.should.be.equal(11);
				this.output[2].suit.should.be.equal('S');
			});
		});
	});
});