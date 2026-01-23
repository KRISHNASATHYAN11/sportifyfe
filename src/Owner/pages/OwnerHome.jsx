import React from "react";
import OwnerSidebar from "../components/OwnerSidebar";
import OwnerHeader from "../components/OwnerHeader";
import BookingStatus from "../components/BookingStatus";
OwnerSidebar;

const OwnerHome = () => {
  return (
    <>
      <div className="grid grid-cols-[1fr_5fr]">
        <div>
          <OwnerSidebar />
        </div>
        <div>
          <OwnerHeader />
          <div class="grid grid-cols-4 gap-4 mt-10">
            <div class="bg-green-700 text-white rounded-xl p-5">
              <p>Total Bookings</p>
              <h3 className="text-4xl font-bold">24</h3>
              <p className="text-sm opacity-80">Increased from last month</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p>Turfs Bookings</p>
              <h3 className="text-4xl font-bold">10</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p>Event Bookings</p>
              <h3 className="text-4xl font-bold">12</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p>Total Payments</p>
              <h3 className="text-4xl font-bold">2</h3>
            </div>
          </div>

          <BookingStatus/>
        </div>
      </div>
    </>
  );
};

export default OwnerHome;
