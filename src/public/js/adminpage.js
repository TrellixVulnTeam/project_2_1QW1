function websiteVisit(response){
    document.querySelector('.views').textContent=response.value
}
let i=0
var btn1Element = document.querySelectorAll('.btn-1')
var scheduleDetailElemnt=document.querySelectorAll('.schedule-detail')
for(i=0 ; i<btn1Element.length; i++){
    var clearScheduleStyle= scheduleDetailElemnt[i].style
    if(clearScheduleStyle.display=='none'){
            Object.assign(scheduleDetailElemnt[i].style, {
                display: 'block',
            })
            e.target.innerHTML='Less'
    }
    // btn1Element[i].onclick=function(e){
    //     if(scheduleDetailElemnt[i].style.display=='none'){
    //         Object.assign(scheduleDetailElemnt[i].style, {
    //             display: 'block',
    //         })
    //         e.target.innerHTML='Less'
    //     }
    //     else{
    //         Object.assign(scheduleDetailElemnt[i].style, {
    //             display: 'none',
    //         })
    //         e.target.innerHTML='Detail'
    //     }  
    // }   
}

document.querySelector('.btn-2').onclick = function(e){
    var clearScheduleElemntent = document.querySelector('.clear-schedule')
    console.log(clearScheduleElemntent);
    Object.assign(clearScheduleElemntent.style,{
        display: 'block'
    })
}
document.querySelector('.clear-2').onclick = function(e){
    var clearScheduleElemntent = document.querySelector('.clear-schedule')
    Object.assign(clearScheduleElemntent.style,{
        display: 'none',
        transition: 'all 0.2s'
    })
    
}