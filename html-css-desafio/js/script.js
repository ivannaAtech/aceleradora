let rIndex,
  table = document.getElementById('table');

// check the empty input
function checkEmptyInput() {
  let isEmpty = false,
    name = document.getElementById('name').value,
    semestre1 = document.getElementById('semestre1').value,
    semestre2 = document.getElementById('semestre2').value,
    frequencia = document.getElementById('frequencia').value;

  if (name === '') {
    alert('O campo "Nome" não pode está vazio');
    isEmpty = true;
  } else if (semestre1 === '') {
    alert('O campo "1º Semestre" não pode está vazio');
    isEmpty = true;
  } else if (semestre2 === '') {
    alert('O campo "2º Semestre" não pode está vazio');
    isEmpty = true;
  } else if (frequencia === '') {
    alert('O campo "Frequência" não pode está vazio');
    isEmpty = true;
  }
  return isEmpty;
}

// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
    let newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      name = document.getElementById('name').value,
      semestre1 = document.getElementById('semestre1').value,
      semestre2 = document.getElementById('semestre2').value,
      notafinal = document.getElementById('notafinal').value;
    frequencia = document.getElementById('frequencia').value;
    resultado = document.getElementById('resultado').value;

    cell1.innerHTML = name;
    cell2.innerHTML = semestre1;
    cell3.innerHTML = semestre2;
    cell4.innerHTML = notafinal;
    cell5.innerHTML = frequencia;
    cell6.innerHTML = resultado;

    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById('name').value = this.cells[0].innerHTML;
      document.getElementById('semestre1').value = this.cells[1].innerHTML;
      document.getElementById('semestre2').value = this.cells[2].innerHTML;
      document.getElementById('notafinal').value = this.cells[3].innerHTML;
      document.getElementById('frequencia').value = this.cells[4].innerHTML;
      document.getElementById('resultado').value = this.cells[5].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  let name = document.getElementById('name').value,
    semestre1 = document.getElementById('semestre1').value,
    semestre2 = document.getElementById('semestre2').value;
  notafinal = document.getElementById('notafinal').value;
  frequencia = document.getElementById('frequencia').value;
  resultado = document.getElementById('resultado').value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = name;
    table.rows[rIndex].cells[1].innerHTML = semestre1;
    table.rows[rIndex].cells[2].innerHTML = semestre2;
    table.rows[rIndex].cells[3].innerHTML = notafinal;
    table.rows[rIndex].cells[4].innerHTML = frequencia;
    table.rows[rIndex].cells[5].innerHTML = resultado;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById('name').value = '';
  document.getElementById('semestre1').value = '';
  document.getElementById('semestre2').value = '';
  document.getElementById('notafinal').value = '';
  document.getElementById('frequencia').value = '';
  document.getElementById('resultado').value = '';
}

// calculates the average and places it in the "Nota Final" field

let nota01 = document.getElementById('semestre1');
let nota02 = document.getElementById('semestre2');

let media = document.getElementById('notafinal');

semestre2.addEventListener('input', function (event) {
  let valor01 = nota01.valueAsNumber || 0;
  let valor02 = nota02.valueAsNumber || 0;

  media.value = (valor01 + valor02) / 2;
});

// place approved or disapproved in the "Resultado Final" field when the "Frequência" field is filled
frequencia.addEventListener('input', function (event) {
  var frequencia = document.getElementById('frequencia');
  var media = document.getElementById('notafinal');

  var result = document.getElementById('resultado');

  var minapproved = '7';
  var mindisapproved = '75%';

  if (media.value >= minapproved && frequencia.value >= mindisapproved) {
    result.value = "<div class='text-success'>Aprovado</div>";
  } else {
    result.value = "<div class='text-danger'>Reprovado</div>";
  }
});
