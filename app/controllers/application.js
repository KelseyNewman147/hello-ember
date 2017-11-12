import Controller from '@ember/controller';

export default Controller.extend({
    name: "World!",
    showName: false,
    numClicks: 0,
    actions: {
        toggleName() {
            this.toggleProperty('showName');//takes attribute that's passed into it and set that value to its opposite
        },
        incrementClicks() {
            this.set('numClicks', this.get('numClicks' ) + 1);
        }
    }
});
