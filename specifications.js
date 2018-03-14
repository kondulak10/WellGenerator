var specs = [
  {
    title: "WelSpecs: 2551",
    desc: "General specification data for wells",
    key: "WELSPECS",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Name of group",
        desc: "",
        type: "String",
      },
      {
        title: "Location 1",
        desc: "",
        type: "Number",
      },
      {
        title: "Location 2",
        desc: "",
        type: "Number",
      },
      {
        title: "Reference depth for bottom hole pressure",
        desc: "",
        type: "Number",
      },
      {
        title: "Preffered phase for the well",
        desc: "OIL/WATER/GAS/LIQ",
        type: "String",
      },
      {
        title: "Drainage radius",
        desc: "",
        type: "Number",
      },
      {
        title: "Automatic shut in",
        desc: "",
        type: "String",
      },
      {
        title: "Cross flow ability",
        desc: "STOP/SHUT",
        type: "String",
      },
      {
        title: "Pressure table number",
        desc: "Yes/No",
        type: "String",
      },
      {
        title: "Type of desnsity",
        desc: "",
        type: "Number",
      },
      {
        title: "Fluids in place",
        desc: "",
        type: "Number",
      }
    ]
  },
  {
    title: "COMPDAT: 462",
    desc: "Well completion specification data",
    key: "COMPDAT",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Location 1",
        desc: "",
        type: "Number",
      },
      {
        title: "Location 2",
        desc: "",
        type: "Number",
      },
      {
        title: "Location of upper connecting block",
        desc: "",
        type: "Number",
      },
      {
        title: "Location of lower connecting block",
        desc: "",
        type: "Number",
      },
      {
        title: "Open/shut flag",
        desc: "OPEN/SHUT",
        type: "String",
      },
      {
        title: "Saturation table number",
        desc: "",
        type: "Number",
      },
      {
        title: "Transmissibility factor for the connection",
        desc: "",
        type: "Number",
      },
      {
        title: "Well bore diameter at the connection",
        desc: "",
        type: "Number",
      },
      {
        title: "Effective Kh",
        desc: "",
        type: "Number",
      },
      {
        title: "Skin factor",
        desc: "",
        type: "Number",
      },
      {
        title: "D-factor",
        desc: "",
        type: "Number",
      },
      {
        title: "Direction well penetrates the block",
        desc: "",
        type: "String",
      },
      {
        title: "Pressure equivalent radius",
        desc: "",
        type: "Number",
      }
    ]
  },
  {
    title: "COMPLUMP: 488",
    desc: "Lumps connections for automatic workowers",
    key: "COMPLUMP",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Location 1",
        desc: "",
        type: "Number",
      },
      {
        title: "Location 2",
        desc: "",
        type: "Number",
      },
      {
        title: "Location of upper connecting block",
        desc: "",
        type: "Number",
      },
      {
        title: "Location of lower connecting block",
        desc: "",
        type: "Number",
      },
      {
        title: "Completition number of the connections",
        desc: "",
        type: "Number",
      },

    ]
  },
  {
    title: "WCONPROD: 2451",
    desc: "Control data for production wells",
    key: "WCONPROD",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Open/shut flag",
        desc: "OPEN/STOP/SHUT/AUTO",
        type: "String",
      },
      {
        title: "Control mode",
        desc: "PRAT/WRAT/...",
        type: "String",
      },
      {
        title: "Oil rate target",
        desc: "",
        type: "Number",
      },
      {
        title: "Water rate target",
        desc: "",
        type: "Number",
      },
      {
        title: "Liquid rate target",
        desc: "",
        type: "Number",
      },
      {
        title: "Reservois fludi volume rate target",
        desc: "",
        type: "Number",
      },
      {
        title: "BHP target",
        desc: "",
        type: "Number",
      },
      {
        title: "THP target",
        desc: "",
        type: "Number",
      },
      {
        title: "Production well VPF",
        desc: "",
        type: "Number",
      },
      {
        title: "Artifical lift quantity",
        desc: "",
        type: "Number",
      },
      {
        title: "Wet gas production rate",
        desc: "",
        type: "Number",
      },
      {
        title: "Total moral rate target",
        desc: "",
        type: "Number",
      },
      {
        title: "Steam production rate target",
        desc: "",
        type: "Number",
      },

    ]
  },
  {
    title: "WECON: 2475",
    desc: "Economit limit data for production wells",
    key: "WECON",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Minimum oil production rate",
        desc: "",
        type: "Number",
      },
      {
        title: "Minimum gas production rate",
        desc: "",
        type: "Number",
      },
      {
        title: "Maximum water cut",
        desc: "",
        type: "Number",
      },
      {
        title: "Maximum gas-oil ratio",
        desc: "",
        type: "Number",
      },
      {
        title: "Maximum water-gas ratio",
        desc: "",
        type: "Number",
      },
      {
        title: "Workover procedure on exceeding water cut",
        desc: "",
        type: "String",
      },
      {
        title: "End run flag",
        desc: "YES/NO",
        type: "String",
      },
      {
        title: "Name of well to open",
        desc: "String",
        type: "",
      },
      {
        title: "Quantuatity to limits",
        desc: "",
        type: "Number",
      },
    ]
  },
  {
    title: "WEFAC: 2486",
    desc: "Economit limit data for production wells",
    key: "WEFAC",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Efficiency factor",
        desc: "",
        type: "Number",
      },
      {
        title: "Extended network option",
        desc: "",
        type: "String",
      },
    ]
  },
  {
    title: "WTEST: 2731",
    desc: "Instructions for periodic testing of closed wells",
    key: "WTEST",
    body: [
      {
        title: "Name",
        desc: "",
        type: "String",
      },
      {
        title: "Testing interval",
        desc: "",
        type: "Number",
      },
      {
        title: "Closure reasons",
        desc: "",
        type: "String",
      },
      {
        title: "Number of times to test",
        desc: "",
        type: "Number",
      },
      {
        title: "Start up time",
        desc: "",
        type: "Number",
      },
    ]
  },
]

function generateTables() {
  var $app = $(".app .content");
  for (var i = 0; i < specs.length; i++) {
    var cur = specs[i];
    var container = `
  <div class="_wellConfig" id="`+ cur.key + `">
    <h3>`+ cur.title + `</h3>
    <div class="_controlRows">
      <div class="btn btn-primary _addCopiedRow btn-mini">
        Add copied row
      </div>
      <div class="btn btn-primary _addRow btn-mini">
        Add row
      </div>
      <div class="btn btn-default _removeRow btn-mini">
        Remove row
      </div>
      <span class="desc">`+ cur.desc + `</span><br>
    </div>
    <table class="table table-striped fixed" style="margin: 5px 0 0 0">
      <thead>
        <tr class="title">
        `+ getTitle(cur.body) + `
        </tr>
        <tr class="desc">
        `+ getDesc(cur.body) + `
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  `;
    $app.append(container);

  }

  function getTitle(body) {
    var html = "";
    for (let t of body) {
      html += `
        <td>`+ t.title + `</td>
      `
    }
    return html;
  }

  function getDesc(body) {
    var html = "";
    var i = 1;
    for (let t of body) {
      html += `
        <td>`+ i + ") " + t.desc + ` <span class="smaller">` + t.type + `</span></td>
      `
      i++;
    }
    return html;
  }
}