// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
var recognizer = new webkitSpeechRecognition();

// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;

// Какой язык будем распознавать?
recognizer.lang = 'ru-Ru';

// Используем колбек для обработки результатов
recognizer.onresult = function (event) {
  var result = event.results[event.resultIndex];
  if (result.isFinal) {
    alert('Вы сказали: ' + result[0].transcript);
  } else {
    console.log('Промежуточный результат: ', result[0].transcript);
  }
};

function speech () {
  // Начинаем слушать микрофон и распознавать голос
  recognizer.start();
}

var synth = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance('Hello all,What are you doing?,Would you, please, keep an eye on my baggage?,Dont you like it?');

function talk () {
  synth.speak (utterance);
}

function stop () {
  synth.pause();
}
