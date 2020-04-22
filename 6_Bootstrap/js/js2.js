function randomInteger(min, max) {  //функция рандома между min и max числами
    let rand = min + Math.random() * (max + 1 - min); // Math.random()- ранодомное число
    return Math.floor(rand);  // результат функции используется для magic 
}

function setForm(target) {  //функция создания поля ввода информации
    target.innerHTML = ""   //// Replaces body content with an empty string.

    let forma = document.createElement("form")
    forma.classList.add("form-group")
    target.appendChild(forma)

    let text = document.createElement("textarea")
    text.classList.add("form-control")
    forma.appendChild(text)

    let soxr = document.createElement("input")
    soxr.classList.add("btn", "btn-sm", "px-5", "mx-auto", "mt-4")
    soxr.type = "submit"
    soxr.value = "Save"
    forma.appendChild(soxr)
    forma.onsubmit = function (e) {
        e.target.parentNode.innerText = e.target.elements[0].value // При нажатии сохраняет значение вписанного 
        return false
    }
}

function CreateTable(str, stb) {    //функция создания таблицы 
    let table = document.createElement("table")
    table.classList.add("table", "table-responsive", "table-bordered")
    for (let i = 0; i <= str; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j <= stb; j++) {
            let stolbets = document.createElement("td")
            stroka.appendChild(stolbets)

            //Создаем архив букв 
            let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (j == 0 && i == 0) {  //условие нулевой строки и столбца, ничего не заносим 
                stolbets.classList.add("colour")
            }
            else if (j == 0 && i !== 0) { //условие нулевого столбца(добавляем цифры)
                let tsifra = document.createElement("p") // Создаем пустой элем p -текст 
                tsifra.innerHTML = i //Далее заполним нумерацию
                stolbets.classList.add("colour", "shir")
                stolbets.appendChild(tsifra)
            }
            else if (i == 0 && j !== 0) { //добавляем буквы для  нулевой строки 
                let bukva = document.createElement("p")
                bukva.innerHTML = arr_EN[j - 1]  
                stolbets.classList.add("colour")
                stolbets.appendChild(bukva)
            }
            else {                        //создание поля textarea
                setForm(stolbets)
            }
            table.appendChild(stroka)
        }
        document.querySelector(".container").appendChild(table)
    }
}

function First(functions) {  //  Создаем первую  карточку
    let div1 = document.createElement("div") // 1 поле ввода
    div1.classList.add("card", "p-2", "mr-1", "mb-1")
    functions.appendChild(div1)

    let h6_1 = document.createElement("h6") //1. header
    h6_1.classList.add("card-title")
    h6_1.innerHTML = "Boarders"
    div1.appendChild(h6_1)

    let p1 = document.createElement("p")  //2. text
    p1.classList.add("card-text")
    p1.innerHTML = "Enter the width and border style in the boxes below."
    div1.appendChild(p1)

    let shirina = document.createElement("input") //3. поля ввода
    shirina.type = "text"
    shirina.maxLength = 3
    shirina.classList.add("form-text", "form-control")
    shirina.oninput = function () { but1.innerText = "apply " + shirina.value + " px" + " and boarder " + variant.value }
    div1.appendChild(shirina) // при занесении результата меняется результат кнопки apply

    const border = ["none", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
    let variant = document.createElement("select")
    variant.classList.add("form-text", "form-control")
    div1.appendChild(variant)
    for (let i = 0; i < border.length; i++) {
        let opt = document.createElement("option")
        opt.innerText = border[i]
        variant.appendChild(opt)
        variant.onchange = function () { but1.innerText = "apply " + shirina.value + " px" + " and boarder " + variant.value }
    } //при  изменении результата меняется результат кнопки apply

    let but1 = document.createElement("button")  //4. button 
    but1.classList.add("knopka", "btn", "btn-secondary", "mx-auto", "mt-2")
    but1.innerText = "Apply"
    but1.onclick = function () {
        let text = but1.parentNode.querySelector("input").value
        let borderStyle = but1.parentNode.querySelector("select").value

        if (text.search(/\D/) >= 0 || text < 1) {
            alert("ERROR 404!")
        } else {
            document.querySelector("table").style.borderStyle = borderStyle
            document.querySelector("table").style.borderWidth = text + "px"
        }
    }
    div1.appendChild(but1)


}

function Second(functions) { // 2nd card 
    let div2 = document.createElement("div") // SECOND FIELD 
    div2.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div2)

    let h6_2 = document.createElement("h6") //1. header
    h6_2.classList.add("card-title")
    h6_2.innerHTML = "Table header"
    div2.appendChild(h6_2)

    let p2 = document.createElement("p")  //2. Text
    p2.classList.add("card-text")
    p2.innerText = "Insert header for the table below."
    div2.appendChild(p2)

    let zag = document.createElement("input") //3. input place
    zag.classList.add("form-text", "form-control")
    zag.type = "text"
    div2.appendChild(zag)

    let but2 = document.createElement("button")  //4. button
    but2.classList.add("btn", "btn-secondary", "mx-auto", "mt-2")
    but2.innerText = "Add"
    but2.onclick = function () { H.innerText = zag.value } //добавляет заголовок таблице
    div2.appendChild(but2)

}

function Third(functions) { // 3rd card 
    let div3 = document.createElement("div") // 3rd field 
    div3.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div3)


    let h6_3 = document.createElement("h6") //1. header
    h6_3.classList.add("card-title")
    h6_3.innerHTML = "Delete Row"
    div3.appendChild(h6_3)

    let p3 = document.createElement("p") //2. Text
    p3.classList.add("card-text")
    p3.innerText = "Insert row number and column number in order to delete."
    div3.appendChild(p3)


    let divv1 = document.createElement("div") //3. поле ввода 1 
    divv1.classList.add("input-group", "mb-3")
    div3.appendChild(divv1)

    let str = document.createElement("input")
    str.classList.add("form-control")
    str.placeholder = "Row"
    str.type = "text"
    divv1.appendChild(str)

    let divv2 = document.createElement("div") //4. кнопка для строки
    divv2.classList.add("input-group-append")
    divv1.appendChild(divv2)

    let but3 = document.createElement("button")
    but3.classList.add("btn", "btn-secondary")
    but3.innerText = "Delete"
    but3.onclick = function () {
        if (str.value > 0 && str.value < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.value].remove()
        } else { alert("Incorrect value") }
    }
    divv2.appendChild(but3)


    let divv_1 = document.createElement("div") //5. поле ввода 2
    divv_1.classList.add("input-group", "mb-3")
    div3.appendChild(divv_1)

    let str2 = document.createElement("input")
    str2.classList.add("form-control")
    str2.placeholder = "Column"
    str2.type = "text"
    divv_1.appendChild(str2)

    let divv_2 = document.createElement("div") //6. кнопка для столбца
    divv_2.classList.add("input-group-append")
    divv_1.appendChild(divv_2)

    let but33 = document.createElement("button")
    but33.classList.add("btn", "btn-secondary")
    but33.innerText = "Delete"
    but33.onclick = function () {
        if (str2.value > 0 && str2.value < document.getElementsByTagName("tr")[0].getElementsByTagName("td").length) {
            let trs = document.getElementsByTagName("tr")
            for (let i = 0; i < trs.length; i++) {
                trs[i].getElementsByTagName("td")[str2.value].remove()
            }
        } else { alert("Incorrect value") }
    }
    divv_2.appendChild(but33)
}

function Fourth(functions) {  //Function of creating a 4th card
    let div4 = document.createElement("div") // 4th filed 
    div4.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div4)

    let h6_4 = document.createElement("h6") //1. header 
    h6_4.classList.add("card-title")
    h6_4.innerHTML = "Randomizer"
    div4.appendChild(h6_4)


    let p4 = document.createElement("p") // 2. текст
    p4.classList.add("card-text")
    p4.innerText = "Just press it!"
    div4.appendChild(p4)

    let but4 = document.createElement("button") //3. кнопка
    but4.classList.add("btn", "btn-secondary")
    but4.innerText = "Magic"
    but4.onclick = function () {
        let randi = randomInteger(1, document.getElementsByTagName("tr").length)
        let randj = randomInteger(1, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length)
        let rand = document.getElementsByTagName("tr")[randi].childNodes[randj]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt" // размер шрифта, который считается рандомно от 15 до 25, pt - это размерность
        if (Math.random() > 0.5) {
            setForm(rand)
        }
    }
    div4.appendChild(but4)
}

function Fifth(functions) {  //Функция создания 5 карточки
    let div5 = document.createElement("div") // 5th filed 
    div5.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div5)

    let h6_5 = document.createElement("h6") //1. Header
    h6_5.classList.add("card-title")
    h6_5.innerHTML = "Clean table"
    div5.appendChild(h6_5)

    let p5 = document.createElement("p") //2. text
    p5.classList.add("card-text")
    p5.innerText = "Erases randomizer's effect."
    div5.appendChild(p5)

    let but5 = document.createElement("button")  //3. кнопка
    but5.classList.add("btn", "btn-secondary")
    but5.innerText = "Erase"
    but5.onclick = function () {
        let inputs = functions.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        };

        H.innerText = "undefined"
        document.getElementsByClassName("knopka")[0].innerHTML = "Apply"

        let trs = document.getElementsByTagName("tr")

        for (let i = 1; i < trs.length; i++) {
            let tds = trs[i].getElementsByTagName("td")
            for (let j = 1; j < tds.length; j++) {
                tds[j].style.backgroundColor = "white"
                tds[j].style.color = "black"
                tds[j].style.fontSize = "inherit"
                document.querySelector("table").style.border = "none"
                setForm(tds[j])
            }
        }
    }
    div5.appendChild(but5)
}

function CreateBlocks() {   //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions", "mx-1", "d-flex", "justify-content-around", "mt-3", "flex-wrap")
    document.querySelector(".container").appendChild(functions)

    First(functions)
    Second(functions)
    Third(functions)
    Fourth(functions)
    Fifth(functions)

    return false
}



let mas = []                                                 //вытаскиваю переданные параметры и добавляю их в массив
let raw = document.location.search.substring(1).split("&")
for (let i = 0; i < raw.length; i++) {
    let value = raw[i].split("=")[1]
    mas.push(value)
}


CreateBlocks()                      //создаю блок настроек

let H = document.createElement("h1")  //создлаю заголовок
H.innerHTML = "Undefined"
document.querySelector(".container").appendChild(H)

CreateTable(mas[0], mas[1])          //создаю таблицу