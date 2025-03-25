type TBookedTimeButton = {
  hour: string;
  price: number;
  hoursBooked: string[];
  handleChooseActiveTime: (hour: string) => void;
};

export default function BookedTimeButton({hour, price, hoursBooked, handleChooseActiveTime}: TBookedTimeButton) {
  return (
    <button className={`booked-btn flex ${hoursBooked.includes(hour) ? 'booked-btn--noactive' : ''}`} disabled={hoursBooked.includes(hour)} onClick={() => handleChooseActiveTime(hour)}>
      <div>
        <p className='booked-time-info'>{hour}:00</p>
      </div>
      <div className='flex booked-time-info-wrapper'>
        <p className='booked-time-info'>{price}р</p>
      </div>
    </button>
  );
}
