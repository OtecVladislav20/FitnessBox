Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

export const getDates = (startDate, stopDate) => {
  startDate = new Date().addDays(startDate);
  stopDate = new Date().addDays(stopDate);
  var dateArray = new Array();
  var currentDate = startDate;

  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};
