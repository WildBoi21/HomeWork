document.write("<br/>");
document.write("Тестим проект");
let text = document.body.innerText; //
document.write("<br/>");

document.write("Количество слов: ", text.split(" ").length,"; Количество букв: ", text.split(" ").join("").length);
document.write("<br/>");

//Задание 1.5
let localUrl = document.location.href;
let localUrlInfo = getHrefInfo(localUrl);
function getHrefInfo(href) {
    let newHref = {
        protocol: href.substring(0, href.indexOf(':')), 
        fileExtension: href.substring(href.lastIndexOf('.') + 1, href.length), 
        fileName: href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.') ) 
    };
    return newHref;
}
// вывод
document.write("<br/>");
document.writeln("Локал URL: ");
document.write(localUrl);
document.write("<br/>");
document.writeln("Протокол: ");
document.write(localUrlInfo.protocol);
document.write("<br/>");
document.writeln("Имя: ");
document.write(localUrlInfo.fileName);
document.write("<br/>");
document.writeln("Расширение: ");
document.write(localUrlInfo.fileExtension);
document.write("<br/>");

//1.6 задание
document.write("<br/>");
document.writeln("Ссылка: "); 
document.write("https://vk.com/doc20232844_537595184?hash=e27858d8f98146752a&dl=0c19c3a98b99294ce6");
let hrefWithQueryParams = "https://vk.com/doc20232844_537595184?hash=e27858d8f98146752a&dl=0c19c3a98b99294ce6";
document.write("<br/>");
document.writeln("Параметры: ");
console.log(getQueryParams(hrefWithQueryParams)); 
document.write("<br/>");

function getQueryParams(href) {
    let queryParams = {};
    href.substring(href.indexOf('?') + 1, href.length).split('&') 
    .forEach(param => {
        const paramKeyValue = param.split('='); 
        queryParams[paramKeyValue[0]] = paramKeyValue[1]; 
        document.write(paramKeyValue[0], " = ",paramKeyValue[1]);
        document.write("<br/>");
    });
    return queryParams;
}
// Создание анкоров
for (let i = 0; i < 5; i++) {
    let anchor = (document.createElement('a')); 
    anchor.href = "https://www.google.ru"; 
    anchor.innerText = `Ancor ${i+1}`;
    anchor.style.marginRight = '10px';
    document.body.append(anchor);
    document.write("<br/>");
}
var maxWidth = 0;
    allImg = document.body.querySelectorAll('img');
    allImg.forEach((img) => {
    if (Number(img.width) > maxWidth) {
        maxWidth = img.width;
    }
    });


document.write('<br/>');
document.write('Количество анчоров: ' + document.body.getElementsByTagName('a').length);

document.write('<br/>');
document.write('Количество ссылок: ', document.getElementsByTagName('link').length);

document.write('<br/>');
document.write('Первый анчор: ',document.body.getElementsByTagName('a').item(0).innerText);

document.write('<br/>');
document.write('Количество картинок: ' + document.body.getElementsByTagName('img').length);

document.write('<br/>');
document.write('Ширина первой картинки: ', + document.body.getElementsByTagName('img').item(0).width);

document.write("<br/>");
document.write("Максимальная ширина картинки:", maxWidth);


let imagesHeightSum = 0;
document.querySelectorAll('img').forEach((img) => {
    imagesHeightSum += img.height;
});
document.write('<br/>');
document.write("Сумма ширины всех картинок: ", imagesHeightSum);

// Задание 3
document.write("<br/>");

let forms = [];
for (let i = 0; i < 10; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `id${i+1}`;
    forms.push(form); // добавили в конец списка
    document.body.append(form); // добавили в хтмл
}

// 3.2
document.write('Список имен четных форм:<br>'); 
for (let i = 0; i < document.body.getElementsByTagName('form').length; i++){ 
if ((i + 1) % 2 == 0){ 
document.write(document.body.getElementsByTagName('form').item(i).name + '<br>'); 
} 
}

// 3.3
let formsHTML = document.body.getElementsByTagName('form');
for (let i = 0; i < formsHTML.length ; i++) {
    if (i%2==0){
        let inputText = document.createElement('input');
        let inputPass = document.createElement('input');
        let inputRadio = document.createElement('input');
        inputText.type = "text";
        inputText.style.margin = "2px";
        inputPass.type = "password";
        inputPass.style.margin = "2px";
        inputRadio.type = "radio";
        inputRadio.style.margin = "2px";
        formsHTML[i].appendChild(inputText);
        formsHTML[i].appendChild(inputPass);
        formsHTML[i].appendChild(inputRadio);
    } else {
        let inputText = document.createElement('input');
        let inputRadio = document.createElement('input');
        inputText.type = "text";
        inputText.style.margin = "2px";
        inputRadio.type = "radio";
        inputRadio.style.margin = "2px";
        formsHTML[i].appendChild(inputText);
        formsHTML[i].appendChild(inputRadio);
    }

}

// 3.4
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Имя";
    button.style.margin = "2px";
    button.onclick = () => alert(button.innerText); // по клику окошко с текстом кнопки
    formsHTML[i].appendChild(button); // добвили кнопки в хтмл
}

// 3.5
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "ID";
    button.style.margin = "2px";
    button.onclick = () => alert(button.parentNode.id); 
    formsHTML[i].appendChild(button);
}

// 3.6
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'reset';
    button.innerText = "Очистить";
    button.style.margin = "2px";
    formsHTML[i].appendChild(button);
}

// 3.7
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Количество полей";
    button.style.margin = "2px";
    button.onclick = () => {
        alert(`Количество полей равно ${button.parentNode.childNodes.length}`); // посчитали братьев кнопки вместе с ней Папа-большая форма, дети-вложенные формы, их дети кнопки и поля
    };
    formsHTML[i].appendChild(button);
}

// 3.8
document.body.querySelectorAll('button').forEach((button)=> {
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
    button.style.border = '1px solid rgba(0, 0, 0, 4)';
    button.style.cursor = 'pointer';
    button.onmouseover = () => {
        button.style.backgroundColor = '#DCDCDC';
        button.style.color = "white";
    };
    button.onmouseout = () => {
        button.style.color = 'black';
        button.style.backgroundColor = '#DCDCDC';
    };
    let image = document.createElement('img');
   image.style.width = '10px';
    image.style.height = '10px';
    image.style.verticalAlign = 'bottom';
    switch (button.innerText) {
        case "Имя": image.src = 'tasks.jpg';
            break;
        case "ID":image.src = 'tasks.jpg';
            break;
        case "Очистить": image.src = 'tasks.jpg';
            break;
        case "Количество полей": image.src = 'tasks.jpg';
            break;
        default:
            image.src = 'tasks.jpg';
    }
    button.prepend(image);
});
