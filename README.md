
# Fruit Ninja Game Javascript
![p5js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=FFFFFF)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  <img alt="Releases" src="https://img.shields.io/github/directory-file-count/KissKrisz215/fruit-ninja" />
  

**Fruit Ninja** - the most popular fruit-slicing game in the world! This game is built completely using the **p5js** JavaScript library.

## Technologies

* P5.js version: 1.6.0

## ABOUT p5js :speech_balloon:

### Basic sketch
  - This is the basic setup for a p5.js sketch- **setup()** and **draw()**. 
  - **Note:** p5.js will also require an empty HTML file that links to the p5.js library and your sketch file in the header.

    ```javascript
    function setup() {
      // setup stuff
    }
    function draw() {
      // draw stuff
    }
    ```
    
  - Alternatively, you could use the **preload()** function. 
  - If a preload() block exists it runs first, then setup() will wait until everything in there has completed before it gets run, so you can make use of things loaded in preload in setup and draw.
  
    ```javascript
    let img;
    function preload() {
      img = loadImage('img.jpg');
    }
    ```

    
## Gameplay

### Modes

The game consist of two modes **Classic** and **Zen**

![App Screenshot](/assets/img/screenshots/gif3.gif)

### Classic Mode

You start the game with 3 lives, you should slice all the fruits that appear on the screen.

If the fruit falls back without being sliced you lose on point from your life.

Bombs can also appear on your screen, which is fatal, if you slice a dangerous bomb you lose.

The Classic mode also includes a rare Starfruit which gives +10 Points and a Dragon Fruit which gives +5 points.

![App Screenshot](/assets/img/screenshots/gif1.gif)

## Zen Mode

It has the same game rules as for the Classic the only difference is the Freeze Banana,
which if sliced slows down the fruits for 5 seconds.

![App Screenshot](/assets/img/screenshots/gif2.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## REFERENCES :books:
[p5js Documentation](https://p5js.org/): A complete guide on how to use the **p5js** library.

## Demo

Link: https://kisskrisz215.github.io/fruit-ninja/
