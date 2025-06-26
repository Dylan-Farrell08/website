var doodad = 0;
var columns = {
    building : 0,
    clickpower : 1,
    pirates : 0
};
var prices = {
    building : 100,
    clickpower : 50,
    pirates : 400
};

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
    document.getElementById(type+"Counter").innerHTML = collected_amount + columns[type];
    document.getElementById(type+"button").innerHTML = type_price + pricecalc(type);    
}

setInterval(() => {
console.log(columns["building"])
doodad += columns["building"]
doodad += columns["pirates"] * 6
document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
document.getElementById("buildingCounter").innerHTML = "buildings collected = " + columns["building"];
}, 1000);