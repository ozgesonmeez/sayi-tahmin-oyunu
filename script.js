let hedefSayi = Math.floor(Math.random() * 100) + 1;
let denemeSayisi = 0;
let kalanHak = 7;

function kontrolEt() {
    const input = document.getElementById("tahminInput");
    const mesaj = document.getElementById("mesaj");
    const denemeGostergesi = document.getElementById("deneme");
    const hakGostergesi = document.getElementById("hak");
    const tahminButon = document.getElementById("tahminButon");
    const tekrarButon = document.getElementById("tekrarButon");
    
    const tahmin = Number(input.value);
    
    if (!input.value) {
        mesaj.innerText = "Lütfen bir sayı girin!";
        return;
    }

    denemeSayisi++;
    kalanHak--;
    
    denemeGostergesi.innerText = denemeSayisi;
    hakGostergesi.innerText = kalanHak;

    if (tahmin === hedefSayi) {
        mesaj.innerText = `🎉 Tebrikler! ${denemeSayisi}. denemede bildin!`;
        mesaj.style.color = "green";
        oyunBitti(tahminButon, tekrarButon);
    } else if (kalanHak === 0) {
        mesaj.innerText = `Kaybettin! Sayı şuydu: ${hedefSayi}`;
        mesaj.style.color = "black";
        oyunBitti(tahminButon, tekrarButon);
    } else if (tahmin < hedefSayi) {
        mesaj.innerText = "📈 Daha YÜKSEK!";
        mesaj.style.color = "blue";
    } else {
        mesaj.innerText = "📉 Daha DÜŞÜK!";
        mesaj.style.color = "red";
    }

    input.value = "";
    input.focus();
}

function oyunBitti(btn1, btn2) {
    btn1.style.display = "none";
    btn2.style.display = "inline-block";
}

function oyunuSifirla() {
    location.reload(); // Sayfayı yenileyerek her şeyi sıfırlar
}