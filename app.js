const url = 'https://purpleschool.ru/course/javascript';

const urlArray = url.split('/');
const emptyEl = urlArray.indexOf('');
const dotted = urlArray.indexOf(':');
if (emptyEl) {
  urlArray.splice(emptyEl, 1);
}
const [protocol, domenName, ...pathToFile] = urlArray;
const currentPath = pathToFile.join('/');
const protocolName = protocol.slice(0, -1)


function getUrlParts(url) {
  const [protocol, _, host, ...path] = url.split('/');
  if (protocol === 'https:' || protocol === 'http:') {
    if (!host.includes('.')) {
      return;
    }
    console.log(protocol, host, path);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь: /${path.join('/')}`);
  } else {
    console.log('Некоректные данные')
  }

}

getUrlParts(url);