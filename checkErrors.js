// from parse file
function checkErrors(json) {
  var error = false;
  //for all object keys
  for (let obj of Object.keys(json)) {
    //for all rows
    for (var y = 0; y < json[obj].length; y++) {
      //for all specification keys
      for (let spec of specs) {
        var id = $("#" + obj).attr("id");
        if (spec.key == id) {
          //check errors
          for (var i = 0; i < spec.body.length; i++) {
            var val = json[obj][y][i];
            var specification = spec.body[i];
            if (val) {
              //string
              if (specification.type == "String") {
                if (typeof val !== "string") {
                  error = true;
                  console.log("Not string", val, specification);
                }
              }
              else if (specification.type == "Number") {
                if (typeof val === "string") {
                  error = true;
                  console.log("Not number", val, specification);
                }
              }
            }
          }
        }
      }
    }

  }
  if (error) {
    alert("check mismatch error of types, check console or contact Jan");
  }
  else {
    console.log("Not errors");
  }
}