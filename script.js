
$(() => {
  //generate tables
  generateTables();


  //buttons
  generateButtons();
});

function generateRow(id, $tbody, length) {
  //get from spec
  for (let spec of specs) {
    if (spec.key == id) {
      $tbody.append("<tr></tr>");
      var $lastRow = $tbody.find("tr:last-child");
      for (var i = 0; i < spec.body.length; i++) {
        var input = `
        <td>
          <input type="text" typeAttr="`+spec.body[i].type+`">
          </td>
        `
        $lastRow.append(input);
      } 
    }
  }
}

function removeRow($tbody) {
  $tbody.find("tr:last-child").remove();
}

function generateButtons(){
  $("._addRow").on("click",(event)=>{
    var id = $(event.target).parent().attr("id");
    var fields = $("#"+id).find("thead tr:nth-child(1) td").length;
    var $tbody = $("#"+id).find("tbody");
    generateRow(id, $tbody, fields);
  })
  $("._removeRow").on("click",(event)=>{
    var id = $(event.target).parent().attr("id");
    var $tbody = $("#"+id).find("tbody");
    removeRow($tbody);
  })

  $("#createFile").on("click",()=>{
    createFile();
  })
}

function createFile() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();
  
  if(dd<10) {
      dd = '0'+dd
  } 
  
  if(mm<10) {
      mm = '0'+mm
  } 
  
  today = mm + '-' + dd + '-' + hour + "-" + minute;
  var name = $("#nameFile").val();
  var finalName = name+"_"+today;

  var finalString = "";
  finalString = generateFinalString();
  var blob = new Blob([finalString], {type: "text/plain;charset=utf-8"});
  saveAs(blob, finalName + ".txt"); //TODO: uncomment

}