function test() {
    document.getElementById('colorandfont').style.backgroundColor = 'yellow';
    document.getElementById('colorandfont').style.fontSize = '30px';

}
function changepic() {
    document.getElementById('image1').src = 'image/img.PNG'
}

function change() {
    document.getElementById('image1').src = 'image/1.PNG'
}

function swap() {
    var content = document.getElementById('div2').innerHTML
    document.getElementById('div2').innerHTML = document.getElementById('div1').innerHTML
    document.getElementById('div1').innerHTML = content

}

// function swappic()
// {
//     var a= document.getElementById('img1')
//     var b= document.getElementById('img2')
//     var temp= a.src
//     a.src= b.src
//     b.src=temp

// }

function swappic() {
    var temp = document.getElementById('img1').src
    document.getElementById('img1').src = document.getElementById('img2').src
    document.getElementById('img2').src = temp
}

function hide() {
    document.getElementById('img11').style.display = "none"
}
function show() {
    document.getElementById('img11').style.display = "inline"
}
function hideandshow() {

if (document.getElementById('btn1').innerHTML=='hide'){
    document.getElementById('img22').style.display="none"
    document.getElementById('btn1').innerHTML="show"
}
else{
  document.getElementById('img22').style.display="inline"
  document.getElementById('btn1').innerHTML="hide"
   
}


}