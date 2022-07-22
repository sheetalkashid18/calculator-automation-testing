const {Builder, By} = require ("selenium-webdriver");
var should = require("chai").should();

var dict = {

    //to hold all the buttors with thier corresponding button numbers

    "AC" : "1",
    "DEL" : "2",
    "/" : "3",
    1 : "4",
    2 : "5",
    3 : "6",
    "*" : "7",
    4 : "8",
    5 : "9",
    6 : "10",
    "+" : "11",
    7 : "12",
    8 :"13",
    9 : "14",
    "-" : "15",
    "." : "16",
    0 :"17",
    "NEG": "18",
    "=": "19"
};


//Check if all buttons are working 
describe("Check Buttons", function(){

    //The all Clear button
    it("Button AC", async function(){
        
        //Test for chrome browser
        let driver = await new Builder().forBrowser("chrome").build();

        //launch application
        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html") 

        //xpath of the button to be clicked any number in this case
        xp = "/html/body/div/button[".concat(dict[1])
        xp = xp.concat("]")

        //Click the button on the browser
        await driver.findElement(By.xpath(xp)).click();

        //xpath of the button to be clicked AC in this case
        xp = "/html/body/div/button[".concat(dict["AC"])
        xp = xp.concat("]")

        //Click the button on the browser
        await driver.findElement(By.xpath(xp)).click();

        //Get the result from the location on the calculator 
        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
        
        //Check if the result is the desired result
        resulttest.should.equal("");
        
        //Close the browser
        await driver.quit();
    
    });


    //Delete button
    it("Button DEL", async function(){
        
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
        
        xp = "/html/body/div/button[".concat(dict[1])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[5])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict["DEL"])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
        
        resulttest.should.equal("1");
        
        await driver.quit();
    
    });




    //for all the numeric buttons 
    for (let i = 0; i < 10; i++) {

        it("Button ".concat(i.toString()), async function(){

        let driver = await new Builder().forBrowser("chrome").build();
        
        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")

        //Get xpath for the number i
        xp = "/html/body/div/button[".concat(dict[i])
        xp = xp.concat("]")
        
        await driver.findElement(By.xpath(xp)).click();
        
        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
        
        resulttest.should.equal(i.toString());

        await driver.quit();

        });
    }    

});




//Check if all operators are working

describe("Check Operators", function(){

    //Check for addition
    it("Addition", async function(){
        
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
        
        xp = "/html/body/div/button[".concat(dict[2])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[3])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();

        xp = "/html/body/div/button[".concat(dict["+"])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[8])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[1])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();

        xp = "/html/body/div/button[".concat(dict["="])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
        
        resulttest.should.equal("104.00");
        
        await driver.quit();
    
    });


    //Check for subtraction
    it("Subtraction", async function(){
        
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
        
        xp = "/html/body/div/button[".concat(dict[9])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[3])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();

        xp = "/html/body/div/button[".concat(dict["-"])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[8])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        xp = "/html/body/div/button[".concat(dict[1])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();

        xp = "/html/body/div/button[".concat(dict["="])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();


        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
        
        resulttest.should.equal("12.00");
        
        await driver.quit();


    });    
        
        
     //Check for Multiplication   
    it("Multiplication", async function(){
        
        let driver = await new Builder().forBrowser("chrome").build();
    
        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
        xp = "/html/body/div/button[".concat(dict[2])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        xp = "/html/body/div/button[".concat(dict[3])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
        xp = "/html/body/div/button[".concat(dict["*"])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        xp = "/html/body/div/button[".concat(dict[3])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
        xp = "/html/body/div/button[".concat(dict["="])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
            
        resulttest.should.equal("69.00");
            
        await driver.quit();
        
    });



     //Check for Division   
    it("Division", async function(){
        
        let driver = await new Builder().forBrowser("chrome").build();
    
        await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
        xp = "/html/body/div/button[".concat(dict[2])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        xp = "/html/body/div/button[".concat(dict[7])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
        xp = "/html/body/div/button[".concat(dict["/"])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        xp = "/html/body/div/button[".concat(dict[3])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
        xp = "/html/body/div/button[".concat(dict["="])
        xp = xp.concat("]")
        await driver.findElement(By.xpath(xp)).click();
    
    
        let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
            return value
        })
            
        resulttest.should.equal("9.00");
            
        await driver.quit();
        
    });



});


//Test boundary cases
//Outer boundary
const obcases = ["-10000", "9999.999", "-9999.999", "10000"];
//Inner boundary
const ibcases = ["9999.99", "-9999.99", "0"];

describe("Boundary Cases", function(){

    for (let index = 0; index < obcases.length; index++) {
        
        //Number of cases
        let arlen = obcases[index].length

        //Outer boundary scenarios
        it("Out of boundary", async function(){

            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < arlen; sid++){

                //element to be clicked
                element = obcases[index][sid]

                //find what position to be clicked
                var toappend = undefined

                //If the element is . or - it's a string
                if (element == '.' || element == '-'){
                    toappend = dict[element]
                }
                else{
                    toappend = dict[parseInt(element)]
                }

                //click the button
                xp = "/html/body/div/button[".concat(toappend)
                xp = xp.concat("]")
                await driver.findElement(By.xpath(xp)).click();
                }

            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){

                return value
            })

            resulttest.should.equal("NA");

            await driver.quit();
            
        });
    }



    for (let index = 0; index < ibcases.length; index++) {
        
        let arlen = ibcases[index].length
        let word = ibcases[index]
        
        //Inner boundary
        it("Inside boundary", async function(){

            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < arlen; sid++){
                element = ibcases[index][sid]
                var toappend = undefined
                if (element == "." || element == "-"){
                    toappend = dict[ibcases[index][sid]]
                    
                }
                else{
                    toappend = dict[parseInt(ibcases[index][sid])]
                }

                xp = "/html/body/div/button[".concat(toappend)
                xp = xp.concat("]")
                await driver.findElement(By.xpath(xp)).click();

                }

            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){
                return value
            
            })

            resulttest.should.equal(word);

            await driver.quit();
            
        });

    }


});


//Check if the digits are getting truncated during an operation and also if the after calculating it's not within the range
describe("Truncating digits and calculated number out of range", function(){        
    
    //Results array
    let ress = [(4567.589 + 3961.852).toFixed(2), "NA"];
    
    //Tests array
    const tests = ["4567.589+3961.852=", "5999.99+4999.99="];

    //For all tests 
    for (let test = 0; test < tests.length; test++){
        it(tests[test], async function(){
            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < tests[test].length; sid++){
                element = tests[test][sid]
                console.log(element)
                var toappend = undefined
                //Check if it is a number
                if (isNaN(element)){
                    toappend = dict[element]
                }
                else{
                    toappend = dict[parseInt(element)]
                }

                xp = "/html/body/div/button[".concat(toappend)
                xp = xp.concat("]")
                await driver.findElement(By.xpath(xp)).click();
                }

            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){

                return value
            })

            resulttest.should.equal(ress[test]);

            await driver.quit();
            
        });

    }
        
    
});




//Check if a number can be negated anytime during the calculation
describe("Check negate Function(Can negate the number any time)", function(){

    //Result array
    const ress = ["10.00", "67.00"]

    //Test array
    const tests = [["45", "+", "35", "NEG", "="], ["NEG", "39", "NEG", "-", "28", "NEG", "="]];

    for (let test = 0; test < tests.length; test++){

        it("TEST "+(test + 1).toString(), async function(){
            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < tests[test].length; sid++){
                element = tests[test][sid]
                var toappend = undefined
                if (isNaN(element)){
                    toappend = dict[element]
                    xp = "/html/body/div/button[".concat(toappend)
                    xp = xp.concat("]")
                    await driver.findElement(By.xpath(xp)).click();
                }
                else{
                    for (let i = 0; i < element.length; i++) {
                        toappend = dict[parseInt(element[i])]
                        xp = "/html/body/div/button[".concat(toappend)
                        xp = xp.concat("]")
                        await driver.findElement(By.xpath(xp)).click();
                    }
                    }  
                }

                
            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){

                return value
            })

            resulttest.should.equal(ress[test]);

            await driver.quit();
            
        });

    }


});

//Check if screen can be cleared anytime
describe("Check clear screen any time and start new", function(){

    const ress = ["58.00", ""]
    const tests = [["45", "-", "AC", "35", "+", "23", "="], ["45", "+", "53", "=", "AC", "28", "NEG", "=", "AC"]];

    for (let test = 0; test < tests.length; test++){

        it("TEST "+(test + 1).toString(), async function(){
            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < tests[test].length; sid++){
                element = tests[test][sid]
                var toappend = undefined
                if (isNaN(element)){
                    toappend = dict[element]
                    xp = "/html/body/div/button[".concat(toappend)
                    xp = xp.concat("]")
                    await driver.findElement(By.xpath(xp)).click();
                }
                else{
                    for (let i = 0; i < element.length; i++) {
                        toappend = dict[parseInt(element[i])]
                        xp = "/html/body/div/button[".concat(toappend)
                        xp = xp.concat("]")
                        await driver.findElement(By.xpath(xp)).click();
                    }
                    }  
                }

                
            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){

                return value
            })

            resulttest.should.equal(ress[test]);

            await driver.quit();
            
        });

    }
    
});

//Check if consecutive calculations can be done
describe("Consecutive calculations", function(){

    //Result array
    const ress = ["27.00"]
    
    //Test array
    const tests = [["24", "+", "59", "-", "29", "*", "2", "/", "4", "="]];

    for (let test = 0; test < tests.length; test++){

        it("TEST "+(test + 1).toString(), async function(){
            let driver = await new Builder().forBrowser("chrome").build();
            await driver.get("file:///C:/Users/didi/Desktop/DESKTOP/Calculator/index.html")
            
            for (let sid = 0; sid < tests[test].length; sid++){
                element = tests[test][sid]
                var toappend = undefined
                if (isNaN(element)){
                    toappend = dict[element]
                    xp = "/html/body/div/button[".concat(toappend)
                    xp = xp.concat("]")
                    await driver.findElement(By.xpath(xp)).click();
                }
                else{
                    for (let i = 0; i < element.length; i++) {
                        toappend = dict[parseInt(element[i])]
                        xp = "/html/body/div/button[".concat(toappend)
                        xp = xp.concat("]")
                        await driver.findElement(By.xpath(xp)).click();
                    }
                    }  
                }    
            let resulttest = await driver.findElement(By.xpath("/html/body/div/div/div[2]")).getText().then(function(value){

                return value
            })

            resulttest.should.equal(ress[test]);

            await driver.quit();
            
        });

    }
    
});


