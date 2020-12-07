//variable

var data;

function init()  {
    d3.json("data/samples.json").then(dataInitial =>  {
        data = dataInitial;
        var selectValues = dataInitial.names;

        var selectOpt = d3.select("#selDataset");

        selectValues.forEach(value =>  {
            selectOpt
            .append("option")
            .text(value)
            .attr("value", function () {
                return value;
            });
        });
    });
}

// add data

d3.selectAll("#selDataset").on("change", plotFunctions);

function plotFunctions() {
    var valueSelect = d3.select("#selDataset").node().value;
    demographicFunc(valueSelect);
    panelPlot(valueSelect);
    demographicFunc(valueSelect);
    bubbleChart(valueSelect);
    gaugeChart(valueSelect);
}

function demographicFunc(valueSelect)  {
    var filterValue = data.samples.filter(value => value.id == valueSelect);
    var otuids = filterValue.map(v => v.otu_ids);
    




function panelPlot(valueSelect)  {

    var filterValue = data.metadata.filter(value => value.id == valueSelect);

    var divValue = d3.select(".panel-body");
    divValue.html("");
    divValue.append("p").text('id: ${filterValue[0].id}');
    divValue.append("p").text('ethnicity: ${filterValue[0].ethnicity}');
    divValue.append("p").text('gender: ${filterValue[0].gender}');
    divValue.append("p").text('age: ${filterValue[0].age}');
    divValue.append("p").text('location: ${filterValue"[0].location}');
    divValue.append("p").text('bbtype: ${filterValue[0].bbtype}');
    divValue.append("p").text('wfreq: ${filterValue[0].wfreq}');
    console.log(valueSelect)
}






