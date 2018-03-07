function generateFinalString() {
  var finalString = "";
  //WELL SPECS
  for (let spec of specs) {
    //start specs
    finalString += spec.key + "\r\n";
    //get data
    for (let tr of $("#"+spec.key).find("tbody tr")) {
      var tds = $(tr).find("td");
      for (var i = 0; i < tds.length; i++) {
        var $td = $(tds[i]);
        var val = $td.find("input").val();
        if (val != "") {
          var type = $td.find("input").attr("typeattr");
          if (type == "String") {
            finalString += "'" + val + "' ";
          }
          else if (type == "Number"){
            finalString += val + " ";
          }
          else {
            alert("Unknown type generate");
          }
        }
        else {
          finalString += "1* ";
        }
      }
      finalString += "/\r\n"
    }


    finalString += "/\r\n\r\n";
  }

  return finalString;
}