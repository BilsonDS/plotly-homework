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


function panelPlot(valueSelect)  {

    var filterValue = data.metadata.filter(value => value.id == valueSelect);
    



