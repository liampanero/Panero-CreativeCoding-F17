// Final Project

//Row count and table variable
var tableRowCount;
var eduTable;


//Arrays used for local storage a infomation for piecharts
var pieCols = [];
var pieCharts = [];
var pieData = [];

// conditionals variable for data categories displayed
var chartBy;
var chartContent;
var chartSetup = false;

// Arrays with strings of field names to refference instead of always having ot type
var gradPCTFields =[];
var ethnicFields = [];

//Button variable
var NRCButton;
var EthnicityButton;

function preload(){
    //Data from NYSED 2015-2016link here: https://data.nysed.gov/downloads.php
    eduTable = loadTable("assets/GRAD_RATE_AND_OUTCOMES_2015.csv","header");
    
}

function setup(){
    var canvas = createCanvas(600,1200);
    canvas.position(100,100);
    background(50);
    
    tableRowCount = eduTable.getRowCount();
    
    //Setting Pie Piece colors
    pieCols.push(color(255,129,171));
    pieCols.push(color(160,123,232));
    pieCols.push(color(102,203,255));
    pieCols.push(color(92,232,134));
    pieCols.push(color(246,255,143));
    pieCols.push(color(255,142,0));
    
    //field names
    gradPCTFields.push("GRAD_PCT");
    gradPCTFields.push("NON_DIPLOMA_CREDENTIAL_PCT");
    gradPCTFields.push("STILL_ENR_PCT");
    gradPCTFields.push("GED_PCT");
    gradPCTFields.push("DROPOUT_PCT");
    
    ethnicFields.push("American Indian or Alaska Native");
    ethnicFields.push("Black or African American");
    ethnicFields.push("Hispanic or Latino");
    ethnicFields.push("Asian or Pacific Islander");
    ethnicFields.push("White");
    ethnicFields.push("Multiracial");
    
    //Default data initially presented
    chartBy = "Ethnicity";
    chartContent = "Grad Outcomes"
    
    //"Toggle" Button creatiion 
    NRCButton = createButton("NRC");
    EthnicityButton = createButton("Ethnicity");
    
    NRCButton.mousePressed(ChartByNRC);
    EthnicityButton.mousePressed(ChartByEthnicity);
    
}

function draw(){
    background(50);  
    //if boonean is false then the program will go through process of setting up chart data
    if(!chartSetup){ 
        ChartSetup(chartBy,chartContent);
    }
    
    var transX = 150;
    var transY = 230;
    //draws the legend and title
    Legend();
    
    //draws all graphs and their labelling
    for(var i = 0; i < pieCharts.length; i++){   
        push();
        translate(transX,transY);
        pieCharts[i].display();
        pop();
        if(i%2 == 0){
            transX += width/2;
        }else{
            transY += 250;
            transX = 150;
        } 
    }
    
}

// function goes through the creation of chart by calling for Data, storing Charts in an array, and setting unique properties
function ChartSetup(chartBy, chartContent){
    if (chartBy == "NRC" && chartContent == "Grad Outcomes"){
        PullData(chartBy,chartContent);
        for(var i =0; i < 7; i++){
            pieCharts[i] = (new PieChart());

            for(var j = 0; j < gradPCTFields.length; j++){
                var angle = map(pieData[i].getNum(gradPCTFields[j]), 0, 100, 0, 360);
                pieCharts[i].angles.push(angle);
            }
            pieCharts[i].diameter = map(pieData[i].getNum("ENROLL_CNT"), 0,80000, 50, 200);
            pieCharts[i].name = pieData[i].getString("NRC_DESC");
            pieCharts[i].enrollment = pieData[i].getNum("ENROLL_CNT");
        }
    }else if (chartBy == "Ethnicity" && chartContent == "Grad Outcomes"){
        PullData(chartBy,chartContent);
        for(var i =0; i < ethnicFields.length; i++){
            pieCharts[i] = (new PieChart());

            for(var j = 0; j < gradPCTFields.length; j++){
                var angle = map(pieData[i].getNum(gradPCTFields[j]), 0, 100, 0, 360);
                pieCharts[i].angles.push(angle);
            }
            pieCharts[i].diameter = map(pieData[i].getNum("ENROLL_CNT"), 0,80000, 50, 200);
            pieCharts[i].name = ethnicFields[i];
            pieCharts[i].enrollment = pieData[i].getNum("ENROLL_CNT");
        }
    }
    // prevents unneccisary chart setups
    chartSetup = true;
}


//chartBy sets the category in which different charts are seporated into *** data always pulled from 2011 - 4 year outcome
//chartContent sets what percentages are represented in the chart

// Goes though and pulled appropriact rows from table for the data being visualized 
function PullData(chartBy, chartContent){
    if (chartBy == "NRC" && chartContent == "Grad Outcomes"){
        for(var r =0; r < tableRowCount; r++){
            var curRow = eduTable.getRow(r);
            if((eduTable.get(r,"AGGREGATION_INDEX") == 1 && eduTable.get(r,"SUBGROUP_CODE") == 1 ) && eduTable.get(r,"MEMBERSHIP_CODE") == 9){
                pieData.push(curRow);
            }
        }
    }else if(chartBy == "Ethnicity" && chartContent == "Grad Outcomes"){
        for(var r =0; r < tableRowCount; r++){
            var curRow = eduTable.getRow(r);
            if((eduTable.get(r,"AGGREGATION_INDEX") == 0 && eduTable.get(r,"MEMBERSHIP_CODE") == 9) && (eduTable.get(r,"SUBGROUP_CODE") > 3 && eduTable.get(r,"SUBGROUP_CODE") < 10)){
                pieData.push(curRow);
            }
        }
    }
}

function Legend(){
    if(chartContent == "Grad Outcomes"){
        var moveX = 50;
        fill(255);
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(16);
        text(chartContent + " by " + chartBy,width/2,20);
        textStyle(NORMAL);
        
        for (var i = 0; i < gradPCTFields.length; i++){
            push();
            translate(moveX,50);
            textSize(12);
            fill(pieCols[i]);
            ellipse(0,40,30,30);
            textAlign(CENTER);
            if(i%2 == 0){
                text(gradPCTFields[i], 0, 20,);
            }else text(gradPCTFields[i], 0, 70,);
            pop();
            
            moveX += 120;
        }
    }
    
}

//Constructor for each pie chart
function PieChart(){
    
    this.angles = [];
    this.diameter;
    this.xCenter = 0;
    this.yCenter = 0;
    this.name;
    this.enrollment;
    
    this.title = function(){
        fill(255);
        textAlign(CENTER);
        textSize(14)
        text(this.name,0,0);
        text("Enrolled: " + this.enrollment,0,16);
    }
    
    
    // seee refference for this function here: https://p5js.org/examples/form-pie-chart.html
    this.display = function(){
        var lastAngle = 0;
        for (var i=0; i < this.angles.length; i++){
            fill(pieCols[i]);
            arc(this.xCenter,this.yCenter,this.diameter, this.diameter, lastAngle, lastAngle+radians(this.angles[i]));
            lastAngle = lastAngle + radians(this.angles[i]);
        }
        push();
        translate(0, (this.diameter/2) + 20);
        this.title();
        pop();
    };
    
}

// Empties the arrays for any change to data visualized 
function ClearArrays(){
    for(var i = pieCharts.length-1; i >= 0 ;i--){
        pieCharts.splice(i,1);
    }
    for(var i = pieData.length-1; i >= 0 ;i--){
        pieData.splice(i,1);
    }
}


// Triggers for buttons
function ChartByNRC(){
    chartBy = "NRC";
    ClearArrays();
    chartSetup = false;
}

function ChartByEthnicity(){
    chartBy = "Ethnicity";
    ClearArrays();
    chartSetup = false;
}
