class Student {
  constructor() {
    this.tbody = document.querySelector("tbody");
  }
  // metod render table body
  renderStude(elem, group, obje) {
    // filter
    let elemFiter = elem.filter((e) => {
      return e.group == group;
    });

    for (let key in elemFiter) {
      let item = elemFiter[key][obje];

      item.unshift(elemFiter[key].name);

      //   this.tbody = document.querySelector("tbody");
      const tr = document.createElement("tr");
      item.forEach((element) => {
        const td = document.createElement("td");

        td.innerText = element;

        tr.append(td);
      });
      this.tbody.append(tr);
    }
  }
  // metod render table header
  renderHeader(elemHeader) {
    const thead = document.querySelector("thead");
    let tr = document.createElement("tr");
    elemHeader.forEach((x) => {
      const th = document.createElement("th");
      th.innerText = x;
      tr.append(th);
    });
    thead.append(tr);
  }
  //   metod clear tbody
  clearTable() {
    this.tbody.innerText = "";
  }
  setLabelTable(group, object) {
    if (group == "group_1") {
      labelGroup.innerText = "Группа 1";
    } else if (group == "group_2") {
      labelGroup.innerText = "Группа 2";
    } else if (group == "group_3") {
      labelGroup.innerText = "Группа 3";
    }

    if (object == "object_1") {
      labelPredmet.innerText = "Предмет 1";
      namePrepod.innerText = "Техник. И.К";
    } else if (object == "object_2") {
      labelPredmet.innerText = "Предмет 2";
      namePrepod.innerText = "Философ. А.А";
    } else if (object == "object_3") {
      labelPredmet.innerText = "Предмет 3";
      namePrepod.innerText = "Конфуций Й.Ц.";
    }
  }
}
