//XML HTTp REQUEST
// These is used to interact with the server via api

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send()
// request.onload = function(){
//     var res = JSON.parse(request.response);
//     console.log(res)

    
//     for (var i = 0; i < res.length; i++) {
//         var reg = res[i].region;
//         var name = res[i].name.common;
//         console.log("Region --------->>>", reg);
//         console.log("name----------->>>>:", name);
//     }
// }

//     // var Cname = res.filter((ele) => ele.region == "America" )
//     // var countryname = Cname.map((ele) => ele.name.common )
//     // console.log(countryname)

//     // var country = res.filter((ele) => ele.region == "Asia" )
//     // console.log(country)
//     // var country = res.filter((ele) => ele.region == "Europe" )
//     // console.log(country)

//     // var population = country.map((ele) => ele.population )
//     // // console.log(population)
//     // var addPopulation = population.reduce((acc,cv) => acc+cv , 0)
//     // console.log(addPopulation)
//     // // var countryname = Cname.map((ele) => ele.name.common )
//     // // console.log(countryname)

//     // // var America = res.filter((ele) => ele.region == "NorthAmerica" )
//     // // console.log(America)
    
//     // var population = res.filter((ele) => ele.population > 100000 )
//     // console.log(population)

// ////////////////////
//     // var country = res.filter((ele) => ele.region == "Asia" )
//     // console.log(country)


//     // var population = res.filter((ele) => ele.population < 200000 )
//     // console.log(population)


//     // res.forEach((item) => {
//     //     var name = item.name;
//     //     console.log(name)

//     //     var flag = item.flag;
//     //     console.log(flag)

//     //     var capital = item.capital;
//     //     console.log(capital)
//     // });

//     // var country = res.filter((ele) => ele.region)
//     // console.log(country)
//     // var population = country.map((ele) => ele.population )
//     // console.log(population)
//     // var addPopulation = population.reduce((acc,cv) => acc+cv , 0)
//     // console.log(addPopulation)

//     ///--------------------////
// // var currencies = res.filter((ele) => ele.currencies);
// // console.log(currencies);
// // var currenciesName = currencies.filter((ele) => ele.currencies.USD);
// // console.log(currenciesName);
// // console.log("Country Names:");
// // currenciesName.forEach((ele) => console.log(ele.continents));
    
// // }

// // var res = fetch("https://restcountries.com/v3.1/all");
// // console.log(res)
// // res.then ((data) =>(data.json())).then((data1)=> console.log(data1))

// // function foo(num){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>resolve(2*num),3000)
// //     })    
// //     }
// //     foo(5).then((data)=>{
// //         console.log(data);
// //         return foo(data);
// //     }).then((data1)=>{
// //         console.log(data1);
// //         return foo(data1);
// //     }).then((data2)=>console.log(data2))



// function foo(num){
//     return new Promise((resolve,reject)=>{setTimeout(()=>resolve(2*num),3000)
//     })    
// }

// async function main (){
//     try{
//         let data = await foo(5);
//         console.log(data)

//         let data1 = await foo(data);
//         console.log(data1)

//         let data2 = await foo(data1);
//         console.log(data2)

//         data = await foo(data);
//         console.log(data)
//     }catch{
//         console.log("error");
//     }
// }
// main();

function label_create(tagName,attrName,attrValue,content){
    var ele = document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML = content;
    return ele;
    }
    function create_break(){
        var label_break = document.createElement("br");
        return label_break;
    }
    function input_create(tagName,attrName,attrValue,attrName1,attrValue1){
    var input_ele = document.createElement(tagName);
    input_ele.setAttribute(attrName,attrValue);
    input_ele.setAttribute(attrName1,attrValue1);
    return input_ele;
    }
    
    
    
    var firstName = label_create("label", "for", "firstName", "First Name");
    var firstNameBreak = create_break();
    var inputFirstName = input_create("input", "type", "text", "id", "firstName");
    
    // Middle Name field
    var middleName = label_create("label", "for", "middleName", "Middle Name");
    var middleNameBreak = create_break();
    var inputMiddleName = input_create("input", "type", "text", "id", "middleName");
    
    // Last Name field
    var lastName = label_create("label", "for", "lastName", "Last Name");
    var lastNameBreak = create_break();
    var inputLastName = input_create("input", "type", "text", "id", "lastName");
    
    //email
    var email = label_create("label","for","email","Email");
    var emailBreak = create_break();
    var inputEmail = input_create("input","type","email","id","email");
    
    // Password field
    var password = label_create("label", "for", "password", "Password");
    var passwordBreak = create_break();
    var inputPassword = input_create("input", "type", "password", "id", "password");
    
    // Upload File field
    var uploadFile = label_create("label", "for", "uploadFile", "Upload File");
    var uploadFileBreak = create_break();
    var inputUploadFile = input_create("input", "type", "file", "id", "uploadFile");
    
    
    document.body.append(firstName, firstNameBreak, inputFirstName);
    document.body.append(create_break());
    document.body.append(create_break());
    
    document.body.append(middleName, middleNameBreak, inputMiddleName);
    document.body.append(create_break());
    document.body.append(create_break());
    
    
    document.body.append(lastName, lastNameBreak, inputLastName);
    document.body.append(create_break());
    document.body.append(create_break());
    
    document.body.append(email, emailBreak, inputEmail);
    document.body.append(create_break()); 
    document.body.append(create_break());
    
    
    document.body.append(password, passwordBreak, inputPassword);
    document.body.append(create_break());
    document.body.append(create_break());
    
    document.body.append(uploadFile, uploadFileBreak, inputUploadFile);
    document.body.append(create_break());
    document.body.append(create_break());