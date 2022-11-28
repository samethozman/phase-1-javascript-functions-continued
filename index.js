// code your solution here
function saturdayFun(activity){
    if (activity === undefined) {activity = `roller-skate`}
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(job) {
    if (job === undefined) {job = `go to the office`}
    return `This Monday, I will ${job}.`

}

function wrapAdjective(thingToWrap){
    if (thingToWrap === undefined){thingToWrap = "*"}
    const innerFunction = function(nicePhrase){
        if (nicePhrase === undefined) {nicePhrase = "special"}
        return `You are ${thingToWrap}${nicePhrase}${thingToWrap}!`

    }
    return innerFunction
}