

function init()  {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) =>{
       
        
        console.log(data)
        console.log("hello world")

        var subjectID = data.names;
        console.log(subjectID)
        subjectID.forEach((ID) => {
            selector
            .append('option')
            .text(ID)
            .property('value', ID);
        });
        
        const firstbutton = subjectID[0];
        updateCharts(firstbutton);
        updateMetadata(firstbutton);
    });
}

function updateCharts(sample)  {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
        var result = filterArray[0];
        var sample_values = result.sample_values;
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var trace = {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
         
        };
        
        
        
        var data = [trace];
        var layout = {
            title:'TOP 10 OPERATIONAL TAXONOMIC UNITS',
            font: {
                 family: 'Raleway, sans-serif'
            },
            showlegend: false,
            xaxis: {
                tickangle:-45
            },
            yaxis:{
                zeroline:false,
                gridwidth: 2
            },
            bargap :0.05
        };

        Plotly.newPlot("bar", data, layout);
    });
}

function updateMetadata(sample)  {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var filterArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = filterArray[0];
        var metaPanel = d3.select("#sample-metadata");
        metaPanel.html("");
        Object.entries(result).forEach(([key, value]) => 
            metaPanel.append("h6").text(`${key.toUpperCase()}: ${value}`)
    
            )})
        }

       
        
    
    init();