function FlightInfo() {
    return (<div class="flights">
        <div class="info-board">
            <div class="info-board__heading"><strong>From - To</strong></div>
            Lahore-Karachi
        </div>

        <div class="info-boards">
            <div class="info-board">
                <div class="info-board__heading"><strong>Trip</strong></div>
                Lahore-Karachi
            </div>
            <div class="info-board">
                <div class="info-board__heading"><strong>Depart - Return</strong></div>
                07 Nov 22 - 13 Nov 22
            </div>

            <div class="info-board">
                <div class="info-board__heading"><strong>Passenger - Class</strong></div>
                1 Passenger, Economy
            </div>
        </div>

        <p>+ Add Promo code</p>

        <button class="btn--flight">
            Show Flights
        </button>
    </div>);
}

export default FlightInfo;