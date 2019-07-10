const menuIconEl = $('.menu-icon')
const sideNavEl = $('.sidenav')
const sidenavCloseEl = $('.sidenav_close-icon')

function toggleClassName(el, className){
    
    if(el.hasClass(className)){
        el.removeClass(className);
    } else{
        el.addClass(className)
    }
    
}

menuIconEl.on('click', function(){
    toggleClassName(sideNavEl, 'active');
    
});

sidenavCloseEl.on('click', function(){
    toggleClassName(sideNavEl, 'active');
    
});

//window.onload = function () {
//
//// Construct options first and then pass it as a parameter
//var options1 = {
//	animationEnabled: true,
//	title: {
//		text: "Chart inside a jQuery Resizable Element"
//	},
//	data: [{
//		type: "column", //change it to line, area, bar, pie, etc
//		legendText: "Try Resizing with the handle to the bottom right",
//		showInLegend: true,
//		dataPoints: [
//			{ y: 10 },
//			{ y: 6 },
//			{ y: 14 },
//			{ y: 12 },
//			{ y: 19 },
//			{ y: 14 },
//			{ y: 26 },
//			{ y: 10 },
//			{ y: 22 }
//			]
//		}]
//};
//
//$("#grubgraphcont").resizable({
//	create: function (event, ui) {
//		//Create chart.
//		$("#grubgraph").CanvasJSChart(options1);
//	},
//	resize: function (event, ui) {
//		//Update chart size according to its container size.
//		$("#grubgraph").CanvasJSChart().render();
//	}
//});
//
//}

function onUpload(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(document.getElementById('inputGroupFile01').files[0]);
}

function onReaderLoad(event){
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);
    // alert_data(obj.sun.t0800, obj.merperson.KP);
    // alert(obj.sun.t0800)
    alert(obj.sales.length)
    loadStackedColumn(obj)
    //loadLineTime(obj)
    //loadLineDOTW(obj)
}


// CanvasJS Stacked Column Chart based on https://canvasjs.com/docs/charts/chart-types/html5-stacked-column-chart/
function loadStackedColumn(obj) {
    console.log("loadcolumn")
	var chart = new CanvasJS.Chart("grubgraph0",
	{
		title:{
			text: "Krusty Insights"
		},
		axisY:{
			title:"Burgers sold",
			valueFormatString: "#",
        },
        axisX:{
            title:"Customer Species"
        },
		data: [
            {
                type: "stackedColumn",
                legendText: "Krusty Combo",
                showInLegend: "true",
                dataPoints: [
                    {  y: obj.burger_by_species['Krusty Combo']['leatherback turtle'],     label: "LB Turtle"},
                    {  y: obj.burger_by_species['Krusty Combo']['salmon'],     label: "Salmon"},
                    {  y: obj.burger_by_species['Krusty Combo']['seahorse'],     label: "Seahorse"},
                    {  y: obj.burger_by_species['Krusty Combo']['coral'],    label: "Coral"},
                    {  y: obj.burger_by_species['Krusty Combo']['giant clam'],     label: "Giant Clam"},
                    {  y: obj.burger_by_species['Krusty Combo']['gray whale'],     label: "Gray Whale"},
                    {  y: obj.burger_by_species['Krusty Combo']['sea lion'],     label: "Sea Lion"},
                ]
            },  
            {
                type: "stackedColumn",
                legendText: "Krabby Pattie",
                showInLegend: "true",
                    dataPoints: [
                    {  y: obj.burger_by_species['Krabby Pattie']['leatherback turtle'],     label: "LB Turtle"},
                    {  y: obj.burger_by_species['Krabby Pattie']['salmon'],     label: "Salmon"},
                    {  y: obj.burger_by_species['Krabby Pattie']['seahorse'],     label: "Seahorse"},
                    {  y: obj.burger_by_species['Krabby Pattie']['coral'],    label: "Coral"},
                    {  y: obj.burger_by_species['Krabby Pattie']['giant clam'],     label: "Giant Clam"},
                    {  y: obj.burger_by_species['Krabby Pattie']['gray whale'],     label: "Gray Whale"},
                    {  y: obj.burger_by_species['Krabby Pattie']['sea lion'],     label: "Sea Lion"},
                ]
            },  
            {
                type: "stackedColumn",
                legendText: "Krabby Deluxe",
                showInLegend: "true",
                indexLabel: "#total",
                yValueFormatString: "#",
                indexLabelPlacement: "outside",
                dataPoints: [
                    {  y: obj.burger_by_species['Krusty Deluxe']['leatherback turtle'],     label: "LB Turtle"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['salmon'],     label: "Salmon"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['seahorse'],     label: "Seahorse"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['coral'],    label: "Coral"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['giant clam'],     label: "Giant Clam"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['gray whale'],     label: "Gray Whale"},
                    {  y: obj.burger_by_species['Krusty Deluxe']['sea lion'],     label: "Sea Lion"},
                ]
            }
        
		]
	});
	chart.render();
}

function loadLineTime(obj){
    var chart = new CanvasJS.Chart("grubgraph1",
    {

      title:{
      text: "Meals sold per hour of day"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { label: '08:00', y: obj.sun.t0800 + obj.mon.t0800 + obj.tue.t0800 + obj.wed.t0800 + obj.thu.t0800 + obj.fri.t0800 + obj.sat.t0800 },
        { label: '09:00', y: obj.sun.t0900 + obj.mon.t0900 + obj.tue.t0900 + obj.wed.t0900 + obj.thu.t0900 + obj.fri.t0900 + obj.sat.t0900 },
        { label: '10:00', y: obj.sun.t1000 + obj.mon.t1000 + obj.tue.t1000 + obj.wed.t1000 + obj.thu.t1000 + obj.fri.t1000 + obj.sat.t1000 },
        { label: '11:00', y: obj.sun.t1100 + obj.mon.t1100 + obj.tue.t1100 + obj.wed.t1100 + obj.thu.t1100 + obj.fri.t1100 + obj.sat.t1100 },
        { label: '12:00', y: obj.sun.t1200 + obj.mon.t1200 + obj.tue.t1200 + obj.wed.t1200 + obj.thu.t1200 + obj.fri.t1200 + obj.sat.t1200 },
        { label: '13:00', y: obj.sun.t1300 + obj.mon.t1300 + obj.tue.t1300 + obj.wed.t1300 + obj.thu.t1300 + obj.fri.t1300 + obj.sat.t1300 },
        { label: '14:00', y: obj.sun.t1400 + obj.mon.t1400 + obj.tue.t1400 + obj.wed.t1400 + obj.thu.t1400 + obj.fri.t1400 + obj.sat.t1400 },
        { label: '15:00', y: obj.sun.t1500 + obj.mon.t1500 + obj.tue.t1500 + obj.wed.t1500 + obj.thu.t1500 + obj.fri.t1500 + obj.sat.t1500 },
        { label: '16:00', y: obj.sun.t1600 + obj.mon.t1600 + obj.tue.t1600 + obj.wed.t1600 + obj.thu.t1600 + obj.fri.t1600 + obj.sat.t1600 },
        { label: '17:00', y: obj.sun.t1700 + obj.mon.t1700 + obj.tue.t1700 + obj.wed.t1700 + obj.thu.t1700 + obj.fri.t1700 + obj.sat.t1700 }
        ]
      }
      ]
    });

    chart.render();
}

function loadLineDOTW(obj){
    var chart = new CanvasJS.Chart("grubgraph2",
    {

      title:{
      text: "Meals sold per day of the week"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { label: 'Sun', y: obj.sun.t0800 + obj.sun.t0900 + obj.sun.t1000 + obj.sun.t1100 + obj.sun.t1200 + obj.sun.t1300 + obj.sun.t1400 + obj.sun.t1500 + obj.sun.t1600 + obj.sun.t1700 },
        { label: 'Mon', y: obj.mon.t0800 + obj.mon.t0900 + obj.mon.t1000 + obj.mon.t1100 + obj.mon.t1200 + obj.mon.t1300 + obj.mon.t1400 + obj.mon.t1500 + obj.mon.t1600 + obj.mon.t1700 },
        { label: 'Tue', y: obj.tue.t0800 + obj.tue.t0900 + obj.tue.t1000 + obj.tue.t1100 + obj.tue.t1200 + obj.tue.t1300 + obj.tue.t1400 + obj.tue.t1500 + obj.tue.t1600 + obj.tue.t1700 },
        { label: 'Wed', y: obj.wed.t0800 + obj.wed.t0900 + obj.wed.t1000 + obj.wed.t1100 + obj.wed.t1200 + obj.wed.t1300 + obj.wed.t1400 + obj.wed.t1500 + obj.wed.t1600 + obj.wed.t1700 },
        { label: 'Thu', y: obj.thu.t0800 + obj.sun.t0900 + obj.sun.t1000 + obj.sun.t1100 + obj.sun.t1200 + obj.sun.t1300 + obj.sun.t1400 + obj.sun.t1500 + obj.sun.t1600 + obj.sun.t1700 },
        { label: 'Fri', y: obj.fri.t0800 + obj.fri.t0900 + obj.fri.t1000 + obj.fri.t1100 + obj.fri.t1200 + obj.fri.t1300 + obj.fri.t1400 + obj.fri.t1500 + obj.fri.t1600 + obj.fri.t1700 },
        { label: 'Sat', y: obj.sat.t0800 + obj.sat.t0900 + obj.sat.t1000 + obj.sat.t1100 + obj.sat.t1200 + obj.sat.t1300 + obj.sat.t1400 + obj.sat.t1500 + obj.sat.t1600 + obj.sat.t1700 }
        ]
      }
      ]
    });

    chart.render();
}