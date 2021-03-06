/**
 * 1- Kücük Ahmet vagonlardan birinde saklanir.
2. Kullanicinin maximum 4 denemede Kücük Ahmet'in oldugu vagonu bulmasi gerekir.
3. Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
4. Kullanıcının dogru vagonu kac defada bildiği ve puani (100 üzerinden) consola veya ekrana yazdırılacaktir.
*/
/**
 * kullanicidan en az 4 tahminde 1 ile 10 arasindaki tutulan sayiyi bulmasini isteyecegiz,bunun icin tutulan rakam ve maksimum hak sayisinin degerleri atanir.
 * 1<=sayi<=10 arsinda bir random sayi türetilir, ahmetin hangi vagonda oldugunu belirlemek icin, her arama baslangicinda bu random deger degisir.
 * tahmin sayisi bir deger olarak atanir. tahmin sayisi  4 ihtimalli yazdirilir. 4 ihtimal; tahmin sayisi randomsayisina esittir, kücüktür veya büyüuktur ve dördünü olarak tahmin sayisinin number girilmeme ihtimali
 * son olarak kullanicinin ne kadar sürede kac denemede skor yaptigini ekrana ve consola yazdiririz
 */

//Random wagon numbers from 1 to 10 are generated and stored in this wagon

const max_tutlan_rakam = 10;
const max_hak_sayisi = 4;

const suspiciousWagon = Math.floor((Math.random() * max_tutlan_rakam) + 1);
console.log(suspiciousWagon);

let numberOfPredictions = 0;
for (numberOfPredictions = 0; numberOfPredictions < max_hak_sayisi; numberOfPredictions++) {

    let prediction = +prompt("Tahmininizi giriniz lütfen : ");
    if (suspiciousWagon === prediction) {
        console.log("congratulations correct guess..");
        break;
    } else if (prediction == "") {
        console.log("enter a number")

    } else if (prediction > suspiciousWagon) {
        console.log("see front wagons..")
    } else if (prediction < suspiciousWagon) {
        console.log("see back wagons..")
    }
}
//how many times the user knows and his score (out of 100) will be printed on the console
if (numberOfPredictions < max_hak_sayisi) {
    console.log(`congratulations you have known ${numberOfPredictions + 1} times. you got ${25 * (max_hak_sayisi - numberOfPredictions)} `)
} else {
    console.log("your lost your points 0");
}