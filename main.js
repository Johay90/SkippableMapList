var watchstones = 3;
var minTier = 14;
var regions = ["Glennach Cairns", "Haewark Hamlet"];

var string = [];

$('#Mapmap_listtier-1 > table > tbody > tr').each(function(index) { 
    var mapList = $(this).find('td').eq(3).text().split(",");
    if (!$(this).find('td').eq(2).find('a').filter($(".item_unique")).text()) {
        if(mapList[watchstones] >= minTier){string.push($(this).find('td').eq(2).text());} 
        else if (regions.indexOf($(this).find('td').eq(5).text()) !== -1) {string.push($(this).find('td').eq(2).text());}   
    } 
 });

console.log(string.toString().split(',').join("\r\n"));
