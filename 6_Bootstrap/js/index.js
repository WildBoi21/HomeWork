let hh1 = document.createElement("h1") //создание заголовка
hh1.classList.add("h1","mb-5")
hh1.innerText = "Create tables"
document.querySelector(".container").appendChild(hh1)  //возвращает первый элемент (container) документа, который соответствует указанному селектору или группе селекторов.

let forma = document.createElement("form") //создание формы
forma.classList.add("form-row", "form-group")
document.querySelector(".container").appendChild(forma)


let t2 = document.createElement("div")  //создание блока с кол-вом столбцов
t2.innerText = "Number of columns:"
forma.appendChild(t2)

let par2 = document.createElement("input")
par2.type = "number"
par2.classList.add("form-control", "mt-2")
par2.placeholder = "Insert number of columns"
forma.appendChild(par2)


let t1 = document.createElement("div") //создание блока с кол-вом строк
t1.innerText = "Number of rows:"
forma.appendChild(t1)

let par1 = document.createElement("input")
par1.type = "number"
par1.classList.add("form-control", "mb-5", "mt-2")
par1.placeholder = "Insert number of rows"
forma.appendChild(par1)



let soxr = document.createElement("input") //создание кнопки
soxr.type = "submit"
soxr.value = "Create"
soxr.classList.add("btn", "btn-outline-secondary-dark", "px-3", "mx-auto", "mt-2")
forma.appendChild(soxr)
forma.onsubmit = function (e) {
    if (e.target.elements[0].value < 1 || e.target.elements[1].value < 1) {
        alert("ERROR 404!")
    } else if (e.target.elements[1].value > 26){
        alert("	Too much columns!")
    } else{
        location.href = "table.html?width=" + e.target.elements[0].value + "&height=" + e.target.elements[1].value
    }

    return false
}