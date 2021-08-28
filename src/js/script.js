// Kalender
var now = new Date();
var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var ids = ["nBulan", "nHari", "hTanggal", "tahun"];
var values = [months[mo], week[dname], dnum, yr];
for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];

// Jam
var hour = document.getElementById("jam");
var minute = document.getElementById("menit");
var seconds = document.getElementById("detik");

var clock = setInterval(
    function time() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }


        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

    }, 1000
);

// Deadline

// agama
var countDateAgama = new Date('August 31 2021 24:00:00').getTime();
var agama = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateAgama - now

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor((gap % (hari)) / (jam));
    var m = Math.floor((gap % (jam)) / (menit));
    var d = Math.floor((gap % (menit) / (detik)));

    if (h < 10) {
        h = "0" + h;
    }
    if (j < 10) {
        j = "0" + j;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }

    document.getElementById("agama").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (gap < 0) {
        clearInterval(agama);
        document.getElementById("agama").innerHTML = "Telah lewat tenggat waktu!";
    }

}, 1000);

// sosiologi
var countDateSosiologi = new Date('August 31 2021 24:00:00').getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateSosiologi - now

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor((gap % (hari)) / (jam));
    var m = Math.floor((gap % (jam)) / (menit));
    var d = Math.floor((gap % (menit) / (detik)));

    if (h < 10) {
        h = "0" + h;
    }
    if (j < 10) {
        j = "0" + j;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }

    document.getElementById("sosiologi").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (gap < 0) {
        clearInterval(x);
        document.getElementById("sosiologi").innerHTML = "Telah lewat tenggat waktu!";
    }

}, 1000);

// pkwu
var countDate = new Date('September 20 2021 24:00:00').getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    gap = countDate - now

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor((gap % (hari)) / (jam));
    var m = Math.floor((gap % (jam)) / (menit));
    var d = Math.floor((gap % (menit) / (detik)));

    if (h < 10) {
        h = "0" + h;
    }
    if (j < 10) {
        j = "0" + j;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }

    document.getElementById("pkwu").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (gap < 0) {
        clearInterval(x);
        document.getElementById("pkwu").innerHTML = "Telah lewat tenggat waktu!";
    }

}, 1000);