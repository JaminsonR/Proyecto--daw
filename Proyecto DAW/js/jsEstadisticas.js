var id = window.location.href.slice(window.location.href.indexOf('?') + 1)
var url = ""
    //Buscar curso selecccionado
    $.getJSON("data/courses.json", function(data) {
            $.each(data, function(key, val) {
                var url = val["calificaciones"];
                if (val["id"] == id){
                  // set the dimensions of the canvas
                  var margin = {top: 40, right: 20, bottom: 30, left: 40},
                      height = ($("#stat").width()*0.5) -  margin.left - margin.right;
                      width = ($("#stat").width()*0.8)  - margin.top - margin.bottom; 
                      console.log(height);
/*
  
*/
                  var formatPercent = d3.format(".0%");
                  // set the ranges
                  var x = d3.scale.ordinal()
                      .rangeRoundBands([0, width], .1);

                  var y = d3.scale.linear()
                      .range([height, 0]);

                  var xAxis = d3.svg.axis()
                      .scale(x)
                      .orient("bottom");

                  var yAxis = d3.svg.axis()
                      .scale(y)
                      .orient("left")
                      .tickFormat(formatPercent);

                  var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .attr('width', '0.1em')
                    .offset([-10, 0])
                    .html(function(d) {
                      return "<strong>Frequency:</strong> <span style='color:red'>" + d.promedio + "</span>";
                    })
                  // add the SVG element
                    var svg = d3.select("#stat").append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                      .attr("transform", 
                            "translate(" + margin.left + "," + margin.top + ")");
                  svg.call(tip);

                  // load the data
                  d3.json(url, function(error, datos) {
                     
                      

                    // scale the range of the data
                    x.domain(datos.map(function(d) { return d.matricula; }));
                    y.domain([0, d3.max(datos, function(d) { return d.promedio; })]);
                    // add axis
                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                      .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", ".6em")
                        .style("text-anchor", "end")
                        .text("Promedio");
                    // Add bar chart
                    svg.selectAll(".bar")
                        .data(datos)
                      .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d) { return x(d.matricula); })
                        .attr("width", x.rangeBand())
                        .attr("y", function(d) { return y(d.promedio); })
                        .attr("height", function(d) { return height - y(d.promedio); })
                        .on('mouseover', tip.show)
                        .on('mouseout', tip.hide)

                  });
                }
              });
          });



//no se usa pero por si acaso
function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
        }


