$(document).ready(function () {
  var doc = new jsPDF();
  var elementHandler = {
    "#ignorePDF": function (element, renderer) {
      return true;
    },
  };
  var source = window.document.getElementsByTagName("body")[0];
  doc.fromHTML(source, 15, 15, {
    width: 800,
    elementHandlers: elementHandler,
  });
  doc.output("dataurlnewwindow");
});
