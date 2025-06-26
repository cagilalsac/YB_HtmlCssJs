function bilgisayarGetir1() {
    var bilgisayar = new Bilgisayar("Acer", "Predator", 3.5, 32, false, new Date("2025-06-26T19:44:26"));

    var p = document.getElementById("bilgisayar");
    p.innerHTML = bilgisayar.getir();
}

class Bilgisayar {
    constructor(marka, model, hiz, hafiza, suSogutmaliMi, uretimTarihi) {
        this.marka = marka; // textbox
        this.model = model; // textbox
        this.hiz = hiz; // textbox
        this.hafiza = hafiza; // combobox
        this.suSogutmaliMi = suSogutmaliMi; // checkbox
        this.uretimTarihi = uretimTarihi; // <input type="date">
    }

    getMarka() {
        return this.marka;
    }

    getir() {
        return '<b><i>Marka:</i></b> ' + this.getMarka() + '<br>' +
            '<b><i>Model:</i></b> ' + this.model + '<br>' +
            '<b><i>Hız:</i></b> ' + this.hiz.toLocaleString('tr-TR') + ' GHz<br>' + // 3.7, 3,7, 3.500,50 3,500.50
            '<b><i>Hafıza:</i></b> ' + this.hafiza + ' GB<br>' +
            '<b><i>Su Soğutma:</i></b> ' + (this.suSogutmaliMi ? 'Evet' : 'Hayır') + '<br>' + // true, false
            '<b><i>Üretim Tarihi:</i></b> ' + this.uretimTarihi.toLocaleString('tr-TR'); // 26.06.2025 06/26/2025
    }
}