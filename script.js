'use strict';

//dom yapımızın bir şeye tepki verdiği bir durumda bir olay dinleyicisine ihtiyaç var eventlistener sayfada gerçekleşen bir durumdur ve mouse click yapma yada mouse harekete yada bir tuşa basmayı kontrol eder
//random number create
let wantedNumber = Math.trunc(Math.random()*20)+1;
//console.log(wantedNumber);
//score değerini direk olarak dom a kaydedip oradan okuyabilirdik ancak o zaman kodumuz bu değeri okuyamazdı
let score = 20;
let highScore =0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
 }



//eventlistener kullanmak için ilk olarak olayın gerçekleşmesini istediğimiz öğeyi seçeriz btn check iki tane btn old için biz check kısmını çağırırız
//queryselector check yaptığında bize bir eleman dönecek o elemanıda addeventlisener a ekleriz
//eventlistener a ilk olarak olayın türünü ardından da click olayına verilecek tepkiyi belirtiyoruz ve bu fonksiyon(eventhandler) olay işleyicisi olarak anlandırılır
document.querySelector('.check').addEventListener('click',function(){

  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber ,typeof guessNumber);

    //sayi farklı old sürece
    if(!guessNumber)
    {
    //document.querySelector('.message').textContent = 'Number not entered!!!';  
    displayMessage('Number not entered!!!');
    }
    //doğru tahmin girildiğinde
    else if(guessNumber === wantedNumber){
        document.querySelector('.number').textContent = wantedNumber;
        //document.querySelector('.message').textContent = 'Congratulations :)';
        displayMessage('Congratulations');
        //dom ile css elemanlarına erişebiliriz background-color olmaz js bunu camalcase olarak ister tüm iki kelimeden oluşan tüm özellikler için geçerli
        document.querySelector('body').style.backgroundColor = '#60b347';
        //ne zaman style ile işlem yapsak bir string girmemiz istenir bu yüzden bu değere 3orem diyoruz yoksa çalışmaz
        document.querySelector('.number').style.width = '30rem';
    
        if(score>highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
            
    else if(guessNumber !== wantedNumber){
                if(score>1)
                {
                    //document.querySelector('.message').textContent = guessNumber>wantedNumber ?'Tooo High!' : 'Tooo Low';
                    displayMessage(guessNumber>wantedNumber ?'Tooo High!' : 'Tooo Low');
                    score--;
                    document.querySelector('.score').textContent = score;}
                else{
                    //document.querySelector('.message').textContent = 'Game Over Sorry:('
                    displayMessage('Game Over Sorry:(');
                    document.querySelector('.score').textContent = 0;}
                }
            }
    );



document.querySelector('.again').addEventListener('click',function(){
    score=20;
    wantedNumber = Math.trunc(Math.random()*20)+1;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});