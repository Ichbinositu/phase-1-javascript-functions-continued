// code your solution here
function saturdayFun (activity='roller-skate') {
    console.log(`This Saturday, I want to ${activity}`);
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork(activity);


function wrapAdjective(star="*"){
    {
        return function (moon = "special") {
            return `You are ${star}${moon}${star}!`
        }
    }
}