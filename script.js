var hide = true;
$(() => {

  //generate tables
  generateTables();


  //buttons
  generateButtons();

  //show hide
  extraButtons();

  //init hide 
  if (hide) {
    $("._controlRows").hide();
    $("thead").hide();
  }

  //prevent refresh
  window.onbeforeunload = function () {
    return "Are you sure you want to refresh? You will lose all unsaved data";
  }
});

function generateRow(idP, $tbody, values) { //values if should be filled
  //get from spec
  for (let spec of specs) {
    if (spec.key == idP) {
      $tbody.append("<tr></tr>");
      var $lastRow = $tbody.find("tr:last-child");
      for (var i = 0; i < spec.body.length; i++) {
        //get input
        var type = spec.body[i].type.toLowerCase();
        var $input = $(`
        <td>
          <input type="`+ type + `" typeAttr="` + spec.body[i].type + `">
          </td>
        `);

        $input.appendTo($lastRow);

        //add value if any
        if (values && values[i] && values[i] !== "undefined") {
          $input.find("input").attr("value", values[i]);
        }
      }
    }
  }
}

function generateCopiedRow(id, $tbody) {
  var $previousRow = $tbody.find("tr:last-child")[0]
  if ($previousRow) {
    $tbody.append("<tr>" + $previousRow.innerHTML + "</tr>");
  }
  else {
    generateRow(id, $tbody);
  }
}

function removeRow($tbody) {
  $tbody.find("tr:last-child").remove();
}

function generateButtons() {
  $("._addRow").on("click", (event) => {
    var id = $(event.target).parent().parent().attr("id");
    //var fields = $("#"+id).find("thead tr:nth-child(1) td").length;
    var $tbody = $("#" + id).find("tbody");
    generateRow(id, $tbody);
  })

  $("._addCopiedRow").on("click", (event) => {
    var id = $(event.target).parent().parent().attr("id");
    //var fields = $("#"+id).find("thead tr:nth-child(1) td").length;
    var $tbody = $("#" + id).find("tbody");
    generateCopiedRow(id, $tbody);
  })

  $("._removeRow").on("click", (event) => {
    var id = $(event.target).parent().parent().attr("id");
    var $tbody = $("#" + id).find("tbody");
    removeRow($tbody);
  })

  $("#createFile").on("click", () => {
    createFile();
  })
}

function createFile() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = mm + '-' + dd + '-' + hour + "-" + minute;
  var name = $("#nameFile").val();
  var finalName = name + "_" + today;

  var finalString = "";
  finalString = generateFinalString();
  var blob = new Blob([finalString], { type: "text/plain;charset=utf-8" });
  saveAs(blob, finalName + ".txt"); //TODO: uncomment

}

function extraButtons() {
  $("#showHide").on("click", function () {
    if (hide) {
      $("._controlRows").show();
      $("thead").show();
      hide = false;
    }
    else {
      $("._controlRows").hide();
      $("thead").hide();
      hide = true;
    }
  })

  $("#checkErrors").on("click", function () {
    checkErrors();
  });
}