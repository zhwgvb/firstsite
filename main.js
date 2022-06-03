let obidki=["):","Ну не обижай","Ну всё, я плачу","В пиве-наша сила и мудрость","Я и не знал, что любовь может быть жестока"]
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const form=document.querySelector(".form")
const form_width=parseInt(getComputedStyle(form).width)
const form_height=parseInt(getComputedStyle(form).height)
const yes_block=document.querySelector(".yes_block")
const no_block=document.querySelector(".no_block")
const yes_inp=document.forms.main.elements.yes
const no_inp=document.forms.main.elements.no
let count=0
yes_inp.addEventListener("change",(e)=>{
    yes_inp.checked=false
    document.querySelector(".yes").textContent="Уже натягиваю штанишки";
    document.body.style.cssText=`
    background-image: url("src/tenor.gif");
    background-size: contain;
    `
    document.querySelector(".yes").style.cssText=`
    color:white;`
    document.querySelector(".no").style.cssText=`
    color:white;`

})
no_inp.addEventListener("change",(e)=>{
    no_inp.checked=false
    no_block.style.cssText=`
    transform:translate(${random(-(form_width)/4,(form_width)/4)+"px"},${random(-(form_height)/4,(form_height)/4)+"px"})`
    document.querySelector(".no").textContent=obidki[random(0,obidki.length-1)];
    count++;
    if (count>6){
        document.body.style.cssText=`
        background-image: url("src/sad.gif");
        background-size: contain;
        `
        document.querySelector(".no").style.cssText=`
        color:white;`
        document.querySelector(".yes").style.cssText=`
        color:white;`
    }

})
