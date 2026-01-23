import React from "react";

const BookingStatus = () => {
  const data = [
    {
      title: "Football Turf",
      booked: 18,
      total: 24,
      color: "bg-green-500",
    },
    {
      title: "Cricket Turf",
      booked: 10,
      total: 20,
      color: "bg-green-600",
    },
    {
      title: "Badminton Court",
      booked: 6,
      total: 12,
      color: "bg-green-400",
    },
    {
      title: "Music Event",
      booked: 120,
      total: 200,
      color: "bg-green-300",
    },
    {
      title: "Sports Tournament",
      booked: 40,
      total: 50,
      color: "bg-green-300",
    },
  ];

  return (
    <div className="bg-gray-100  p-6 text-green-500 mt-10 rounded-2xl mx-5">
      <h5 style={{color:"green"}} className=" font-bold mb-6 mt-3">
        Turf & Events Booking Status
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => {
          const percentage = Math.round(
            (item.booked / item.total) * 100
          );

          return (
            <div
              key={index}
              className="bg-green-100 rounded-xl p-5 shadow"
            >
              {/* Title */}
              <div className="flex justify-between mb-2">
                <h5 className="font-semibold">{item.title}</h5>
                <span className="text-sm text-gray-400">
                  {item.booked}/{item.total} booked
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-green-900 rounded-full h-3 overflow-hidden">
                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="text-sm mt-2 text-gray-400">
                {percentage}% Filled
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingStatus;
