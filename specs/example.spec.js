import * as chai from 'chai';
chai.should();

describe('an example module', function spec() {
  beforeEach(() => {
    this.actual = undefined;
  });
  describe('given a value is true', () => {
    beforeEach(() => {
      this.value = true;
    });

    describe('when negating the value', () => {
      beforeEach(() => {
        this.actual = !this.value;
      });

      it('it should make the value false', () => {
        this.actual.should.be.falsy;
      });
    });
  });
});
