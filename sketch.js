let img
let fonta
let img2
let sn
let f = 5
let d = 5
let u = 50
let n = 0
let lf = 300
let c = 0
let video1
let xx=0
let vid
let str = 0
let fs=60

let video                                      

function preload() {
  sn = loadSound("aari.mp3")
}

async function setup() {
  fonta = await loadFont("VFCFantomen.ttf")
  fontb = await loadFont("AbandoN.ttf")
  img = await loadImage("dtr.png")
  img2 = await loadImage("dhurandhar.png")
  img3 = await loadImage("ddr.png")

  video = createVideo("video.mp4")  
           
  video.hide()                                 
  video.size(400, 400) 
  video.volume(0)
  video1 = createVideo("exp.mp4")             
  video1.hide()                                 
  video1.size(400, 400) 
  video1.volume(0)  
  vid  = createVideo("ari.mp4")  
  vid.volume(0)
  vid.hide()
  vid.size(400,400) 
  vid.elt.loop = false                  

  createCanvas(400, 400)
  noSmooth()
}

function draw() {
  background(0, 0, 0)
  

  fill(0)
  fill(256, 0, 0)
  rect(0, 270, 400, 130)
  
  
  if(n==200){
    image(video1,0,0,400,400)  
  }
  tint(255, 400)
  img.resize(30, 0)
  image(img, -300, -200, 1000, 1000)
  if (n == 200) {          
   push()
   rotate(45) 
  image(video, -140, -40, 240, 160,0,100,0,400)
    video.volume(0)
  pop() 
  push()
  scale(-1,1)
   rotate(45) 
  image(video, -340, 300, 240, 160,0,100,0,400)
    video.volume(0)
  pop()     
        
  }   
  fill(xx,0,0)
  textSize(140)
  textFont(fonta)
  noStroke()
  text("REVENGE", 10, 130)

  tint(255, 400)
  image(img2, -475, -75, 1344, 756)

  fill(145, 0, 0)
  stroke(256, 0, 0)
  circle(178, 148, f)
  circle(220, 153, f)

  noStroke()
  textSize(u)
  fill(256)
  text("CLICK HAMZA'S EYES", 53, 57)

  stroke
  tint(255, c)
  image(img3, 50, 150, 300, 200)
  
  if (sn.currentTime() > 5 && !str){
  
  vid.play()
str = true } 
  if (str){

  noTint()

  image(vid,-250,-70,1920/2,1080/2)

  fill(195,0,0)
  
  
  textFont(fonta)
  textSize(60)
  text("watch now!", 90, 300)
  

}
}
noTint()  
                                

  


function mousePressed() {
  userStartAudio()
  
  if (
    mouseX > 130 &&
    mouseX < 250 &&
    mouseY > 130 &&
    mouseY < 180
  ) {

    sn.play()

    f = 0
    u = 0
    n = 200
    xx = 256

    video.play()
    video.volume(0)  
    video1.play()                             
    c = 255                                    
  }
  
}
