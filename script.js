//! 1 Solving problems using array functions on rest countries data(https://restcountries.com/v3.1/all).
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true)
request.send();
request.onload = function () {
    let data = request.response;
    let final = JSON.parse(data);
    console.log(final);

    //* (a) Get all the Contries from Asia continent/region using Filter function
    let result1 = final.filter((ele) => ele.region === "Asia")
    console.log("Get all the Contries from Asia region : ", result1);

    //* (b) Get all the countries with a population of less then 2 lakhs using Filter Function
    let result2 = final.filter((ele) => ele.population < 200000);
    console.log("Get all the countries with a population of less then 2 lakhs : ", result2);

    //* (c) Print the following details name,capital,flag, using forEach function
    console.log("Print the following details name,capital,flag : ")
    final.forEach((ele) => console.log(`Name : ${ele.name.common} , Capital : ${ele.capital} , flag : ${ele.flag}`));

    //* (d) Print the total population of couuntries using reduce function
    let result4 = final.reduce((acc, cv) => acc + cv.population, 0);
    console.log("Total Population : ", result4)

    //* (e) Print the country that uses US dollars as currency
    let result5 = final.filter((ele) => ele.currencies?.USD);
    console.log("Print the country that uses US dollars as currency : ", result5);
}