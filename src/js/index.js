import TestJS from './TestJs';
import getJSON from './getJSON';

TestJS();
getJSON('http://localhost:8000/api/v1/cities',
    function(err,records){
    if(err !== null){
        alert('Something went wrong: ' + err);
    } else{
        let table = document.querySelector("table");
        let data = Object.keys((records.data[0]));
        let dataRecords = records.data;
        generateTableHead(table, data);
        generateTable(table, dataRecords);
    }

    console.log(data);
});
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        let key;
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}