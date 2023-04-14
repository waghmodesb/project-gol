import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Booking() {
    return (<div>
        <Navbar />
        <form className="booking" action="">
            <img src="/figma-images/tourist-with-thumb-up__1_-removebg 1.png" alt="" />
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" />

                <label htmlFor="BookingId">Booking ID</label>
                <input id="BookingId" name="BookingId" type="text" />

                <button className="btn--book">Find</button>
            </div>
        </form>
        <Footer />
    </div>);
}

export default Booking;