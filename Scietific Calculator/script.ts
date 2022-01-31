interface Resource {
  display: any
}

//called interface
var res = <Resource>{}

// let res.display = document.getElementById('screen')
let subDisplay = document.getElementById('sub_res.display')
let buttons = document.getElementsByClassName('btn')
const btnMC = document.querySelector('#mc')
const btnMR = document.querySelector('#mr')

res.display = document.querySelector('#screen') as HTMLInputElement

const resultDisplayed = false

Array.prototype.forEach.call(
  buttons,
  function (button: {
    addEventListener: (arg0: string, arg1: () => void) => void
    textContent: string | number
  }) {
    button.addEventListener('click', function () {
      if (
        button.textContent != '=' &&
        button.textContent != 'C' &&
        button.textContent != '×' &&
        button.textContent != '÷' &&
        button.textContent != '√' &&
        button.textContent != 'x ²' &&
        button.textContent != 'mod' &&
        button.textContent != '⌫' &&
        button.textContent != '±' &&
        button.textContent != 'sin' &&
        button.textContent != 'cos' &&
        button.textContent != 'tan' &&
        button.textContent != 'atan' &&
        button.textContent != 'acos' &&
        button.textContent != 'asin' &&
        button.textContent != 'log' &&
        button.textContent != 'In' &&
        button.textContent != 'exp' &&
        button.textContent != 'n!' &&
        button.textContent != 'π' &&
        button.textContent != '2nd' &&
        button.textContent != 'e' &&
        button.textContent != 'RAD' &&
        button.textContent != 'DEG' &&
        button.textContent != '10x' &&
        button.textContent != '1/x' &&
        button.textContent != 'xy' &&
        button.textContent != '|x|' &&
        button.textContent != 'FE' &&
        button.textContent != '⌊x⌋' &&
        button.textContent != '⌈x⌉' &&
        button.textContent != 'RAN' &&
        button.textContent != 'MC' &&
        button.textContent != 'MR' &&
        button.textContent != 'M+' &&
        button.textContent != 'M-' &&
        button.textContent != 'MS' &&
        button.textContent != 'ex' &&
        button.textContent != '2x' &&
        button.textContent != 'y√x' &&
        button.textContent != '∛x' &&
        button.textContent != '/' &&
        button.textContent != 'x3'
      ) {
        if(res.display==='0' && button.textContent==='0'){
          res.display = ''
        }
        res.display.value += button.textContent
        console.log(res.display.value)
      } else if (button.textContent === '=') {
        equals()
      } else if (button.textContent === 'C') {
        clear()
      } else if (button.textContent === '×') {
        multiply()
      } else if (button.textContent === '÷') {
        divide()
      } else if (button.textContent === '±') {
        plusMinus()
      } else if (button.textContent === '⌫') {
        backspace()
      } else if (button.textContent === 'mod') {
        percent()
      } else if (button.textContent === 'π') {
        pi()
      }
      // else if (button.textContent === 'x ²') {
      //   square()
      // } else if (button.textContent === '√') {
      // squareRoot()
      // }
      else if (button.textContent === 'sin') {
        sin()
      } else if (button.textContent === 'cos') {
        cos()
      } else if (button.textContent === 'tan') {
        tan()
      } else if (button.textContent === 'asin') {
        asin()
      } else if (button.textContent === 'acos') {
        acos()
      } else if (button.textContent === 'atan') {
        atan()
      }
      // else if (button.textContent === 'log') {
      // //   log()
      // // }
      else if (button.textContent === 'In') {
        ln()
      } else if (button.textContent === 'exp') {
        exponent()
      } else if (button.textContent === 'n!') {
        factorial()
      } else if (button.textContent === 'e') {
        exp()
      } else if (button.textContent === '10x') {
        tenpowexp()
      } else if (button.textContent === '1/x') {
        fraction()
      } else if (button.textContent === 'xy') {
        power()
      } else if (button.textContent === '|x|') {
        absvalue()
      } else if (button.textContent === 'FE') {
        fevalue()
      } else if (button.textContent === '⌊x⌋') {
        floor()
      } else if (button.textContent === '⌈x⌉') {
        ceil()
      } else if (button.textContent === 'RAN') {
        random()
      } else if (button.textContent === 'ex') {
        epowerx()
      } else if (button.textContent === '2x') {
        twopowerx()
      }
      //  else if (button.textContent === 'y√x') {
      //   yrootx()
      // }
      // else if (button.textContent === '∛x') {
      //   cubeRoot()
      // } else if (button.textContent === 'x3') {
      //   cube()
      // }
      // } else if (button.textContent === 'MC') {
      //   memoryClear()
      // } else if (button.textContent === 'MR') {
      //   memoryRecall()
      // } else if (button.textContent === 'M+') {
      //   memoryAdd()
      // } else if (button.textContent === 'M-') {
      //   memorySubtract()
      // } else if (button.textContent === 'MS') {
      //   memoryStore()
      // }
    })
  }
)

if(res.display==='0'){
  res.display.value = ''
}

function syntaxError() {
  if (
    eval(res.display.value) == SyntaxError ||
    eval(res.display.value) == ReferenceError ||
    eval(res.display.value) == TypeError
  ) {
    res.display.value == 'Syntax Error'
  }
}

function checkLength() {
  if (res.display.value.length > 15) {
    res.display.value = 'Overflow'
  }
}

function equals() {
  if (res.display.value.indexOf('^') > -1) {
    let base = res.display.value.slice(0, res.display.value.indexOf('^'))
    let exponent = res.display.value.slice(res.display.value.indexOf('^') + 1)
    res.display.value = eval('Math.pow(' + base + ',' + exponent + ')')
  } else {
    res.display.value = eval(res.display.value)
    // subDisplay.value = res.display.value
    checkLength()
    syntaxError()
  }
}

function clear() {
  res.display.value = ''
  // subDisplay.value = res.display.value
}

function backspace() {
  if (res.display.value.length > 0) {
    res.display.value = res.display.value.slice(0, res.display.value.length - 1)
    // subDisplay.value = res.display.value
  } else {
    res.display.value = ''
    // subDisplay.value = res.display.value
  }
}

function multiply() {

  res.display.value += '*'
}

function divide() {
  res.display.value += '/'
}

function plusMinus() {
  if (res.display.value.charAt(0) === '-') {
    res.display.value = res.display.value.slice(1)
  } else {
    res.display.value = '-' + res.display.value
  }
}

function factorial() {
  let fact = 1
  const value = res.display.value
  for (let i = 1; i <= value; i++) {
    fact = fact * i
    res.display.value = fact
  }
}

function pi() {
  res.display.value = res.display.value * Math.PI
}

function square() {
  // res.display.value = eval(res.display.value * res.display.value)
  res.display.value = String(Math.pow(Number(res.display.value), 2))

  // String(Math.pow(Number(res.display.value), 2))
}

function squareRoot() {
  res.display.value = Math.sqrt(res.display.value)
}

function percent() {
  res.display.value = res.display.value % res.display.value
}

function sin() {
  res.display.value = Math.sin(res.display.value)
}

function cos() {
  res.display.value = Math.cos(res.display.value)
  subDisplay += res.display.value
}

function tan() {
  res.display.value = Math.tan(res.display.value)
}

function asin() {
  res.display.value = Math.asin(res.display.value)
}

function acos() {
  res.display.value = Math.acos(res.display.value)
}

function atan() {
  res.display.value = Math.atan(res.display.value)
}

// function log() {
//   res.display.value = Math.log10(res.display.value)
// }

function ln() {
  res.display.value = Math.log(res.display.value)
}

function exponent() {
  res.display.value += '^'
}

function exp() {
  res.display.value = Math.exp(res.display.value)
}

function tenpowexp() {
  res.display.value = Math.pow(10, res.display.value)
}

function power() {
  res.display.value += '^'
}

function fraction() {
  res.display.value = (1 / res.display.value).toFixed(2)
}

function absvalue() {
  res.display.value = Math.abs(res.display.value)
}

function fevalue() {
  let num = parseFloat(res.display.value)
  res.display.value = num.toExponential()
}

function floor() {
  res.display.value = Math.floor(res.display.value)
}

function ceil() {
  res.display.value = Math.ceil(res.display.value)
}

function random() {
  res.display.value = Math.random()
}

function epowerx() {
  res.display.value = Math.pow(Math.E, res.display.value)
}

function twopowerx() {
  res.display.value = Math.pow(2, res.display.value)
}

// function cubeRoot() {
//   res.display.value = Math.cbrt(res.display.value)
// }

// function yrootx() {
//   let dvalue: string | string[], a: string | number | string[], b: string | number | string[]
//   dvalue = res.display.value
//   a = dvalue.slice(0, dvalue.indexOf('y'))
//   b = dvalue.slice(dvalue.indexOf('t') + 1)
//   return Math.pow(a, 1 / b)
// }

function cube() {
  res.display.value = Math.pow(res.display.value, 3)
}

// function degtorad() {
//   if ($('.degrees').text() == 'DEG') {
//     res.display.value = res.display.value * (180 / Math.PI)
//     $('.degrees').text('RAD')
//   } else {
//     res.display.value = res.display.value * (Math.PI / 180)
//     $('.degrees').text('DEG')
//   }
// }

//Memory functions

let memory = []

// function memoryAdd() {
//   memory.push(res.display.value)
//   subDisplay.value = `M+(${res.display.value})`
//   btnMR.style.color = 'black'
//   btnMC.style.color = 'black'
//   btnMR.style.backgroundColor = 'white'
//   btnMC.style.backgroundColor = 'white'
// }

// function memorySubtract() {
//   memory.push(eval(-res.display.value))
//   subDisplay.value = `M-(${res.display.value})`
//   btnMR.style.color = 'black'
//   btnMC.style.color = 'black'
//   btnMR.style.backgroundColor = 'white'
//   btnMC.style.backgroundColor = 'white'
// }

function memoryRecall() {
  let result = memory.reduce(function (acc, cur) {
    return acc + cur
  }, 0)
  res.display.value = result
  subDisplay = res.display.value
}

// function memoryStore() {
//   if (memory.length === 0) alert('Empyt Memory')
//   else {
//     res.display.value = memory[i]
//     i++
//     if (i === memory.length) {
//       i = 0
//     }
//   }
// }
// function memoryClear() {
//   memory = []
//   res.display.value = ''
//   subDisplay.value = ''
//   btnMR.style.color = 'grey'
//   btnMC.style.color = 'grey'
// }
