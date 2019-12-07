// from data.js
var tableData = data;

// YOUR CODE HERE!
function productsAdd() {

    tableData.forEach(function(ufoRow) {
        $("#ufo-table tbody").append(
            "<tr>" +
            `<td>${ufoRow.datetime}</td>` +
            `<td>${ufoRow.city[0].toUpperCase() + ufoRow.city.slice(1)}</td>` +
            `<td>${ufoRow.state.toUpperCase()}</td>` +
            `<td>${ufoRow.country.toUpperCase()}</td>` +
            `<td>${ufoRow.shape[0].toUpperCase() + ufoRow.shape.slice(1)}</td>` +
            `<td>${ufoRow.durationMinutes}</td>` +
            `<td>${ufoRow.comments}</td>` +
            "</tr>"
        );
    });
}


function searchDate() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchCity() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("city");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchState() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("state");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchCountry() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("country");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchShape() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("shape");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function() {
    productsAdd();
});