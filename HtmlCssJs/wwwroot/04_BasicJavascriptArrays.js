// 1. yöntem:
//var oyunlar = new Array();
// 2. yöntem:
var oyunlar = [];

// 1. yöntem:
oyunlar[0] = "GTA 5";
oyunlar[1] = "RDR 2";
oyunlar[2] = "Half-Life 2";
oyunlar[3] = "Diablo";
oyunlar[4] = "Fifa 24";

oyunlar.pop("Fifa 24");

console.log("for üzerinden array elemanları:");
for (var oyun of oyunlar) {
    console.log(oyun);
}

var ayrac = '<hr/>';

function oyunlariListele() {
    var oyunListesi = document.getElementById("oyunListesi");
    
    var oyuncuklar = "";

    if (oyunlar.length > 0) {
        for (var oyun of oyunlar) {
            oyuncuklar += oyun + ayrac;
        } // çağıl,
        oyuncuklar = oyuncuklar.substr(0, oyuncuklar.length - ayrac.length);
        oyunListesi.innerHTML = oyuncuklar;
    } else {
        oyunListesi.innerHTML = '<span style="color:red">Oyun bulunamadı!</span>';
    }
}

function inputAl() {
    var input = document.getElementsByTagName("input");
    var inputValue = input[0].value;

    var output = document.getElementsByClassName("sonuc")[0];
    

    if (inputValue == "") {
        output.innerText = "Arama değeri girilmelidir!";
        return "";
    }
    return inputValue;
}

function oyunuEsitligeGoreAra() {
    var inputValue = inputAl();

    if (inputValue == "") {
        return;
    }

    var output = document.getElementsByClassName("sonuc")[0];
    var outputValue = "";

    for (var oyun of oyunlar) {
        if (oyun.toLocaleUpperCase() == inputValue.toLocaleUpperCase().trim()) {
            outputValue = oyun;
            break;
        }
    }

    // 1. yöntem:
    //if (outputValue == "")
    //    output.innerText = "Oyun bulunamadı!";
    //else
    //    output.innerText = outputValue;
    // 2. yöntem:
    output.innerText = outputValue == "" ? "Oyun bulunamadı!" : "Bulunan oyun: " + outputValue;
}

function oyunuIcermeyeGoreAra() {
    var inputValue = inputAl();
    console.log(inputValue);

    if (inputValue == "") {
        return;
    }

    var output = document.getElementsByClassName("sonuc")[0];
    var outputValue = "";
    var sonuc = new Array();
    
    console.log(oyunlar);

    for (var oyun of oyunlar) {
        if (oyun.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().trim())) {
            console.log(oyun);
            sonuc.push(oyun);
        }
    }

    console.log(sonuc);

    if (sonuc.length > 0) {
        for (var eleman of sonuc) {
            outputValue += eleman + ayrac;
        }
    }

    output.innerHTML = outputValue == "" ? "Oyun bulunamadı!" : "Bulunan oyunlar: " + outputValue;
}

function ara() {
    var esitMiCheckBox = document.getElementById("esitmi");
    var esitMi = esitMiCheckBox.checked;
    if (esitMi) {
        oyunuEsitligeGoreAra();
    } else {
        oyunuIcermeyeGoreAra();
    }
}