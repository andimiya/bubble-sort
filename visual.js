//declaring function that draws the bar chart
function drawChart (dataStep) {
  var x = d3.scale.linear()
      .domain([0, d3.max(dataStep)])
      .range([0, 320]);

  d3.select('.chart')
    .selectAll('div')
      .data(dataStep)
    .enter().append('div')
      .style('width', function(d) { return x(d) + 'px'; })
      .text(function(d) { return d; });
}

drawChart(data);

//declaring the function that clears the bar chart
function clearChart() {
  d3.select('.chart').html('');
}

var time = 0;

//this function is used within the for loop to animate the sorting
function drawLater(delay, newArrayState) {
  setTimeout(function() {
    clearChart();
    drawChart(newArrayState);
  }, delay * 25 );
}

