
let msTens = document.getElementById('msTens')
let msHund = document.getElementById('msHundreds')
let theCOlon = document.getElementById('colon')
let secOne = document.getElementById('secondOnes')
let secTen = document.getElementById('secondTens')

let t = 0;

const counting = () =>{
    if (t < 10000){
        t = t+10
        let second = t.toString()
        msTens.innerHTML = second[second.length-2]
        msHund.innerHTML = second[second.length-3]
        if (t >=1000 && t<10000){
            secOne.innerHTML = second[0]
        }
    } else{
        secTen.innerHTML = '1'
        secOne.innerHTML = '0'
        msTens.style.color = "red"
        msHund.style.color = "red"
        colon.style.color = "red"
        secOne.style.color = "red"
        secTen.style.color = "red"
    }
}

let myTime = setInterval(counting, 10)