// var difficult;
// document.querySelector('#easy').addEventListener('click',function(){
//     difficult=false;
//     console.log(difficult);
// })
// document.querySelector('#hard').addEventListener('click',function(){
//     difficult=true;
//     console.log(difficult);
// })
var colors=[]
// if(difficult){
    colors=RandomColors(6);
// }
// else{
//     colors=RandomColors(3);
// }
var numSquares=6;
var squares=document.querySelectorAll('.square');
var secret_color=colorpicker();
var choice;
var h1=document.querySelector('h1');
var rgb=document.querySelector('#rgb');
var reset=document.querySelector('#reset');
var easybtn=document.querySelector('#easybtn');
var hardbtn=document.querySelector('#hardbtn');
rgb.textContent=secret_color;

var mbuttons=document.querySelectorAll('.mode');
for(var i=0;i<mbuttons.length;i++)
{
    mbuttons[i].addEventListener('click',function(){
        mbuttons[0].classList.remove('selected');
        mbuttons[1].classList.remove('selected');
        this.classList.add('selected');
        if(this.textContent==='EASY'){
            numSquares=3;
        }
        else{
            numSquares=6;
        }
        resetting();
    });
}
// easybtn.addEventListener('click',function(){
//     numSquares=3;
//     colors=RandomColors(numSquares);
//     secret_color=colorpicker();
//     rgb.textContent=secret_color;
//     for(var i=0;i<squares.length;i++)
//     {
//         if(colors[i])
//         squares[i].style.background=colors[i];
//         else{
//             squares[i].style.display='none';
//         }
//     }
//     h1.style.backgroundColor='steelblue';
//     easybtn.classList.toggle('selected');
//     hardbtn.classList.toggle('selected');
//     document.querySelector('#message').textContent='';
// })



// hardbtn.addEventListener('click',function(){
//     numSquares=6;
//     colors=RandomColors(numSquares);
//     secret_color=colorpicker();
//     rgb.textContent=secret_color;
//     for(var i=0;i<squares.length;i++)
//     {
//         squares[i].style.background=colors[i];
//         squares[i].style.display='block';
//     }
//     h1.style.backgroundColor='steelblue';
//     hardbtn.classList.toggle('selected');
//     easybtn.classList.toggle('selected');
//     document.querySelector('#message').textContent='';
// })
 reset.addEventListener('click',resetting);

for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];
    squares[i].addEventListener('click',function(){
        choice=this.style.background;
        if(choice===secret_color){
            for(var j=0;j<squares.length;j++)
            {
                squares[j].style.background=secret_color;
            }
            h1.style.backgroundColor=secret_color;
            document.querySelector('#message').innerText='Correct!';
            reset.textContent='Play Again';  
        }
        else{
            this.style.background='#232323';
            document.querySelector('#message').innerText='Try Again!!!';
        } 
    })
}



function colorpicker(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function RandomColors(num){
    var colorslist=[]
    for(var i=0;i<num;i++)
    {
        var color=RandomColor();
        colorslist.push(color);
    }
    return colorslist;
}

function RandomColor(){
    // Random Red b/w 0-255
    // Random Green b/w 0-255
    // Random Blue b/w 0-255
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    var rgb='rgb('+red+', '+green+', '+blue+')';
    return rgb;
}
function resetting(){
    colors=RandomColors(numSquares);
    secret_color=colorpicker();
    rgb.textContent=secret_color;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.background=colors[i];
            squares[i].style.display='block';
        }
        else{
            squares[i].style.display='none';
        }
    }
    h1.style.backgroundColor='steelblue';
    this.textContent='New Colors';
    document.querySelector('#message').textContent='';
}