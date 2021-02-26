// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAuitOnq9mJ9Ynj5Ew0OzBBabnXK6-MQ2o",
    authDomain: "arduino-futbolin.firebaseapp.com",
    databaseURL: "https://arduino-futbolin-default-rtdb.firebaseio.com",
    projectId: "arduino-futbolin",
    storageBucket: "arduino-futbolin.appspot.com",
    messagingSenderId: "64702758218",
    appId: "1:64702758218:web:7de54643f83bf4520195b3",
    measurementId: "G-GZ6N51FFPR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Pantalla en Juego
var odometer1 = document.getElementById('odometer1')
var odometer2 = document.getElementById('odometer2')

var lbResultado1 = document.getElementById('lbResultado1')
var lbResultado2 = document.getElementById('lbResultado2')

//Player 1
var refPlayer1 = firebase.database().ref("info_user/player_1");
refPlayer1.on('value', function(snapshot) {
    odometer1.innerHTML = snapshot.val().actual_gol
    lbResultado1.value = snapshot.val().actual_gol
    gol()
});

//player 2
var refPlayer2 = firebase.database().ref("info_user/player_2");
refPlayer2.on('value', function(snapshot) {
    odometer2.innerHTML = snapshot.val().actual_gol
    lbResultado2.value = snapshot.val().actual_gol
    gol2()
});

var restart = firebase.database().ref("info_user/restart");
restart.on('value', function(snapshot) {
    if(snapshot.val() == 1){
        location.reload()
    }
});

function apagar() {
    wait(3000).then(function () {
        $("#gol1").css({ 'display': 'none' });
    });
}
function apagar2() {
    wait(3000).then(function () {
        $("#gol2").css({ 'display': 'none' });
    });
}
var wait = function (tiempo) {
    return {
        then: function (f) {
            setTimeout(f, tiempo);
        }
    };
};


function gol() {
    $("#gol1").css({ 'display': 'block' });
    document.getElementById("audGol").play();
    apagar();
}
function gol2() {
    $("#gol2").css({ 'display': 'block' });
    document.getElementById("audGol").play();
    apagar2();
}
