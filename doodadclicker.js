var doodad = 0;
var building = 0;
var clickpower = 1;
function clickBtn() {
    doodad += clickpower;
    document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
}
function buybuilding() {
    if(doodad > 100*(building * 1.33)||doodad == 100*(building * 1.33)){
        doodad -= 100 * (building * 1.33);
        building += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("buildingCounter").innerHTML = "building collected = " + building;
        document.getElementById("buildingbutton").innerHTML = "foodadbuilding price = " + 100 * (building * 1.33);
    }
}
function buyclickpower() {
    if(doodad > 50||doodad == 50){
        doodad -= 50;
        clickpower += 1;
        document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
        document.getElementById("clickpowerCounter").innerHTML = "clickpower collected = " + clickpower;
        document.getElementById("clickbutton").innerHTML = "clickstrength price = " + 50;
    }
}

setInterval(() => {
doodad += building
document.getElementById("doodadCounter").innerHTML = "amount collected = " + doodad;
document.getElementById("buildingCounter").innerHTML = "building collected = " + building;
}, 1000);