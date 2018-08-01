let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft; 

        // console.log(this.guestCapacity);
        // console.log(partySize)
    },
    seatParty: function (newGuests) {
        this.guestCount = newGuests + this.guestCount 
    },
    removeParty: function (removeGuests) {
        return this.guestCount = this.guestCount - removeGuests
    }
}

let status = restaurant.checkAvailability(4);
console.log(status); 
restaurant.seatParty(45);
console.log(restaurant.checkAvailability(4));
restaurant.seatParty(100);
console.log(restaurant.checkAvailability(4))

