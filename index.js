// code your solution here

function saturdayFun(activity = `roller-skate`){

     return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity= `go to the office`){

    return `This Monday, I will ${activity}.`
}

function wrapAdjective(jina = "special"){
    const innerFunction = function (aye = "*"){
        return `You are ${jina}${aye}${jina}!`
    }
    return innerFunction
}

//wrapAdjective("%")("a dedicated programmmer")