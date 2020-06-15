// from data.js
var tableData = data;

// How to access tbody?
// Loop through the data
// Take each property in the data
// Append each property to it's corresponding table column


// console.log(data);

var tbody = d3.select("tbody");
// Loop through and access each object in the tableArray

tableData.forEach(function (row) {
    var tr = tbody.append("tr");
    var vals = Object.values(row);
    vals.forEach(function (val) {
        var td = tr.append("td");
        td.text(val);
    })
})

var button = d3.select('#filter-btn');
button.on('click', function () {
    tbody.html("");
    var fDate = d3.select('#datetime').property('value');
    console.log(fDate);
    var inputDate = tableData.filter(x => x.datetime === fDate);
    console.log(inputDate);
    inputDate.forEach(function (row) {
        var tr = tbody.append("tr");
        var vals = Object.values(row);
        vals.forEach(function (val) {
            var td = tr.append("td");
            td.text(val);
        });
    })
});
