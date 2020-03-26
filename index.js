//First item in array position is the main menu, others a are sub-menu
var menuItems = [
    ["one","11","12","13"],
    ["two","21","22","23","24"],
    ["three","31","32"]
];


// Column One - Generate main menu
let menuCode = "";
var navClass = "";
for ( var i = 0; i < menuItems.length; i++) {
    menuCode = menuCode + `<a class= "nav-link" id="columnOneOption` + i + `" data-toggle="pill" href="#columnTwoSection` + i + `" role="tab" aria-controls="columnOneOption` + i + `" aria-selected="true">`+menuItems[i][0]+`</a>`;
};
let columnOne = document.getElementById("columnOne");
columnOne.innerHTML = `
    <div class="nav flex-column nav-pills" id="columnOneMenu" role="tablist" aria-orientation="vertical"> ` 
        + menuCode + `
    </div>`;


// Column Two - Generate sub-menu
let columnTwoSection ="";

for ( var o = 0; o < menuItems.length; o++) {
    let subMenuCode = "";
    for ( var i = 0; i < (menuItems[o].length-1); i++) {
        subMenuCode = subMenuCode + `<a class="nav-link" id="columnTwoOption` + o+i + `" data-toggle="pill" href="#columnThreeSection` + o+i + `" role="tab" aria-controls="columnTwoOption` + i + `" aria-selected="true">`+menuItems[o][i+1]+`</a>`;
    };
    columnTwoSection = columnTwoSection + `<div class="tab-pane fade" id="columnTwoSection`+ o + `" role="tabpanel" aria-labelledby="columnTwoSection`+ o + `"
    ><div class="nav flex-column nav-pills" id="columnTwoMenu` +o+`" role="tablist" aria-orientation="vertical">`+subMenuCode+`</div></div>`;
};

let columnTwo = document.getElementById("columnTwo");
columnTwo.innerHTML = `
    <div class="tab-content" id="columnTwoMenu"> ` 
        + columnTwoSection + `
    </div>`;

// Column Three - Generate page sections 
let columnThreeSection ="";
for ( var o = 0; o < menuItems.length; o++) {
    
    for ( var i = 0; i < (menuItems[o].length-1); i++) {
        columnThreeSection = columnThreeSection + `<div class="tab-pane fade" id="columnThreeSection` + o+i + `" role ="tabpanel" aria-labelledby="columnThreeSection` + o+i + `">Three`+o+i+`</a></div>`;
    };
};

//let columnThree = document.getElementById("columnThree");
//columnThree.innerHTML = `
//    <div class="tab-content" id="columnThreeSections"> ` 
//        + columnThreeSection + `
//    </div>`;


