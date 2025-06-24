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

function oyunuEsitligeGoreAra() {
    var input = document.getElementsByTagName("input");
    var inputValue = input[0].value;

    var output = document.getElementsByClassName("sonuc")[0];

    var outputValue = "";
    if (inputValue == "") {
        output.innerText = "Oyun bulunamadı!";
        return;
    } 

    

    for (var oyun of oyunlar) {
        if (oyun == inputValue) {
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

}