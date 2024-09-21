function sale() {
    let saleData = new Date(2024, 8, 25)
    let currentData = new Date()
    let date = saleData-currentData
    let day = Math.floor(date/(24*60*60*1000))
    let hourse = Math.floor((date%(24*60*60*1000))/(60*1000*60))
    let minuts = Math.floor((date%(60*60*1000))/(60*1000))
    let seconds = Math.floor((date%(60*1000))/1000)
    let timeValue=document.getElementsByClassName("date")
    timeValue[0].innerHTML=day
    timeValue[0].innerHTML=hourse
    timeValue[0].innerHTML=minuts
    timeValue[0].innerHTML=seconds
    if(date < 0){
        timeValue[0].innerHTML="00"
        timeValue[0].innerHTML="00"
        timeValue[0].innerHTML="00"
        timeValue[0].innerHTML="00"
    }
}
sale()
setInterval(() =>{
    sale()
}, 1000);