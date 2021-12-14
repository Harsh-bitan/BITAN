var selectedRow = null


function onSubmit(){

    
    
    var formdata=readData();
    if (selectedRow == null)
        {
            
               insertRecord(formdata);
        }
    
    else
        {
                 updateRecord(formdata);  
        }




}

function readData() {
    var formdata ={}
    formdata["customer"]= document.getElementById("customer").value;
    formdata["address"]= document.getElementById("address").value;
    formdata["country"]= document.getElementById("country").value;
    formdata["tax"]= document.getElementById("tax").value;
    formdata["date"]= document.getElementById("date").value;
    formdata["contact"]= document.getElementById("contact").value;
    return formdata;
}

function resetForm() {
    document.getElementById("customer").value = "";
    document.getElementById("address").value = "";
    document.getElementById("country").value = "";
    document.getElementById("tax").value = "";
    document.getElementById("date").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}




function insertRecord(data) {
   
    var table = document.getElementsByTagName("tbody")[0];
    var newRow= table.insertRow(table.length);
  
  
    var cell1=newRow.insertCell(0)
    cell1.innerHTML ="#" ;
    

    var cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.customer;

    var cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.address;

    var cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.country;

    var cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.tax;

    var cell6 = newRow.insertCell(5)
    cell6.innerHTML = data.date;

    var cell7 = newRow.insertCell(6)
    cell7.innerHTML = data.contact;

    var cell8 = newRow.insertCell(7)
    cell8.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button> `;
    resetForm();
//     var cell9 = newRow.insertCell(8)
//     cell8.innerHTML = `<button onClick='onEdit(this)'>Edit</button> `;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("customer").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("country").value = selectedRow.cells[3].innerHTML;
    document.getElementById("tax").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[6].innerHTML;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emprec").deleteRow(row.rowIndex);
       
    }
    resetForm();
}

function updateRecord(formData) {
    
    selectedRow.cells[1].innerHTML = formData.customer;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.tax;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.contact;
    resetForm();
}

