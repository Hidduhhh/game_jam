import Beweging from '../beweging.es6';
import Speler from '../speler.es6';




const canvas = document.getElementById("veld");
const field = canvas.getContext("2d");


let speler1 = new Speler(250, 250 , 30 , 30, "Red", field);
let beweging = new Beweging(field);

