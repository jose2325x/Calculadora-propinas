const form = document.getElementById('form')
const bill = document.getElementById('bill')
const tip_amount = document.getElementById('tip_amount')
const number_people = document.getElementById('number_people')
const total = document.getElementById('total')
const tip = document.getElementById('tip')
const reset = document.getElementById('reset')
const items = document.getElementsByClassName("button");

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const obtener = (number) => {
    if (number.textContent.length <= 2) {
        return Number(number.textContent.substring(0, 1))
    } else {
        return Number(number.textContent.substring(0, 2))
    }
}

form.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'button') {
        console.log('ha? ' + e.target.classList.value)
        e.target.classList.add('on')
        valor = obtener(e.target)

        // for (const x in items) { //el cambio de color de los botones :S
        //     if (items[x].classList.value == 'button on') {
        //         items[x].classList.add('on')
        //         if (x == 0) {//no se logro
        //             items[1].classList.remove('on')
        //             items[2].classList.remove('on')
        //             items[3].classList.remove('on')
        //             items[4].classList.remove('on')
        //             items[0].classList.add('on')
        //         }
        //         else if (x == 1) {//no se logro
        //             items[0].classList.remove('on')
        //             items[2].classList.remove('on')
        //             items[3].classList.remove('on')
        //             items[4].classList.remove('on')
        //             items[1].classList.add('on')
        //         }
        //         else if (x == 2) {//no se logro
        //             items[1].classList.remove('on')
        //             items[0].classList.remove('on')
        //             items[3].classList.remove('on')
        //             items[4].classList.remove('on')
        //             items[2].classList.add('on')
        //         }
        //         else if (x == 3) {//no se logro
        //             items[1].classList.remove('on')
        //             items[2].classList.remove('on')
        //             items[0].classList.remove('on')
        //             items[4].classList.remove('on')
        //             items[3].classList.add('on')
        //         }
        //         else if (x == 4) {//no se logro
        //             items[1].classList.remove('on')
        //             items[2].classList.remove('on')
        //             items[3].classList.remove('on')
        //             items[0].classList.remove('on')
        //             items[4].classList.add('on')
        //         }
        //     }

        // }
    }
    if (Number(bill.value) > 0) {
        if ((Number(number_people.value) > 0)) {
            if (Number(tip.value) > 0) {
                const result = ((Number(bill.value) * (Number(tip.value) / 100)) / (Number(number_people.value))).toFixed(2)
                tip_amount.textContent = `$${result}`
                tip_amount.classList.add('position')
                if (Number(tip_amount.textContent.length > 0)) {
                    total.textContent = `$${(Number(bill.value) / (Number(number_people.value)) + Number(result)).toFixed(2)}`
                    total.classList.add('position')
                }
            }

            const result = ((Number(bill.value) * (valor / 100)) / (Number(number_people.value))).toFixed(2)
            tip_amount.textContent = `$${result}`
            tip_amount.classList.add('position')
            if (Number(tip_amount.textContent.length > 0)) {
                total.textContent = `$${(Number(bill.value) / (Number(number_people.value)) + Number(result)).toFixed(2)}`
                total.classList.add('position')
            }
        }

    }
}
)

reset.addEventListener('click', () => {
    bill.value = ''
    tip.value = ''
    number_people.value = ''
    tip_amount.textContent = '$0.00'
    total.textContent = '$0.00'
    for (const item in items) {
        items[item].classList.remove('on')
    }
})

const modo = document.getElementById('modo')
modo.addEventListener('click', () => {
    const root = document.documentElement
    root.style.setProperty('--modo', 'column')
})

bill.addEventListener('change',()=>{
    const root = document.documentElement
    root.style.setProperty('--used', 'hsl(172, 67%, 45%)')
})