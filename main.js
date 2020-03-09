// EDIT THE FOLLOWING 3 VARS.
var watchstones = 3; // amount of watchstones
var minTier = 14; // min tiers to show
var regions = ["Glennach Cairns", "Haewark Hamlet"]; // this will show all maps in these regions, ignores minTier. 
var goodMaps = ["Fungal Hollow Map","Beach Map","Glacier Map","Excavation Map","Infested Valley Map","Channel Map","Shore Map","Coves Map","Pier Map","Mesa Map","Mud Geyser Map","Crater Map","Burial Chambers Map","Lookout Map","Peninsula Map","Promenade Map","Jungle Valley Map","Haunted Mansion Map","Cemetery Map","Ashen Wood Map","Belfry Map","Arid Lake Map","Underground Sea Map","Volcano Map","Dunes Map","Bog Map","Port Map","Crystal Ore Map","Plateau Map","Underground River Map","Moon temple Map","Park Map","Courthouse Map","Defiled Cathedral Map","Relic Chambers Map","Toxic Sewer Map","Siege Map","Estuary Map","Tower Map","Dark Forest Map","Lair Map","Caldera Map","Canyon Map","Crimson Temple Map","Carcass Map"]; // choose what maps you deem "good".


// don't edit below this line.
var string = [];
var mapListObj = [];

function init(){
    $('#Mapmap_listtier-1 > table > tbody > tr').each(function(index) { 
        var mapList = $(this).find('td').eq(3).text().split(",");
        if (!$(this).find('td').eq(2).find('a').filter($(".item_unique")).text()) {
            if(mapList[watchstones] >= minTier){string.push($(this).find('td').eq(2).text());} 
            else if (regions.indexOf($(this).find('td').eq(5).text()) !== -1) {string.push($(this).find('td').eq(2).text());}  
            if (goodMaps.indexOf($(this).find('td').eq(2).text()) !== -1) {
                mapListObj.push({"Name": $(this).find('td').eq(2).text(), "Tier": parseInt(mapList[4]), "Region": $(this).find('td').eq(5).text()});   
            }
        } 
     });
}

function skipMapList(){
    init();
    string = [...new Set(string)];
    return console.log(string.toString().split(',').join("\r\n"));
}

function mapList(){
    init();
    var objArr = [];
    Object.entries(mapListObj).forEach((entry) => {
        objArr.push(entry[1]['Name'] + "\t" + entry[1]['Tier'] + "\t" + entry[1]['Region'])
    })
    return console.log(objArr.toString().split(',').join("\r\n"));
}

/* choose which one you want to run.
mapList = Give you a list of all "good maps", their regions and their tiers.
skipMpaList = Give you a total of list of all maps at a specified tier + 2 full regions.

*/

mapList();
//skipMapList()
