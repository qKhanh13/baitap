//bài Tập 4
     function Dong_ho() {
         let gio = document.getElementById("gio");
         let phut = document.getElementById("phut");
         let giay = document.getElementById("giay");
         let Gio_hien_tai = new Date().getHours();
         let Phut_hien_tai = new Date().getMinutes();
         let Giay_hien_tai = new Date().getSeconds();
         gio.innerHTML = Gio_hien_tai;
         phut.innerHTML = Phut_hien_tai;
         giay.innerHTML = Giay_hien_tai;
     }
    var Dem_gio = setInterval(Dong_ho, 1000);
