var doodad = 0;
var building = 0;
var clickpower = 1;
function clickBtn() {
    doodad += clickpower;
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
}
function buybuilding() {
    if(doodad > 100 * 1.2 ^ (clickpower)||doodad == 100 * 1.2 ^ (clickpower)){
        doodad -= 100 * 1.2 ^ (clickpower);
        building += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("buildingCounter").innerHTML = "building collected = " + building;
        document.getElementById("buildingbutton").innerHTML = "foodadbuilding price = " + 100 * 1.2 ^ (clickpower);
    }
}
function buyclickpower() {
    if(doodad > (50 * 1.1 ^ (clickpower))||doodad == (50 * 1.1 ^ (clickpower))){
        doodad -= (50 * 1.1 ^ (clickpower));
        clickpower += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("clickpowerCounter").innerHTML = "clickpower collected = " + clickpower;
        document.getElementById("clickbutton").innerHTML = "clickstrength price = " + (50 * 1.1 ^ (clickpower));
    }
}

setInterval(() => {
doodad += building
document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
document.getElementById("buildingCounter").innerHTML = "building collected = " + building;
}, 1000);