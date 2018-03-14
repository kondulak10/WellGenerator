// Reads from input
function loadFile() {
  $("#uploadFile").hide();
  var input, file, fr;
  input = document.getElementById('fileinput');
  file = input.files[0];
  fr = new FileReader();
  fr.onload = receivedText;
  fr.readAsText(file);


  function receivedText() {
    var result = fr.result;
    parseResult(result);
  }
}

// parses lines to json
function parseResult(file) {
  //replace more than 1*
  file3 = file.replace(/10\*/g, "1* 1* 1* 1* 1* 1* 1* 1* 1* 1*");
  file4 = file3.replace(/9\*/g, "1* 1* 1* 1* 1* 1* 1* 1* 1*");
  file5 = file4.replace(/8\*/g, "1* 1* 1* 1* 1* 1* 1* 1*");
  file6 = file5.replace(/7\*/g, "1* 1* 1* 1* 1* 1* 1*");
  file7 = file6.replace(/6\*/g, "1* 1* 1* 1* 1* 1*");
  file8 = file7.replace(/5\*/g, "1* 1* 1* 1* 1*");
  file9 = file8.replace(/4\*/g, "1* 1* 1* 1*");
  file10 = file9.replace(/3\*/g, "1* 1* 1*");
  file11 = file10.replace(/2\*/g, "1* 1*");

  file = file11;

  //remove empties and comments
  var clearedFile = "";
  var lines = file.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] && lines[i].substring(0, 2) != "--") {
      clearedFile += lines[i] + "\n";
    }
  }
  //console.log(clearedFile)

  //split
  var finalJson = {};
  var clearedLines = clearedFile.split('\n');
  var header = ""; //writes to this header in json
  for (var i = 0; i < clearedLines.length; i++) {
    //get header
    if (isHeader(clearedLines[i])) {
      header = clearedLines[i];
      finalJson[header] = [];
    }
    //end file
    else if (isEnd(clearedLines[i])) {
      header = "";
    }
    //parse
    else if (header !== "") {
      //push here in now row of header
      finalJson[header].push([])
      var row = finalJson[header][finalJson[header].length - 1];

      //go through line and split
      var line = clearedLines[i];
      var arr = line.split(/\ +/);

      //empty line
      if (arr.length == 1) {
        finalJson[header].splice(-1,1);
        continue;
      }
      //console.log(header, arr);

      lineParser: for (let a of arr) {
        //default
        if (a == "1*") {
          row.push(null);
        }
        //filled
        else if (a !== "" && a !== " " && a !== "/" && a.substring(0,2) !== "--") {
          //string
          if (a.indexOf("'") >= 0) {
            var temp = a.replace(/'/g, "");
            row.push(temp);
          }
          //number
          else {
            row.push(parseFloat(a));
          }
        }
        //end of line skip
        else if (a === "/" || a === "--") {
          break lineParser;
        }
      }
    }
  }

  checkErrors(finalJson);
  fillInputs(finalJson);

  function isHeader(headerP) {
    var header = headerP.toUpperCase().replace(/\s+/g, "");

    if (
      header === "WELSPECS" ||
      header === "COMPDAT" ||
      header === "COMPLUMP" ||
      header === "WCONPROD" ||
      header === "WECON" ||
      header === "WEFAC" ||
      header === "WTEST"
    ) {
      return true;
    }
    return false;
  }

  function isEnd(strP) {
    var str = strP.replace(/\s+/g, "");
    if (str === "/") {
      return true;
    }
    else {
      return false;
    }
  }
}

// fills inputs
function fillInputs(json) {
  console.log("Final", json)
  for (let obj of Object.keys(json)) {
    var $tbody = $("#" + obj).find("tbody");
    var id = $("#" + obj).attr("id");
    for (var i = 0; i < json[obj].length; i++) {
      generateRow(id, $tbody, json[obj][i])
    }
  }
}
