
exports.getDate = function () {
    const today = new Date();
      //let currentDay = today.getDay();
      //let day = "";
  
      let options = {
          weekday: "long",
          day: "numeric",
          month: "long"
      };
      return day = today.toLocaleDateString("en-us", options);
  
  }
  
  exports.getDay = function() {
      const today = new Date();
      //let currentDay = today.getDay();
      //let day = "";
  
      let options = {
          weekday: "long"
      };
      return day = today.toLocaleDateString("en-us", options);
  
  }
  
  console.log(module.exports);