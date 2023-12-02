const input=document.querySelector('input')
const h1=document.querySelector('h1')
const h2=document.querySelector('h2')
const img=document.querySelector('img')

const kg=/\+996/
const country1='Kyrgyzstan'

const ru=/\+7/
const country2='Russia'

const qatar=/\+974/
const country3='Qatar'

const japan=/\+81/
const country4='Japan'

const kuwait=/\+965/
const country5='Kuwait'


input.onchange=()=>{
if (kg.test(input.value)) {
  
    h1.innerHTML=input.value.replace(kg, '+996')
    img.src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
    h2.innerHTML=country1
} 
if (ru.test(input.value)) {
    h2.innerHTML=country2
    h1.innerHTML=input.value.replace(ru, '+7')
    img.src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'
} 
if (qatar.test(input.value)) {
    h2.innerHTML=country3
    h1.innerHTML=input.value.replace(qatar, '+974')
    img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png'
} 
if (japan.test(input.value)) {
    h2.innerHTML=country4
    h1.innerHTML=input.value.replace(japan, '+81')
    img.src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg'
} 
if (kuwait.test(input.value)) {
    h2.innerHTML=country5
    h1.innerHTML=input.value.replace(kuwait, '+965')
    img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png'
}

else {
    h1.innerHTML=input.value=''
}
}