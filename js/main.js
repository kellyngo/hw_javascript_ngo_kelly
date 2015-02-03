var iceCream = ["cookie dough", "mint chocolate chip", "rocky road"];
iceCream.push("cookies and cream");

var barackObama = {
    firstName: "Barack",
    lastName: "Obama",
    termLength: "8 years",
    party: "D",
    yearsOfPresidency: 7
};

var georgeBush = {
    firstName: "George",
    lastName: "Bush",
    termLength: "8 years",
    party: "R",
    yearsOfPresidency: 8
};

var billClinton = {
    firstName: "William",
    lastName: "Clinton",
    termLength: "8 years",
    party: "D",
    yearsOfPresidency: 8
};

var hwBush = {
    firstName: "George",
    lastName: "Bush",
    termLength: "4 years",
    party: "R",
    yearsOfPresidency: 4
};

var ronaldReagan = {
    firstName: "Ronald",
    lastName: "Reagan",
    termLength: "8 years",
    party: "R",
    yearsOfPresidency: 8
};

var presidents = [barackObama, georgeBush, billClinton, hwBush, ronaldReagan];

console.log( presidents[2].firstName + " " + presidents[2].lastName );
