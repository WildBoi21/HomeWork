document.write("Тестим проект!");
let text = document.body.innerText; //
document.write("<br/>");

document.write("Количество слов: ", text.split(" ").length,"; Количество букв: ", text.split(" ").join("").length);
document.write("<br/>");

//Задание 1.5
let localUrl = document.location.href;
let localUrlInfo = getHrefInfo(localUrl);
function getHrefInfo(href) {
    let newHref = {
        protocol: href.substring(0, href.indexOf(':')), // протокол он от нулевого символа до :
        fileExtension: href.substring(href.lastIndexOf('.') + 1, href.length), // расширение от последней точки до конца
        fileName: href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.') ) // имя
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

//Задание 1.6
document.write("<br/>");
document.writeln("Ссылка: "); 
document.write("https://vk.com/doc20232844_537595184?hash=e27858d8f98146752a&dl=0c19c3a98b99294ce6");
let hrefWithQueryParams = "https://vk.com/doc20232844_537595184?hash=e27858d8f98146752a&dl=0c19c3a98b99294ce6";
document.write("<br/>");
document.writeln("Параметры: ");
console.log(getQueryParams(hrefWithQueryParams)); // вывели параметры ссылки
document.write("<br/>");

function getQueryParams(href) {
    let queryParams = {};
    href.substring(href.indexOf('?') + 1, href.length).split('&') // взяли все после ?, выкинули &, параметры разделили на подстроки
    .forEach(param => {
        const paramKeyValue = param.split('='); // еще раз разделили для каждого параметра
        queryParams[paramKeyValue[0]] = paramKeyValue[1]; // запихнули эти подстрочки в параметры
        document.write(paramKeyValue[0], " = ",paramKeyValue[1]);
        document.write("<br/>");
    });
    return queryParams;
}
