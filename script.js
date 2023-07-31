const text=[ 'aasbjvhsvc',
'bbssgjshsb',
'ccjhhghsj',
'ddhsxvjcskj',
'eehjjbxjx',
'ffgsjftgv',
'ggvbxhvb'];

const form =document.querySelector('.lorem-form');
const amount= document.getElementById('amount');
const result= document.querySelector('.lorem-text');
const btn=  document.querySelector('.btn')


btn.addEventListener("click",function(e){
e.preventDefault()
const value=parseInt(amount.value);
console.log(value);
const random= Math.floor(Math.random() * text.length)

if(isNaN(value)|| value<0 || value>9){
    result.innerHTML = `<p class="result">${text[random]}</p>`
}

else{
    let tempTxt= text.slice(0,value)
    tempTxt = tempTxt.map(function(item){
        return `<p class="result">${item}</p>`
    }).join("")

    result.innerHTML= tempTxt


}
});
