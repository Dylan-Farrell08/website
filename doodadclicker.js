var doodad = 0;
var building = 0;
var clickpower = 1;
var pirates = 0;
function clickBtn() {
    doodad += clickpower;
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
}
function buybuilding() {
    if(doodad > (100 * 1.2 ^ (building))||doodad == (100 * 1.2 ^ (building))){
        doodad -= 100 * 1.2 ^ (building);
        building += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("buildingbutton").innerHTML = "buildings collected = " + building;
        document.getElementById("buildingCounter").innerHTML = "doodadbuilding price = " + ((100 * 1.2) ^ (building));
    }
}
function buyclickpower() {
    if(doodad > (50 * (1.1 ^ clickpower))||doodad == (50 * (1.1 ^ clickpower))){
        doodad -= (50 * (1.1 ^ clickpower));
        clickpower += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("clickpowerCounter").innerHTML = "clickpower collected = " + clickpower;
        document.getElementById("clickbutton").innerHTML = "clickstrength price = " + (50 * (1.1 ^ clickpower));
    }
}
function buypirates() {
    if(doodad > ((400 * 1.1) ^ (pirates))||doodad == ((400 * 1.1) ^ (pirates))){
        doodad -= ((400 * 1.1) ^ (pirates));
        pirates += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("pirateCounter").innerHTML = "pirates sailing = " + pirates;
        document.getElementById("piratesbutton").innerHTML = "ship price = " + ((400 * 1.1) ^ (pirates));
    }
}
setInterval(() => {
doodad += building
doodad += pirates * 6
document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
document.getElementById("buildingCounter").innerHTML = "buildings collected = " + building;
}, 1000);