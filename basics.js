function myfunction()
{
// single line comment
/*
Multi Line comment 
*/
let fruit = document.getElementById("fruits").value;
if(fruit==""){
alert("Enter fruits")
return false;
}
const f = fruit.split(",");
document.getElementById("sorted").innerHTML = f.sort().reverse();
"use strict"
const car = ["BMW","Audi","Benz","Jaguar"];
let cars = "";
for(let i=0;i<car.length;i++){
cars+=car[i]+",";
}
alert(cars)

let person = {firstname:"Steve",lastname:"Smith"};
alert(person.firstname)

const person1 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe"
}
alert(person1.fullName.apply(person2, ["Oslo", "Norway"]))
}

function disappear()
{
document.getElementById("makehidden").style.visibility="hidden";
}

let data = 0;
function counter()
{
data+=1;
document.getElementById("count").innerHTML = data;
}

document.getElementById("show").addEventListener("click",display);
function display(){
alert(Date())
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 10);
     }
  }
}

function json()
{
const myJSON = '{"name":"Prasannah","age":21}'
const myObj = JSON.parse(myJSON);
alert(myObj.name)
}