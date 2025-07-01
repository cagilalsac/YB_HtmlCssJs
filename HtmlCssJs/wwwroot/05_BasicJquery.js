$(function() {
    $("h4").text("Şarkı bilgileri");
    $("<hr>").insertAfter('h4');
    $(".myClass").html('<strong>Şarkı</strong>');
    $("#tbSarki").val("");
    var tbSarkiDegeri = $("#tbSarki").val();
    console.log(tbSarkiDegeri);

    $("#bYazdir").click(function () {
        var sarki = $("#tbSarki").val();
        var sanatci = $("#ddlSanatci").val();
        if (sanatci == "") {
            $(".lSanatci").css("color", "red");
            $(".lSanatci").text("Lütfen sanatçı seçiniz...");
            return;
        } 
        $(".lSanatci").text("");
        var turler = $("#ddlTurler").val();
        var turlerString = "";
        if (turler.length > 0) {
            for (var i = 0; i < turler.length; i++) {
                turlerString += turler[i] + " ";
            }
        }
        var yerliMi = $("#cbYerliMi").prop("checked");
        var donem = $('input[name="dönem"]:checked').val();
        var aciklama = $("#tbAciklama").val();

        var sonuc = "";
        sonuc += "Şarkı: " + sarki + "<br>";
        sonuc += "Sanatçı: " + sanatci + "<br>";
        sonuc += "Türler: " + turlerString + "<br>";
        sonuc += "Yerli / Yabancı: " + (yerliMi ? "Yerli" : "Yabancı") + "<br>";
        sonuc += "Dönem: " + donem + "<br>";
        sonuc += "Açıklama: " + aciklama + "<br>";
        $("#pSarkiBilgileri").html(sonuc);
    });

    $("#bTemizle").on('click', function () {
        $("#tbSarki").val("");
        $("#ddlSanatci").val("");
        $("#ddlTurler").val([]);
        $("#cbYerliMi").prop("checked", false);
        $('input[name="dönem"]').first().prop('checked', true);
        $("#tbAciklama").val("");
    });

    $(".link").click(function (event) {
        event.preventDefault();
        alert("need4code");
    });
});