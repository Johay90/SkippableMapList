// EDIT THE FOLLOWING 3 VARS.
var watchstones = 3; // amount of watchstones
var minTier = 14; // min tiers to show
var regions = ["Glennach Cairns", "Haewark Hamlet"]; // this will show all maps in these regions, ignores minTier. 


// don't edit below this line.
var string = [];

$('#Mapmap_listtier-1 > table > tbody > tr').each(function(index) { 
    var mapList = $(this).find('td').eq(3).text().split(",");
    if (!$(this).find('td').eq(2).find('a').filter($(".item_unique")).text()) {
        if(mapList[watchstones] >= minTier){string.push($(this).find('td').eq(2).text());} 
        else if (regions.indexOf($(this).find('td').eq(5).text()) !== -1) {string.push($(this).find('td').eq(2).text());}   
    } 
 });

string = [...new Set(string)];
console.log(string.toString().split(',').join("\r\n"));
