/* processing is an Integrated Development Eviroment */
/* Vocabulary:

    Sketch - the visual outcome of your code
    
    Compile - the process the computer goes through to turn your human readable code -> Binary, generating the sketch outcome.
    
    Editor - the srea in which you can write/edit code as text
    
    Console - the are where you can print out debug information.
    
GRID SYSTEM/PROCESSING:

    - (0,0) is located at the the top left corner, e.i:
        X-Axis: 0->10+ = Left to Right 
        Y-Axis: 0->10+ = Top to Bottum
    
    - Very case sensative (uppercase/lowercase)
    
    - Everything is drawing in the roder of the code.
    
    - SIZE values will always be in Pixels units with FLOATS as thier input
  
LINE DRAWING:

    ARGUMENT: [VERB] draw a [OBJ] line  staring from [DATA] (0.5, 1.5)
        IN PROCESSING8*/: line(0.5 ,1.5) /*
          - Note the VERB is implide with the syntax of the OBJ.
    SHAPES: 
    
        note: SHAPES by default have white fill color.
              Therfore any OBJ withing their boundries earlier in code will be covered
        • SIZE: size(width, height)
          - */ size(700,700) /*
          (size of drawing window)
        
        • TRIANGLE: triangle(x1, y1, x2, y2, x3, y3);
          - */ triangle(100,100, 200, 200, 0, 100) /*
        
        • RECTANGLE: rect(x, y, width, height)
        
        • ELLISPE: ellipse(centerX, centerY, width, height);
        
        • POINT: (x,y)

VARIABLES: 

    VARIABLES are "placeholders" for VALUES. How to think of it is a stoage container
       - useful to put at the top of your sketch to have easy organization/refference of your values

    Basic Variable argument:
       - [DATATYPE] [NAME] = [VALUE]
      
    DATATYPES:
      • int
        - whole numbers (1,79)
      
      • float
        - decimal numbers (1.92, 0.22)
        
      • bolean
        - true or false (either true, false or 1, 0)
        
      • Sting
        - a squence of characters ("Hello")
        
      • char
        - a single character ('a', 'G')
        
USING THE CONSOLE:

    Secondary output of text to the console, usefuel for the feedback using logic funsitons 
    
    PRINT LINE: 
      - print text WITH CAROSELL RETURN
      - */ println("Hello world") /*
      
    PRINT: 
      - print just what is in "_" 
      - */ print("Hello world") /*
       
STYLING:

    note: STYLE PROPERTIES will only applied to OBJs between ASSIGNMENT and THE NEXT CHANGE of that STYLE 
    
    STYLE ASSIGNMENTS
    
      • SET FILL COLOR:
        - fill(r,b,g);
        - default renderer doesn't have "a" can use rbga with a new renderer
        - */fill( 79,32,18);/*
        
      • TURN OUTLINE STOKE OFF:
        - noStroke(); 
        - to turn back on must assign COLOR and WEIGHT
        
      • SET OUTLINE STROKE THICKNESS:
        - strokeWeight(pixels); ;
        
      • SET OUTLINE STROKE COLOR:
        - stroke(r,g,b);
      
VERTICES AND COMPLEXITY: 

    MAKING A NON-STANDARD/COMPlEX SHAPE:
      - START 
        - beginShape();
        
      - VERTICIES = individual point that in sequence that create lines/ boundry of the shape
        - vertex(x,y)
        - vertex(x,y)
        - vertex(x,y)
        
      - FINISHING:
        -endShape(). 
        - inputing CLOSE will connect the last vertex to the first vertex
              -inputing the first vertexs points will also acomplish this)
      
STATIC/ACTIVE MODEs:

    more to come ;)
    */ 
   