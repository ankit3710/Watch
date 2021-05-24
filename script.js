function showtime(){
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var date1=date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var session="AM";

    var months=["Januray","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    var m=months[month];
    var d=days[day];
    if (hour==0){
        hour=12;
    };
    if (hour==12){
        session="PM";
    };
    if (hour > 12){
        hour=hour-12;
        session="PM";
    };
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute<10) ? "0" + minute:minute;
    seconds = (seconds<10) ? "0" + seconds:seconds;
    var time = `${hour} : ${minute} : ${seconds}  ${session}`;
    var day1 = `${d}, ${m} ${date1}, ${year}`;
    document.getElementById("digitalclock").innerHTML=time;
    document.getElementById("digital").innerHTML=day1;
    setTimeout(showtime,1000);
};
showtime();