$(document).ready(function () {
    var browserLang = navigator.language || navigator.userLanguage;
  

    if(browserLang == 'en_US'){
        window.location.replace("./index_en.html");
    } else if(browserLang == 'ja'){
        window.location.replace("./index_jp.html");
    } else{
        window.location.replace("./index_en.html");
    }
});