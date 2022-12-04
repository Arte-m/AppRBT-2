const selectGroupBtn = document.querySelector("#groupID");
const selectObjBtn = document.querySelector("#objID");
// start render
new Student().renderHeader(dataHeader);
new Student().renderStude(
  dataStudents,
  selectGroupBtn.value,
  selectObjBtn.value
);

selectGroupBtn.addEventListener("change", () => action());

selectObjBtn.addEventListener("change", () => action());

function action() {
  new Student().clearTable();
  new Student().setLabelTable(selectGroupBtn.value, selectObjBtn.value);
  new Student().renderStude(
    dataStudents,
    selectGroupBtn.value,
    selectObjBtn.value
  );
}
