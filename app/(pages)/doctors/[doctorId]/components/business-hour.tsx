import { Dot } from "lucide-react";

export default function BusinessOur() {
  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Friday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", available: false },
    { day: "Sunday", hours: "Closed", available: false },
  ];
  return (
    <div id="business-hours" className="space-y-3">
      <h1 className="text-lg font-medium">Business Hours</h1>
      <div className="p-4 border rounded-md">
        <ul>
          {businessHours.map((dayInfo, index) => (
            <li
              key={index}
              className="flex items-center justify-between   border-b py-4 last:border-b-0  last:pb-0"
            >
              <span>{dayInfo.day}</span>
              <div className="ml-4 flex items-center gap-x-2">
                <span
                  className={`${
                    dayInfo.available
                      ? "bg-info/10 text-info-700"
                      : "bg-destructive/10  text-destructive-700"
                  } flex items-center gap-x-1 pr-2 rounded-full`}
                >
                  <Dot />
                  <span>{dayInfo.available ? "Available" : "Unavailable"}</span>
                </span>
                <span
                  className={`text-xs ${
                    dayInfo.available ? "text-default-600" : "text-default-400"
                  }`}
                >
                  {dayInfo.hours}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
