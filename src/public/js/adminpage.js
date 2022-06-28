function websiteVisit(response){
    document.querySelector('.views').textContent=response.value
}
function checkClass(e){
    var btn1Element=document.querySelector(`.schedule-box${e} .btn-1`)
    var scheduleDetailElement = document.querySelector(`.schedule-detail${e}`)
    btn1Element.onclick = function(e){
        if(scheduleDetailElement.style.display=='none'){
            Object.assign(scheduleDetailElement.style, {
                display: 'block',
            })
            e.target.innerHTML='Less'
        }
        else{
            Object.assign(scheduleDetailElement.style, {
                display: 'none',
            })
            e.target.innerHTML='Detail'
        }
    }
    
        

    // document.querySelector('.btn-2').onclick = function(e){
    //     var clearScheduleElemntent = document.querySelector('.clear-schedule')
    //     console.log(clearScheduleElemntent);
    //     Object.assign(clearScheduleElemntent.style,{
    //         display: 'block'
    //     })
    // }

    // document.querySelector('.clear-2').onclick = function(e){
    //     var clearScheduleElemntent = document.querySelector('.clear-schedule')
    //     Object.assign(clearScheduleElemntent.style,{
    //         display: 'none',
    //         transition: 'all 0.2s'
    //     })   
    // }
}


