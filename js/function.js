$(document).ready(function () {
    (function () {
        let d = new Date();
        let day = d.getDay();
        if (day == 0 || day == 6) {
            $('table').hide();
            $('.card').hide();
            $('#libur').show();
        }
        if (day == 1) {
            $('.card').show();
            $('table').show();
            $('#mapel-1').text('B.Jawa');
            $('#mapel-2').text('PJOK');
            $('#mapel-3').text('Bk');
        }
        if (day == 2) {
            $('.card').show();
            $('table').show();
            $('#mapel-1').text('PPKN');
            $('#mapel-2').text('Agama');
            $('#mapel-3').text('TIK');
        }
        if (day == 3) {
            $('.card').show();
            $('table').show();
            $('#mapel-1').text('IPS');
            $('#mapel-2').text('B.Inggris');
            $('#mapel-3').text('Seni');
        }
        if (day == 4) {
            $('.card').show();
            $('table').show();
            $('#mapel-1').text('IPA');
            $('#mapel-2').text('B.Indo');
            $('#mapel-3').text('Prakarya');
        }
        if (day == 5) {
            $('.card').show();
            $('table').show();
            $('#mapel-1').text('Matematika');
            $('#mapel-2').text('Pramuka');
            $('#mapel-3').text('');
            $('tr:last>td').hide()
        }
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
            $('#libur').hide();
            $('.pass').show();
            $('.pass_back').show();
        } else if (isNaN(day)) {
            $('html').empty().html('<h1 style="text-align:center; font-size:380%; color: red; background: black;">ERROR :(</h1>');
        }
    }());
    (function () {
        $('#wrong').hide()
        $('#submit').click(function () {
            window.location.href = '#table'
        })
$('#submit').click(function () {
    let password = $('#input').val(); 
    if (password == "password") {
        //some event
    } else {
        //some event
    }
})
    }())

});