//variable

var data;

function init()  {
    d3.json("js/samples.json").then(dataInitial =>  {
       var data = dataInitial;
       
       selectValues = dataInitial.names;

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
init();

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
    otuids = topOtuid(otuids[0].slice(0, 10));
    var valueX = filterValue.map(v => v.sample_values);
    valueX = valueX[0].slice(0, 10);

    var otulabels = filterValue.map(v => v.otu_labels);
    var names = bellyButtonBio(otulabels[0]).slice(0, 10);

    // trace

    var trace = {
        x: valueX,
        y: otuids,
        text: names,
        type: "bar",
        orientation: "h"
    };

    var layout = {
        yaxis: {
            autorange: "reversed"
        }
    };

    //array used for plot
    var dataV = [trace];
    Plotly.newPlot("bar", dataV, layout);
}

function panelPlot(valueSelect)  {
    console.log(valueSelect)

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
    
}
function demographicFunc(valueSelect)
console.log(valueSelect)

function bubbleChart(valueSelect) {
    var filterValue2 = data.samples.filter(value => value.id == valueSelect);
    var otuids = filterValue2.map(v => v.otu_ids);
    otuids = otuids[0];
    var valueY = filterValue2.map(v => v.sample_values);
    valueY = valueY[0];

    var otulabels = filterValue2.map(v => v.otu_labels);
    otu_labels = bellyButtonBio(otu_labels[0]);

    var trace = {
        x: otuids,
        y: valueY,
        mode: "markers",
        marker:  {
            color: otuids,
            size: valueY
        },
        text: otu_labels
    };

    var data2 = [trace];

    var layout = {
        showlegend: false,
        xaxis: { title: " OTU ID"}
    };
    
 
    Plot.ly.newPlot("bubble", data2, layout);
}










