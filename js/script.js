let fdate = document.getElementById("fdate");
let sdate = document.getElementById("sdate");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let a = new Date(fdate.value);
  // console.log(a);

  let b = new Date(sdate.value);
  //   console.log(b);

  let diff = b - a;
  //   console.log(diff);

  let totaldays = diff / (1000 * 60 * 60 * 24);
  // console.log(totaldays);

  let year = Math.trunc(totaldays / 365.33);

  let month=Math.trunc((totaldays-year*365.33)/30.42);

  let day=Math.trunc((totaldays-year*365.33-month*30.42));

  document.getElementById("out").innerHTML=`${year} Years , ${month} Months and ${day} Days`
});
