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
