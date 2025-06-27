var doodad = 0;
var doodad = parseInt(localStorage.getItem("doodads")) || 1;
var columns = {
    building : parseInt(localStorage.getItem("building")) || 1,
    clickpower : parseInt(localStorage.getItem("clickpower")) || 1,
    pirates : parseInt(localStorage.getItem("pirates"))  || 1,
    minions : parseInt(localStorage.getItem("minions"))  || 1
};
var prices = {
    building : 100,
    clickpower : 50,
    pirates : 400,
    minions : 10
};

function onReady(){
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
    document.getElementById("buildingCounter").innerHTML = "buildings owned = " + (columns["building"] - 1);
    document.getElementById("clickpowerCounter").innerHTML = "click power = " + (columns["clickpower"] - 1);
    document.getElementById("piratesCounter").innerHTML = "ship sailing = " + (columns["pirates"] - 1);
    document.getElementById("minionsCounter").innerHTML = "minions scheming = " + (columns["minions"] - 1);
}

function clickBtn() {
    doodad += columns["clickpower"];
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
}

function buy(type, own_label, price_label) {
    var price = pricecalc(type)
    if(doodad > price||doodad == price){
        doodad -= price;
        columns[type] += 1;
        update_count(type, own_label, price_label)
    }
}

function buybuilding() {
    buy("building", "buildings owned =", "building price = ")
}
function buyclickpower() {
    buy("clickpower", "click power =", "click price = ")
}
function buypirates() {
    buy("pirates", "ship sailing =", "Ship price = ")
}
function buyminions() {
    buy("minions", "minions scheming =", "minion price = ")
}
function pricecalc(type){
    var base_cost = prices[type]
    var count = columns[type]
    var return_price = (base_cost * Math.pow(1.1, count - 1))
    console.log(return_price)
    return(Math.round(return_price))

}

function update_count(type, collected_amount, type_price){
    console.log(type)
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
    document.getElementById(type+"Counter").innerHTML = collected_amount + (columns[type] - 1);
    document.getElementById(type+"button").innerHTML = type_price + pricecalc(type);    
}

setInterval(() => {
console.log(doodad)
doodad += columns["building"] - 1
doodad += (columns["pirates"] - 1) * 6
doodad += (columns["pirates"] - 1) * 2
localStorage.setItem("doodads", doodad)
localStorage.setItem("building", columns["building"])
localStorage.setItem("clickpower", columns["clickpower"])
localStorage.setItem("pirates", columns["pirates"])
localStorage.setItem("minions", columns["minions"])
console.log(localStorage)
document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
}, 1000);