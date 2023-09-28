// @name            Esperantists nask by day
// @description     Display list of esperantist by nask (data from wikidata.org)
// @version         2023.09.28 (v1.0.0)
// @author          @JaviRamosLab (Javier Ramos) https://github.com/JaviRamosLab/
// @downloadURL     https://github.com/JaviRamosLab/Esperantists-nask-by-day/raw/master/esperantists-nask-by-day.js
// @License         Licensed under the GNU license

let limit = 50;
const todayDate = new Date();

let naskDay = todayDate.getDate();

let monthNumber = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
let naskMonth = monthNumber[todayDate.getMonth()];

function getData(){

fetch(`https://query.wikidata.org/sparql?query=SELECT%20%3Fitem%20%3FitemLabel%20%3Fnask%0AWHERE%0A%7B%0A%20%20%3Fitem%20wdt%3AP1412%20wd%3AQ143.%20%20%20%20%20%20%20%0A%20%20%3Fitem%20wdt%3AP569%20%3Fnask.%0A%20%20FILTER%20(%20%20%20month(%3Fnask)%20%3D%20${naskMonth}%20%26%26%20day(%3Fnask)%20%3D%20${naskDay}%20%20).%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22eo%2Cen%22%20%7D%0A%7D%0ALIMIT%20${limit}&format=json`)
    .then(res => res.json())
    .then(data => fecthData(data))
    .catch(err => console.log(err))

    const fecthData = (data) => {
    let rezulto = data.results.bindings
    let totalo = data.results.bindings.length
    let body = '';
    for (let i = 0; i < rezulto.length; i++) {
    let naskDate = rezulto[i].nask.value;
    naskDate = naskDate.replace(/T.+/gm, "");
    body += `<span id="fullData"><span id="number">${i + 1}</span>  - <span id="esperantist"><a href="${rezulto[i].item.value}">${rezulto[i].itemLabel.value}</a></span> <span id="NaskDate">(${naskDate})</span></span><br>`
    }
    document.getElementById('totalo').innerHTML = 'Totalo: ' + totalo + ' sperantistoj<br>';
    document.getElementById('esperantistsNaskByDay').innerHTML = body
}
}

window.onload = getData();