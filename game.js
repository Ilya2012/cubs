

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var lang = {
	
	
ru : {'game':'Игра', 'lan':'Язык', 'res':'Сброс', 'lev':'Уровень', 'seria':'Серия', 			  		         'victori':'Верно','fal':'Не верно','statis': 'Статистика', lang:'Ру',
       'ready':'Готов?','go':'Действуй!', 'vict':'так держать!',
      'falt':'поробуй ещё'},
	
en : {'game':'Game', 'lan':'Langue', 'res':'Restart', 'lev':'Level', 'seria':'Series', 			  		         'victori':'Aright','fal':'False', 'statis': 'Music', lang:'En',
      'ready':'Ready?','go':'Go!','vict':'keep it up!',
      'falt':'try again'},	
	
ge : {'game':'Spiel', 'lan':'Sprache', 'res':'Neustart', 'lev':'Niveau', 'seria':'Serie', 		                 'victori':'Treu','fal':'Falsch', 'statis': 'Musik', lang:'Ge',
      'ready':'Fertig?','go':'Wirkst!','vict':'so halten!',
      'falt':'versuchen wieder'}};




var cube = [];

var timer = 0;

var variant1 = [];

var variant2 = [];

var PageX = 0;

var PageY = 0;

var cubeY = new Image ();
cubeY.src = 'sharY.gif' ;

var cubeG = new Image ();
cubeG.src = 'sharG.gif' ;

var cubeR = new Image ();
cubeR.src = 'sharR.gif' ;

var cubeB = new Image ();
cubeB.src = 'sharB.gif' ;

var pan = new Image ();
pan.src = 'pan.gif';

var fon = new Image ();
fon.src = 'fon.gif';

var ren = new Image ();
ren.src = 'ren.png';

var treyn = new Image ();
treyn.src = 'treyn.gif';

var box = new Image ();
box.src = 'box.gif';

var tyle = new Image ();
tyle.src = 'tyle.png';


var Untitled = new Audio ('/asset/www/Untitled.mp3');
var Untitled1 = new Audio ('/asset/www/Untitled.ogg');

// ctx.scale(2,2);
PPi = window.devicePixelRatio;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


var w = canvas.width;
var h = canvas.height;
cX = w/2;
cY = h/2;

// k - коэф. размера экрана. Прееменные в "ru, en, ge" * k

//**********************************************************************

window.onload = function () { 

	levl(); }	
	
 

window.onmousemove = function (event) {
	
	PageX = event.pageX;
	PageY = event.pageY; }

//******************************************* @MEDIA ***************************************************//




//******************************************* LEVEL && SERIA *******************************************//

function levl () {
	
	
	
seria = localStorage.getItem('seria');
if(localStorage.getItem('seria') == null ) {
localStorage.setItem('seria', 0);
seria = localStorage.getItem('seria');	
}	
	

maxshar = localStorage.getItem('maxshar');
if(localStorage.getItem('maxshar') == null ) {
localStorage.setItem('maxshar', 3);
maxshar = localStorage.getItem('maxshar');	
}	
	
seriatimer = localStorage.getItem('seriatimer');
if(localStorage.getItem('seriatimer') == null ) {
localStorage.setItem('seriatimer', 0);
seriatimer = localStorage.getItem('seriatimer');	
}	
	
levl = localStorage.getItem('levl');
if(localStorage.getItem('levl') == null ) {
localStorage.setItem('levl', 0);
levl = localStorage.getItem('levl');	
}	

levltimer = localStorage.getItem('levltimer');
if(localStorage.getItem('levltimer') == null ) {
localStorage.setItem('levltimer', 0);
levltimer = localStorage.getItem('levltimer');	
}	

sharcoll = localStorage.getItem('sharcoll');
if(localStorage.getItem('sharcoll') == null ) {
localStorage.setItem('sharcoll', 5);
sharcoll = localStorage.getItem('sharcoll');	
}	

	
	
menu();	
}


//******************************************* MENU *****************************************************//

function menu (){
	
	
	
m_update ();
m_render ();
}

function m_update (){	

lng = localStorage.getItem('lang');
if(localStorage.getItem('lang') == null ) {
localStorage.setItem('lang', 'en');
lng = localStorage.getItem('lang');}
	
		
	
	
	
window.onclick = function (){
	

	console.log('X', PageX, '/', 'Y', PageY);
	
	


if(PageX >= gx1 && PageX <= gx2 && PageY >= gy1 && PageY <= gy2) {
	
	console.log('game');
	ready(); // game
}

if(PageX >=  mx1 && PageX <=  mx2 && PageY >= my1 && PageY <= my2){

	console.log('Ctatist');
	Untitled.play();
	Untitled1.play();
	
	
} // music
	

if(PageX >= rx1 && PageX <= rx2 && PageY >= ry1 && PageY <= ry2 ){
	
	localStorage['seria'] = 0;
	localStorage['maxshar'] = 3;
	localStorage['seriatimer'] = 0;
	localStorage['levl'] = 0;
	localStorage['levltimer'] = 0;
	localStorage['sharcoll'] = 5;
	levl = 0;
	seria = 0;
	menu();
	
console.log('restart');	
	
} // restart	
	
if(PageX >= lx1 && PageX <= lx2 && PageY >= ly1 && PageY <= ly2) { // langeng
	
	
	if ( lng == 'ru') 		 {lng = 'en' ; localStorage.setItem('lang','en'); menu();} 
	else if ( lng == 'en')   {lng = 'ge' ; localStorage.setItem('lang','ge'); menu();}
	else   					 {lng = 'ru' ; localStorage.setItem('lang','ru'); menu();}
	
	console.log('lang');
}//langeng
}// onclic

// cx = 190
// cX = 225;

		if (lng == 'ru') {
			
	            nlevX = 220; langX = 155;       goX = 40;    falX = 55;      podpX = 90;
				seriaX = 30; serianX = 180;  vicX = 50;   faltX = 55;  levX = 30;      readyX = 60;
			    gameX = 35;  lanX = 35;      statisX = 35; resX = 35;   victoriX = 65; 
				
				nlevY = 70;   langY = 335;       goY = h/2-20;   falY = h/2-20;  podpY = 530;
				seriaY = 150; serianY = 150; vicY = h/2+20;   faltY = h/2+20; levY = 70; readyY = h/2-20;
			    gameY = 270;  lanY = 335;    statisY = 400; resY = 490;  victoriY = h/2-20;
				    
			    gx1 = 35; gx2 = 125; gy1 = 250; gy2 = 270;
			    lx1 = 35; lx2 = 125; ly1 = 315; ly2 = 335;
			    mx1 = 35; mx2 = 165; my1 = 380; my2 = 400;
			    rx1 = 35; rx2 = 145; ry1 = 470; ry2 = 490;
				shrift1 = '45px Arial'; shrift2 = '45px Arial'; shrift3 = '20px Arial'; 
			    shrift4 = '50px Arial';
				  
				    
				   
				         
				   
				 	     
		
 					 
	} // lng = ru;
			
		

	
	else if (lng == 'en'){
		
			    nlevX = 175; langX = 210;      goX = 115;    falX = 100;      podpX = 90;
				seriaX = 50; serianX = 195;  vicX = 80;   faltX = 100;  levX = 50;      readyX = 65;
			    gameX = 50;  lanX = 50;      statisX = 50; resX = 50;   victoriX = 80; 
				
				nlevY = 70;   langY = 335;       goY = h/2-20;   falY = h/2-20;  podpY = 530;
				seriaY = 150; serianY = 150; vicY = h/2+25; faltY = h/2+20; levY = 70;  readyY = h/2-20;
			    gameY = 270;  lanY = 335;    statisY = 400; resY = 490;  victoriY = h/2-20;
				    
				gx1 = 35; gx2 = 165; gy1 = 250; gy2 = 270;	   
				lx1 = 35; lx2 = 195; ly1 = 315; ly2 = 335;
		        mx1 = 35; mx2 = 165; my1 = 380; my2 = 400;
		        rx1 = 35; rx2 = 185; ry1 = 470; ry2 = 490;
		
				shrift1 = '45px Arial'; shrift2 = '45px Arial'; shrift3 = '20px Arial'; 
				shrift4 = '60px Arial';
		
				
		
	}
	
	else {
		
		        nlevX = 200; langX = 225;      goX = 70;    falX = 70;      podpX = 90;
				seriaX = 50; serianX = 170;  vicX = 80;   faltX = 25;  levX = 50;      readyX = 70;
			    gameX = 50;  lanX = 50;      statisX = 50; resX = 50;   victoriX = 90; 
				
				nlevY = 70;   langY = 335;      goY = h/2-20;   falY = h/2-20;    podpY = 530;
				seriaY = 150; serianY = 150; vicY = h/2+20; faltY = h/2+20; levY = 70;  readyY = h/2-20;
			    gameY = 270;  lanY = 335;    statisY = 400; resY = 490;  victoriY = h/2-20;
				   
				gx1 = 35; gx2 = 150; gy1 = 250; gy2 = 270; 
				lx1 = 35; lx2 = 210; ly1 = 315; ly2 = 335;
		        mx1 = 35; mx2 = 160; my1 = 380; my2 = 400;
		        rx1 = 35; rx2 = 210; ry1 = 470; ry2 = 490;
		
				shrift1 = '45px Arial'; shrift2 = '45px Arial'; shrift3 = '20px Arial';
				shrift4 = '60px Arial';
		
	
	}
				

}

function m_render (){
	
	
ctx.clearRect(0, 0, w, h);
ctx.drawImage(ren, 0, 0, w, h ); 
	
	
	
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#ffffff";
    ctx.font = shrift1;
	ctx.fillText(levl, nlevX, nlevY);
    ctx.strokeText(levl, nlevX, nlevY);
	
	ctx.fillText(seria, serianX, serianY);
    ctx.strokeText(seria, serianX, serianY);
	
    ctx.font = shrift1;
	ctx.fillText(lang[lng]['seria'], seriaX, seriaY);
    ctx.strokeText(lang[lng]['seria'], seriaX, seriaY);	
	
	ctx.fillText(lang[lng]['lev'], levX, levY);
    ctx.strokeText(lang[lng]['lev'], levX, levY);
	
    ctx.font = shrift2;
	ctx.fillText(lang[lng]['game'], gameX, gameY);
    ctx.strokeText(lang[lng]['game'], gameX, gameY);
	
	ctx.fillText(lang[lng]['lan'], lanX, lanY);
    ctx.strokeText(lang[lng]['lan'], lanX, lanY);
	
	ctx.fillText(lang[lng]['lang'], langX, langY);
    ctx.strokeText(lang[lng]['lang'], langX, langY);
	
	ctx.fillText(lang[lng]['statis'], statisX, statisY);
    ctx.strokeText(lang[lng]['statis'], statisX, statisY);
	

	
	ctx.fillText(lang[lng]['res'], resX, resY);
    ctx.strokeText(lang[lng]['res'], resX, resY);
	
    ctx.font = shrift3;
	ctx.fillText("@GIA_production", podpX, podpY);
	
}

//******************************************* READY ****************************************************//


function ready() {
Untitled.pause();
	
	
ctx.clearRect(0, 0, w, h);
ctx.drawImage(ren, 0, 0, w, h ); 				

						
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#ffffff";
    ctx.font = "60px Arial";
	ctx.fillText(lang[lng]['ready'], readyX, readyY);
    ctx.strokeText(lang[lng]['ready'], readyX, readyY);	

	
setTimeout(les, 2000);

}
	
//******************************************* LOADING CONDITIONS ***************************************// 

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

//*******************************************
function les (){
	
coll = 0;
xx = 25;
yy = 100;
	
result = levl%3;
result2 = levl%2;	

if(result == 0 && levl != 0){
sharcoll = localStorage.getItem('sharcoll');	
sharcoll ++;
localStorage.setItem('sharcoll', sharcoll);
sharcoll = localStorage.getItem('sharcoll');	
}

if(result2 == 0 && levl != 0){

maxshar ++;
localStorage.setItem('maxshar', maxshar);
maxshar = localStorage.getItem('maxshar');	
}	
	
	ctx.drawImage(ren, 0, 0, w, h );
	Start(); }


function Start (){
	
	
	
if(coll < sharcoll) {
	
var Random = getRandom(1, maxshar);


	
if(Random == 1) color = cubeG; 	
if(Random == 2) color = cubeR; 	
if(Random == 3) color = cubeY;
if(Random == 4) color = cubeB;	


	
variant1.push(color);

if (coll == 5) { yy +=50; xx = cX-145; }
	
ctx.drawImage(color, xx, yy, 45, 45); 	
	

	
	
	
xx += 55;
coll++;	


	
	
setTimeout(Start, 1500);
	alert(variant1);
}	
else  go();	
}


//******************************************* GO *******************************************************//


function go() {
	
	
ctx.clearRect(0, 0, w, h);
ctx.drawImage(ren, 0, 0, w, h ); 				

						
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#ffffff";
    ctx.font = shrift4;
	ctx.fillText(lang[lng]['go'], goX, goY);
    ctx.strokeText(lang[lng]['go'], goX, goY);	

	
setTimeout(game, 2000);
}
	


//******************************************* GAME START ***********************************************//



	

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

}
	
function game () {	

if(variant1.length > variant2.length) {
	
update();
render();
requestAnimationFrame(game); }

else compare();}

function update () { 

	
timer++;	
	
if( timer%100==0){
		

var Random = getRandom(1, maxshar);	

if(Random == 1)  var color = cubeG;  
if(Random == 2)  var color = cubeR;  
if(Random == 3)  var color = cubeY;  
if(Random == 4)  var color = cubeB;	

maxX = w - 50;	
	
var spavnX = getRandom(50, maxX);	
		
	
cube.push({x:spavnX, y:0, colorS:color, grav:1.3, clik:0});
	
}
	
	
for(var i in cube){ 
	
cube[i].y = cube[i].y + cube[i].grav; 

if ( cube[i].y > h )  cube.shift(); }


	
	rr = (w-85*2)+30;
	rr1 = w-85*2;
	rr2 = (w-85*2)+80;
	// проверка положения курсора
window.onclick = function (){

console.log('PageX', PageX, '/', 'PageY', PageY);
	
for(i in  cube) {
	
if( cube[i].x > rr1 && cube[i].x < rr2) cube[i].clik = 1;
	
if( PageX > cube[i].x && PageX < cube[i].x+40 && PageY > cube[i].y && PageY < cube[i].y +40){

if	( cube[i].x > rr1 && cube[i].x < rr2 && cube[i].clik == 1)	{

	Random = getRandom(1, 2);
	if(Random == 1) cube[i].x = rr1+100;
    else cube[i].x = rr1-50;} 	
	
else if ( cube[i].x < rr1 ) 	cube[i].x = rr;
else 							cube[i].x = rr;	

}}}	

	
for(i in cube){
	
	if(cube[i].x > rr1 && cube[i].x < rr2 && cube[i].y > h-1) {
		alert('fdg');
		variant2.push(cube[i].colorS);}
		
		
		}
		
	
}//update

 

	// отрисовка canvas
function  render ()	{
	
ctx.clearRect(0, 0, w, h);
	
ctx.drawImage(ren, 0, 0, w, h ); 										// фон
	
for(i in cube){ctx.drawImage(cube[i].colorS, cube[i].x, cube[i].y, 40,40);} 	
	
		
	
	

		
ctx.drawImage(pan, w-85*2, h-148, 100, 80);			// нижний приёмник
	
ctx.drawImage(tyle, 136, 167, 60, 60, w-100, h-120, 50, 50 ); 			// ящик правый

ctx.drawImage(box, w-445, h-120, 50, 50);	

ctx.drawImage(box, w-385, h-120, 50, 50);

ctx.drawImage(box, w-410, h-170, 50, 50);
	
ctx.drawImage(treyn, w-90*3-5, h-114,145,45 ); 		// трава
	
	
ctx.drawImage(fon, 0, h-70, 500, 70); 							// земля левая

//ctx.drawImage(fon, 502, canvas.height-70, 502, 70); 						// земля правая 	
	
} 
	
//******************************************* COMPARE RESULTS ******************************************//
											  
	
	
	
function compare() {
i = variant1.length;
ii = i ;
coll = 0;	  
  while (i>0){
	
	  if(variant2[i] != variant1[i]) falled();
	  else if (variant2[i] == variant1[i]) {
		  
		  i--;
		  coll++;}}
  
	  if ( coll == ii ) victori();}


//******************************************* VICTORI **************************************************//	
	
function victori (){
		
ctx.clearRect(0, 0, w, h);
ctx.drawImage(ren, 0, 0, w, h ); 				

						
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#ffffff";
    ctx.font = "60px Arial";
	ctx.fillText(lang[lng]['victori'], victoriX, victoriY);
    ctx.strokeText(lang[lng]['victori'], victoriX, victoriY);
	
	ctx.font = "35px Arial";
	ctx.fillText(lang[lng]['vict'], vicX, vicY);
    ctx.strokeText(lang[lng]['vict'], vicX, vicY);
	
	levl++;
	localStorage.setItem('levl', levl);
	localStorage.setItem('levltimer', 0 );
	
	seriatimer++;
	localStorage.setItem('seriatimer', seriatimer);
	
	if(localStorage.getItem('seriatimer') >	localStorage.getItem('seria')  ){
		
	seria = localStorage.getItem('seriatimer');
	localStorage.setItem('seria',seria);}	
		
	reset();}

//******************************************* FALSE ****************************************************//
	
function falled () {
	
ctx.clearRect(0, 0, w, h);
ctx.drawImage(ren, 0, 0, w, h ); 				

						
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#ffffff";
    ctx.font = shrift4;
	ctx.fillText(lang[lng]['fal'], falX, falY);
    ctx.strokeText(lang[lng]['fal'], falX, falY);
	
	ctx.font = "35px Arial";
	ctx.fillText(lang[lng]['falt'], faltX, faltY);
    ctx.strokeText(lang[lng]['falt'], faltX, faltY);
	
	levltimer++;
	localStorage.setItem('levltimer', levltimer);
	
	localStorage.setItem('seriatimer', 0 );
	
	if(localStorage.getItem('levltimer') == 3){
	   localStorage.setItem('levltimer', 0);
	   levl = localStorage.getItem('levl');
	   levl--;
	   localStorage.setItem('levl', levl);}	
	
	reset();}
	
	
//******************************************* RESET ****************************************************//	
	
function reset() {
 coll = 0;
		
	
if (cube.length > 0) {
	
	cube.shift();
	reset(); }

	
else if (variant1.length > 0){
	
	variant1.pop();
	variant2.pop();
	reset(); }
	
	
else setTimeout(menu, 5000);}	


	// обнулить все переменныйе
	

	

