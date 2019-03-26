var canvas;

var weather = "none";
var drops = [];

var numFlakes = 200;

var debug = false;

function setup()
{
    canvas = createCanvas(windowWidth,windowHeight);    
    init();
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
    init();
}
function init()
{
    drops = [];
    canvas.position(0,0);
    canvas.style('z-index', '-1');

    weather = localStorage.getItem("weather");
    
    for (var i = 0; i < numFlakes; i++)
    {
        drops.push(new Droplets(1,6));
    }

}

function ChangeWeather(newWeather)
{
    weather = newWeather;
    localStorage.setItem("weather", weather);
}


function keyPressed()
{
	//tilde ~ key
	if (keyCode === 192)
	{
		debug = !debug;
	}
}

function draw()
{


    clear();
    for (var i = 0; i < numFlakes; i++)
    {
        drops[i].display();
    }

    if (debug)
	{
		push();

		fill('white');
		textSize(22);
		text("FPS:" + frameRate().toFixed(0), 20, windowHeight - 20);

		pop();
	}

}


class Droplets
{
    constructor(min, max)
    {
        this.x = random(0,windowWidth);
        this.y = random(-1000, -1);
        this.size = random(min, max);
        this.speed = random(400,600);    
    }

    display()
    {


        if (weather == "none") return;

        if (this.y > windowHeight)
        {
            this.y = random(-1000, -1);
        }
        else{
            this.y += this.speed/frameRate();
        }

        push();

        var col = 'white';

        switch(weather)
        {
            case "snowing":
                col = 'white';    
            break;

            case "raining":
                col = 'blue';
            break;
        }
        fill(col);

        noStroke();
        ellipse(this.x, this.y, this.size, this.size);

        pop();
    }
}