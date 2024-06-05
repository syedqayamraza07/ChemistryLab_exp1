var hmessage=["उपकरणों पर माउस ले जा कर उनसे स्वयं को परिचित कराएं.....फिर प्रयोग शुरू करने के लिए स्टार्ट बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर में पावर बटन दबाएं",
"फ़ंक्शन नॉब घुमाएं और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए तापमान  घुंडी घुमाएँ",
"ओह, आपने बहुत ज़्यादा घुमाया, इसे 0.960 पर सेट करें",
"फ़ंक्शन नॉब को घुमाएं और चेक मोड पर वापस सेट करें",
"क्लीनिंग सॉलूशन को सेल स्टैंड पर रखें और उसमें संवाहक सेल को डुबोएं, फिर संवाहक सेल को वापस खींचें और सफाई-समाधान को उसकी मूल स्थिति में वापस रखें",
"अब मानक-समाधान को सेल स्टैंड पर रखें और उसमें चालक सेल को डुबोएं",
"फ़ंक्शन नॉब को कैलिबर मोड में घुमाएँ",
"मशीन को कैलिब्रेट करने के लिए रेंज नॉब घुमाएँ",
"ओह, आपने बहुत ज़्यादा घुमाया, इसे 1.000 पर सेट करें",
"बहुत अच्छा! इस बीकर को हटाओ",
"अब इसकी चालकता ज्ञात करने के लिए 'एसिटिक एसिड' बीकर रखें",
"सटीक मान प्राप्त करने के लिए संचालन-सेल को 2 से 3 बार डुबोएं",
"बहुत बढ़िया! कंडक्टोमीटर-डिस्प्ले में जो मान दिखाया गया है उसे नोट कर लें और बीकर हटा दें",
"अब गणना भाग पर जाने के लिए NEXT बटन पर क्लिक करें"]

var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment",
"Turn on the weighing machine",
"Place the empty petri dish on the weighing machine",
"Press the tare button to reset the weight measurement",
"Weight the sugar powder using spatula",
"Add more sugar powder upto 30g",
"Good!       drop the powder into empty conical flask by lifting the petri dish",
"Now take 60ml of distilled water from the beaker and pour it into the flask",
"Your 50% sugar concentrated solution is ready.",
"Click on next button to move to the next step of the experiment"]




var lab =document.querySelector("#lab")
var zlab =document.querySelector("#zlab")
var start =document.querySelector("#start")
var next1 =document.querySelector("#next")
var visco =document.querySelector("#viscometer")
var mach =document.querySelector("#machine")
var num =document.querySelector("#number")
var on1 =document.querySelector("#on")
var tare1 =document.querySelector("#tare")
var dish =document.querySelector("#pdish")
var pow =document.querySelector("#pow")
var pow1 =document.querySelector("#pow1")
var pow1c =document.querySelector("#pow1c")
var pow2 =document.querySelector("#pow2")
// var pow2c =document.querySelector("#pow2c")
var spat =document.querySelector("#spatula")
var fspat =document.querySelector("#fspatula")
var fun =document.querySelector("#funnel")
var fun2 =document.querySelector("#funnel2")
var swatch =document.querySelector("#stopwatch")
// var mcy =document.querySelector("#mcylinder")
var wbeak =document.querySelector("#wbeaker")
// var wbeak0 =document.querySelector("#wbeaker0")
// var ebeak1 =document.querySelector("#ebeaker1")
// var ebeak2 =document.querySelector("#ebeaker2")
// var ebeak3 =document.querySelector("#ebeaker3")
// var ebeak4 =document.querySelector("#ebeaker4")
var bot =document.querySelector("#bottle")
var edishv =document.querySelector("#edish")
// var rod=document.querySelector("#rod")
// var drop=document.querySelector("#drsol")
var ef1=document.querySelector("#eflask1")
var ef2=document.querySelector("#eflask2")
var ef3=document.querySelector("#eflask3")
var ef4=document.querySelector("#eflask4")
var sol=document.querySelector("#sol")
var sol50=document.querySelector("#sol50")
var sol40=document.querySelector("#sol40")
var sol20=document.querySelector("#sol20")
var sol10=document.querySelector("#sol10")
var sol5=document.querySelector("#sol5")
var pip1=document.querySelector("#pip")
var pip60=document.querySelector("#pip60")
var pip40=document.querySelector("#pip40")
var pip30=document.querySelector("#pip30")
var pip20=document.querySelector("#pip20")
var pip10=document.querySelector("#pip10")
var pip45=document.querySelector("#pip45")
var pip5=document.querySelector("#pip5")

var ins = document.querySelector("#ins")
var mes=document.querySelector("#text")
var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")

var f;
var nb;
var ob=0;
var tb;
var rsize;
var lang = "none"
var messcounter = 0
var mes1

function hindi1(){
    lang="hindi"
    console.log(lang)
    langselector.style.opacity="0%"
    //s.innerText="आगे"
    ins.innerText="निर्देश :-"

    setTimeout(function(){
        langselector.style.visibility="hidden"
    },1000)
    update()
}

function eng1(){
    lang="eng"
    console.log(lang)
    langselector.style.opacity="0%"
    setTimeout(function(){
        langselector.style.visibility="hidden"
    },1000)
    update() 
}


function speech1(){
    //speechSynthesis.stop();
    if(lang=="none"){
        /*mes1="Please select your language"*/
    }
    else if(lang=="hindi"){
        mes1=hmessage[messcounter-1]
    }
    else if(lang=="eng"){
        mes1=message[messcounter-1]
    }
    setTimeout(function(){ 
        //mes1=hmessage[messcounter]
        
        const utterance = new SpeechSynthesisUtterance(mes1);
        if(lang=="hindi"){
            utterance.lang='hi-IN';
            /*utterance.pitch=1;
            utterance.rate=1;
            utterance.volume=1;
            speechSynthesis.speak(utterance);*/
        }
        /*else if(lang=="none"){
            utterance.lang='hi-IN';
            utterance.pitch=1;
            utterance.rate=1;
            utterance.volume=1;
            speechSynthesis.speak(utterance);
            utterance.lang='eng-IN';
            utterance.pitch=1;
            utterance.rate=1;
            utterance.volume=1;
            speechSynthesis.speak(utterance);
        }*/
        else if(lang=="eng"){
            utterance.lang='en-IN';
           /* utterance.pitch=1;
            utterance.rate=1;
            utterance.volume=1;
            speechSynthesis.speak(utterance);*/
        }
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

function update(){
    if(lang=="hindi"){
        mes.innerText=hmessage[messcounter]
        console.log(hmessage[messcounter])
    }
    else if(lang=="eng"){
        mes.innerText=message[messcounter]
        console.log(message[messcounter])
    }
    //mes.innerText=hmessage[messcounter]
    messcounter+=1
        speech1()
}

 function start1(){ 
     console.log("hii");
    
     lab.style.visibility="hidden"
     zlab.style.visibility="visible"
     start.style.visibility="hidden"
     visco.style.visibility="hidden"
     swatch.style.visibility="hidden"
     bot.style.visibility="hidden"
     resize()
     update()
}
spat.style.transform="rotate(20deg)";
fspat.style.transform="rotate(20deg)";
function resize(){
    mach.style.height="15%"
    mach.style.width="17%"
    mach.style.top="71%"
    mach.style.left="11%"
    num.style.top="79%"
    num.style.left="17%"
    num.style.fontsize="2.5vw";
    on1.style.visibility="visible"
    on1.style.top="77.4%"
    on1.style.left="25.5%"
    on1.style.height="2.5%"
    on1.style.width="1.5%"
    tare1.style.visibility="visible"
    tare1.style.top="80.7%"
    tare1.style.left="24.8%"
    tare1.style.height="2.5%"
    tare1.style.width="2.5%"
    edishv.style.visibility="visible"
    edishv.style.top="88%"
    edishv.style.left="30%"
    dish.style.top="88%"
    dish.style.left="40.3%"
    pow.style.top="85.3%"
    pow.style.left="40.3%"
    pow.style.height="6%"
    pow.style.width="7.5%"
    spat.style.top="87%"
    spat.style.left="50%"
    fspat.style.top="87%"
    fspat.style.left="50%"
    fun.style.visibility="hidden";
    ef1.style.top="56%"
    ef1.style.left="50%"
    ef1.style.height="23%"
    sol.style.top="56%"
    sol.style.left="50%"
    sol.style.height="23%"
    pip1.style.top="63%"
    pip1.style.left="70%"
    pip1.style.width="1.5%"
    pip60.style.top="63%"
    pip60.style.left="70%"
    pip60.style.width="1.5%"
    wbeak.style.top="64%"
    wbeak.style.left="83%"

    // wbeak0.style.top="64%"
    // wbeak0.style.left="83%"
    // ebeak1.style.visibility="visible"
    // ebeak1.style.top="64%"
    // ebeak1.style.left="37%"
    // ebeak2.style.visibility="visible"
    // ebeak2.style.top="64%"
    // ebeak2.style.left="45%"
    // ebeak3.style.visibility="visible"
    // ebeak3.style.top="64%"
    // ebeak3.style.left="53%"
    // ebeak4.style.visibility="visible"
    // ebeak4.style.top="64%"
    // ebeak4.style.left="61%"
    // rod.style.top="85%"
    // rod.style.left="60%"
    // rod.style.width="15%"
}
function on(){
    if(ob==0){
        num.style.visibility="visible"
        f=0;
        ob=1;
    }update()
}
function tare(){
    if(tb==0){
        num.innerText="0.0 gm"
        f=1;
        tb=1;
    }update()

}

function edish(){
    if(f==0){
        edishv.style.transform="translate(-190%,-450%)";
        setTimeout(function(){
            num.innerText="0.5 gm"

        },1000)
        tb=0;
    }update()
    if(f==3){
        update()
        fun2.style.visibility="visible";
        fun2.style.height="15%"
        fun2.style.top="48.5%"
        fun2.style.left="50%"
        edishv.style.transform="translate(200%,-1150%) rotate(45deg)";
        pow1.style.transform="translate(1050%,-900%) rotate(45deg)";
        pow2.style.transform="translate(970%,-900%) rotate(45deg)";
        pow1.style.visibility="hidden"
        pow2.style.visibility="hidden"
        num.innerText="0.0 gm"
        setTimeout(function(){
            pow1c.style.visibility="visible"
            edishv.style.visibility="hidden"
            fun2.style.visibility="hidden";
        },1000)
        f=4;
    }
 
}

 function spatula(){
    if(f==1){
        spat.style.transform="translate(-55% ,-85%) rotate(0deg)";
        fspat.style.transform="translate(-55% ,-85%) rotate(0deg)";
        setTimeout(function(){
            fspat.style.visibility="visible";
            spat.style.visibility="hidden";
            fspat.style.transform="translate(-250%,-270%)";
            spat.style.transform="translate(-250%,-270%)";
        },1000)
        setTimeout(function(){
                fspat.style.visibility="hidden"
                pow1.style.visibility="visible"
                spat.style.visibility="visible";
                num.innerText="15.0 gm"

        },2500)
        setTimeout(function(){
            spat.style.transform="translate(-55% ,-85%) rotate(0deg)";
            fspat.style.transform="translate(-55% ,-85%) rotate(0deg)";
            update();
        },3500)
        f=2;
        
    } 
    else if(f==2){
            fspat.style.visibility="visible";
            spat.style.visibility="hidden";
            fspat.style.transform="translate(-235%,-270%)";
            spat.style.transform="translate(-235%,-270%)";
            setTimeout(function(){
                fspat.style.visibility="hidden"
                pow2.style.visibility="visible"
                num.innerText="30.0 gm"
                spat.style.visibility="visible";
            },2500)
            setTimeout(function(){
                spat.style.transform="translate(0%,0%)rotate(20deg)"
                fspat.style.transform="translate(0%,0%)rotate(20deg)"
                update()
            },3500)
            f=3;

    }
}

function pipette(){
    if(f==4){
        pip1.style.transform="translate(-1350%,-83%) rotate(-90deg)";
        pip60.style.transform="translate(-1350%,-83%) rotate(-90deg)";
        setTimeout(function(){
            pip1.style.top="78%"
            pip60.style.top="78%"
        },1000)
        setTimeout(function(){
            pip60.style.visibility="visible"
            pip1.style.visibility="hidden"
        },1700)
        setTimeout(function(){
            pip1.style.top="60%"
            pip60.style.top="60%"

        },2500)
        setTimeout(function(){
            pip1.style.top="55%"
            pip1.style.left="35.7%"
            pip60.style.top="55%"
            pip60.style.left="35.7%"

        },4000)
        setTimeout(function(){
            pip1.style.top="75%"
            pip60.style.top="75%"
        },5500)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pow1c.style.visibility="hidden"
            pip60.style.visibility="hidden"
            sol.style.visibility="visible"
            ef1.style.visibility="hidden"
        },6700)
        setTimeout(function(){
            pip1.style.top="55%"
            pip60.style.top="55%"
        },7500)
        setTimeout(function(){
            pip1.style.visibility="hidden"
        },7700)
        setTimeout(function(){
            next1.style.visibility="visible"
        },8500)
        nb=1;    
    } 
    if(f==5){
        pip1.style.transform="translate(-1350%,-83%) rotate(-90deg)";
        pip40.style.transform="translate(-1350%,-83%) rotate(-90deg)";
        pip30.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
        pip20.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
        pip10.style.transform="translate(-1350%,-83%) rotate(-90deg)";  
        pip45.style.transform="translate(-1350%,-83%) rotate(-90deg)"; 
        pip5.style.transform="translate(-1350%,-83%) rotate(-90deg)";
        setTimeout(function(){
            pip1.style.top="78%"
            pip10.style.top="78%"
        },1000)
        setTimeout(function(){
            pip10.style.visibility="visible"
            pip1.style.visibility="hidden"
        },2000)
        f=6;
    } 
    if(f==7){
        pip1.style.top="55%"
        pip10.style.top="55%"
        setTimeout(function(){
            pip1.style.left="35.6%"
            pip40.style.left="35.6%"
            pip30.style.left="35.6%"
            pip20.style.left="35.6%"
            pip10.style.left="35.6%"
            pip45.style.left="35.6%"
            pip5.style.left="35.6%"

        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip40.style.top="78%"
        },2500)
        setTimeout(function(){
            pip40.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=8;
    }
    if(f==9){
        pip1.style.top="55%"
        pip40.style.top="55%"
        setTimeout(function(){
            pip1.style.left="70%"
            pip40.style.left="70%"
            pip30.style.left="70%"
            pip20.style.left="70%"
            pip10.style.left="70%"
            pip45.style.left="70%"
            pip5.style.left="70%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip30.style.top="78%"
        },2500)
        setTimeout(function(){
            pip30.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=10;
    }
    if(f==11){
        pip1.style.top="55%"
        pip30.style.top="55%"
        setTimeout(function(){
            pip1.style.left="35.6%"
            pip40.style.left="35.6%"
            pip30.style.left="35.6%"
            pip20.style.left="35.6%"
            pip10.style.left="35.6%"
            pip45.style.left="35.6%"
            pip5.style.left="35.6%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip20.style.top="78%"
        },2500)
        setTimeout(function(){
            pip20.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=12;
    }
    if(f==13){
        pip1.style.top="55%"
        pip20.style.top="55%"
        setTimeout(function(){
            pip1.style.left="70%"
            pip40.style.left="70%"
            pip30.style.left="70%"
            pip20.style.left="70%"
            pip10.style.left="70%"
            pip45.style.left="70%"
            pip5.style.left="70%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip40.style.top="78%"
        },2500)
        setTimeout(function(){
            pip40.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=14;
    }
    if(f==15){
        pip1.style.top="55%"
        pip40.style.top="55%"
        setTimeout(function(){
            pip1.style.left="35.6%"
            pip40.style.left="35.6%"
            pip30.style.left="35.6%"
            pip20.style.left="35.6%"
            pip10.style.left="35.6%"
            pip45.style.left="35.6%"
            pip5.style.left="35.6%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip10.style.top="78%"
        },2500)
        setTimeout(function(){
            pip10.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=16;
    }
    if(f==17){
        pip1.style.top="55%"
        pip10.style.top="55%"
        setTimeout(function(){
            pip1.style.left="70%"
            pip40.style.left="70%"
            pip30.style.left="70%"
            pip20.style.left="70%"
            pip10.style.left="70%"
            pip45.style.left="70%"
            pip5.style.left="70%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip45.style.top="78%"
        },2500)
        setTimeout(function(){
            pip45.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=18;
    }
    if(f==19){
        console.log("works")
        pip1.style.top="55%"
        pip45.style.top="55%"
        setTimeout(function(){
            pip1.style.left="35.6%"
            pip40.style.left="35.6%"
            pip30.style.left="35.6%"
            pip20.style.left="35.6%"
            pip10.style.left="35.6%"
            pip45.style.left="35.6%"
            pip5.style.left="35.6%"
        },1500)
        setTimeout(function(){
            pip1.style.top="78%"
            pip5.style.top="78%"
        },2500)
        setTimeout(function(){
            pip5.style.visibility="visible"
            pip1.style.visibility="hidden"
        },3300)
        f=20;
    }
}

function pipette10(){
    if(f==6){
        pip1.style.top="60%"
        pip10.style.top="60%"
        sol.style.top="56%"
        sol.style.left="42%"
        setTimeout(function(){
            pip1.style.top="55%"
            pip1.style.left="27.6%"
            pip10.style.top="55%"
            pip10.style.left="27.6%"
            pip20.style.top="55%"
            pip20.style.left="27.6%"
            pip30.style.top="55%"
            pip30.style.left="27.6%" 
            pip40.style.top="55%"
            pip40.style.left="27.6%"
            pip45.style.top="55%"
            pip45.style.left="27.6%"
            pip5.style.top="55%"
            pip5.style.left="27.6%"    
        },1000);
        setTimeout(function(){
            pip10.style.top="75%"
            pip1.style.top="75%"
        },2000)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pip10.style.visibility="hidden"
            sol.style.visibility="visible"
            ef1.style.visibility="hidden"
        },3300)
        f=7;
    }
    if(f==16){
        pip1.style.top="55%"
        pip10.style.top="55%" 
        setTimeout(function(){
            pip1.style.left="7.6%"
            pip30.style.left="7.6%"
            pip40.style.left="7.6%"
            pip20.style.left="7.6%"
            pip10.style.left="7.6%"
            pip45.style.left="7.6%"
            pip5.style.left="7.6%"
        },1000)
        setTimeout(function(){
            pip1.style.top="78%"
            pip10.style.top="78%"
         },2000)
         setTimeout(function(){
            pip1.style.visibility="visible"
            pip10.style.visibility="hidden"
            sol10.style.visibility="visible"
            sol.style.visibility="hidden"
        },3000)
        f=17;
    }
}
function pipette40(){
    if(f==8){
        pip1.style.top="55%"
        pip40.style.top="55%"
        sol40.style.top="56%"
        sol40.style.left="42%" 
        setTimeout(function(){
            pip1.style.left="27.6%"
            pip40.style.left="27.6%"
            pip30.style.left="27.6%"
            pip20.style.left="27.6%"
            pip10.style.left="27.6%"
            pip45.style.left="27.6%"
            pip5.style.left="27.6%"
        },1000)
        setTimeout(function(){
        pip1.style.top="78%"
        pip40.style.top="78%"
        },2000)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pip40.style.visibility="hidden"
            sol40.style.visibility="visible"
            sol.style.visibility="hidden"
        },3000)
        f=9;   
    }
    if(f==14){
        pip1.style.top="55%"
        pip40.style.top="55%"
        sol.style.top="56%"
        sol.style.left="22%"
        setTimeout(function(){
            pip1.style.left="7.6%"
            pip40.style.left="7.6%"
            pip30.style.left="7.6%"
            pip20.style.left="7.6%"
            pip10.style.left="7.6%"
            pip45.style.left="7.6%"
            pip5.style.left="7.6%"
        },1000)
        setTimeout(function(){
        pip1.style.top="78%"
        pip40.style.top="78%"
        },2000)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pip40.style.visibility="hidden"
            sol.style.visibility="visible"
            ef3.style.visibility="hidden"
        },3000)
        f=15;

    }
}
function pipette30(){
    if(f==10){
        pip1.style.top="55%"
        pip30.style.top="55%"
        sol.style.top="56%"
        sol.style.left="32%" 
        setTimeout(function(){
            pip1.style.left="17.6%"
            pip30.style.left="17.6%"
            pip40.style.left="17.6%"
            pip20.style.left="17.6%"
            pip10.style.left="17.6%"
            pip45.style.left="17.6%"
            pip5.style.left="17.6%"
        },1000)
        setTimeout(function(){
            pip1.style.top="78%"
            pip30.style.top="78%"
         },2000)
         setTimeout(function(){
            pip1.style.visibility="visible"
            pip30.style.visibility="hidden"
            sol.style.visibility="visible"
            ef2.style.visibility="hidden"
        },3000)
        f=11;
    }
}
function pipette20(){
    if(f==12){
        pip1.style.top="55%"
        pip20.style.top="55%"
        setTimeout(function(){
            pip1.style.left="17.6%"
            pip30.style.left="17.6%"
            pip40.style.left="17.6%"
            pip20.style.left="17.6%"
            pip10.style.left="17.6%"
            pip45.style.left="17.6%"
            pip5.style.left="17.6%"
        },1000)
        setTimeout(function(){
            pip1.style.top="78%"
            pip20.style.top="78%"
         },2000)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pip20.style.visibility="hidden"
            sol20.style.visibility="visible"
            sol.style.visibility="hidden"
        },3000)
        f=13; 
    }
}
function pipette45(){
    if(f==18){
        pip1.style.top="55%"
        pip45.style.top="55%"
        sol.style.top="56%"
        sol.style.left="14.5%" 
        setTimeout(function(){
            pip1.style.left="0.1%"
            pip40.style.left="0.1%"
            pip30.style.left="0.1%"
            pip20.style.left="0.1%"
            pip10.style.left="0.1%"
            pip45.style.left="0.1%"
            pip5.style.left="0.1%"
            console.log(f)
        },1000)
        setTimeout(function(){
        pip1.style.top="78%"
        pip45.style.top="78%"
        },2000)
        setTimeout(function(){
            pip1.style.visibility="visible"
            pip45.style.visibility="hidden"
            sol.style.visibility="visible"
            ef4.style.visibility="hidden"
        },3000)
        f=19;   
    }
}
function next(){
    if(nb==1){
        next1.style.visibility="hidden"
        mach.style.visibility="hidden"
        on1.style.visibility="hidden"
        tare1.style.visibility="hidden"
        dish.style.visibility="hidden"
        pow.style.visibility="hidden"
        num.style.visibility="hidden"
        spat.style.visibility="hidden"
        pip1.style.transform="translate(0%,0%)rotate(0deg)"
        pip1.style.top="63%"
        pip1.style.left="70%"
        pip1.style.width="1.5%"
        pip1.style.visibility="visible"
        sol.style.visibility="hidden"
        sol50.style.top="56%"
        sol50.style.left="50%"
        sol50.style.height="23%"
        sol50.style.visibility="visible"
        ef1.style.visibility="visible"
        ef2.style.visibility="visible"
        ef3.style.visibility="visible"
        ef4.style.visibility="visible"
        ef1.style.top="56%"
        ef1.style.left="42%"
        ef2.style.top="56%"
        ef2.style.left="32%"
        ef3.style.top="56%"
        ef3.style.left="22%"
        ef4.style.top="56%"
        ef4.style.left="14.5%"
        f=5;
    }

    
}

// function wbeaker(){
//     if(f==3){ 
//         wbeak.style.transform="translate(-50% ,-190%)rotate(-80deg)";
//         // wbeak0.style.transform="translate(-50% ,-190%)rotate(-80deg)"; 

//         setTimeout(function(){
           
//             wbeak.style.visibility="hidden" 
//             // wbeak0.style.visibility="visible"  
           
//         },800); 
//         setTimeout(function(){

//             drop.style.visibility="visible"
            
//         },1300); 
//         setTimeout(function(){

//             // wbeak0.style.visibility="hidden";  
//             wbeak.style.visibility="visible"; 
//             drop.style.visibility="hidden";
//             wbeak.style.transform="translate(0%,0%)rotate(0deg)"
//             // wbeak0.style.transform="translate(0%,0%)rotate(0deg)"
//          },1500);
//     }
// }
