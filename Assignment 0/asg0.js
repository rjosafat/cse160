// asg0.js
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('cnv1');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a black rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);  

  //Part 1 Vector
  /* var coords = [2.25, 2.25, 0];
  let v = new Vector3(coords); 
  console.log(v.elements[0], v.elements[1], v.elements[2]);

  drawVector(v, "red"); */

}

//Function for drawing a vector given a Vector3 object and string 'color'
function drawVector(v, color) {
  //retrieving canvas object
  var canvas = document.getElementById('cnv1');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  var ctx = canvas.getContext('2d');

  //Setting color and calculating line from the center of the canvas
  ctx.strokeStyle = color; // Set color to red
  let cx = canvas.width/2;
  let cy = canvas.height/2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx+(v.elements[0]*20), cy-(v.elements[1]*20));
  ctx.stroke();
}

//Function for finding the Angle Between two vectors
function angleBetween(v1, v2) {
  var dot = Vector3.dot(v1, v2);
  var mag1 = v1.magnitude();
  var mag2 = v2.magnitude(); 
  var cosTheta = dot / (mag1 * mag2);
  return (Math.acos(cosTheta)*180)/Math.PI;
}

//Function for finding the area of a triangle given two vectors
function areaTriangle(v1, v2) {
  let cross = Vector3.cross(v1, v2);
  return 0.5*(Math.abs(cross.elements[2]));
}

//Function for the event of only drawing the two vectors
function handleDrawEvent() {
  var canvas = document.getElementById('cnv1');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  var ctx = canvas.getContext('2d');

  // Draw a black rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);  

  var coords = [document.getElementById('x').value, document.getElementById('y').value, 0];
  let v1 = new Vector3(coords); 
  drawVector(v1, "red");

  var coords = [document.getElementById('x2').value, document.getElementById('y2').value, 0];
  let v2 = new Vector3(coords); 
  drawVector(v2, "blue");
}

//Function for the event of drawing the various operations on the two vectors
function handleOperationEvent() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('cnv1');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  var ctx = canvas.getContext('2d');

  // Draw a black rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);  

  //create v1 vector
  var coords = [document.getElementById('x').value, document.getElementById('y').value, 0];
  let v1 = new Vector3(coords); 
  drawVector(v1, "red");

  //create v2 vector
  var coords = [document.getElementById('x2').value, document.getElementById('y2').value, 0];
  let v2 = new Vector3(coords); 
  drawVector(v2, "blue");

  //grab the scalar input value
  var scalar = document.getElementById('scalar').value;

  //switch case for all operations
  switch(document.getElementById('operations').value) {
    case "add":
      let sum = v1.add(v2);
      drawVector(sum, "green");
      break;
    case "sub":
      let diff = v1.sub(v2);
      drawVector(diff, "green");
      break;
    case "mult":
      let product = v1.mul(scalar);
      drawVector(product, "green");
      let product2 = v2.mul(scalar);
      drawVector(product2, "green");
      break;
    case "div":
      let quotient = v1.div(scalar);
      drawVector(quotient, "green");
      let quotient2 = v2.div(scalar);
      drawVector(quotient2, "green");
    case "mag":
      let mag1 = v1.magnitude();
      console.log("Magnitude of v1: ", mag1);
      let mag2 = v2.magnitude();
      console.log("Magnitude of v2: ", mag2);
      break;
    case "norm":
      let normalized = v1.normalize();
      drawVector(normalized, "green");
      let normalized2 = v2.normalize();
      drawVector(normalized2, "green");
      break;
    case "dot":
      let dotProduct = angleBetween(v1, v2);
      console.log("Angle: ", dotProduct);
      break;
    case "cross":
      let crossProduct = areaTriangle(v1, v2);
      console.log("Area of the triangle: ", crossProduct);
      break;
    default:
  }
}

