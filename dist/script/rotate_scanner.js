setTimeout(function(){
    $('.loader').addClass('done');
}, 3500);

$(document).ready(function () {
    var images = [];
    var imageIndex = 0;
    var totalImagas = 127;
    var imagePath;
    var imageLoaded = 0;
   
    for (var i = totalImagas; i > 0; i--) {
        images[imageIndex] = new Image();
        imagePath = './img/scanner_360_compressed/layer-' + i + '.png';

        images.push(imagePath);
        images[imageIndex].src = imagePath;
        images[imageIndex].addEventListener('load', loadCounter, function () {

        })
    }

    function loadingImageHandler(i) {
        setTimeout(function () {
            $('#loading-logo-container').css('opacity', i / 127);
        }
            , i * 10);
    }

    function loadCounter() {
        imageLoaded++;
        if (imageLoaded >= totalImagas) {
            $('.loader').addClass('done');
        }
    }

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = { curImg: 1 };

    // create tween
    var tweenScannerGif = TweenLite.to(obj, 0.3,
        {
            curImg: images.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 0,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                // console.log(images[obj.curImg]);
                if (images.length != 0) {
                    $("img#scanner-gif").attr("src", images[obj.curImg]); // set the image source

                }
            }
        }
    );

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var sceneScannerGif = new ScrollMagic.Scene({
        triggerElement: "section#beacon",
        duration: 600,
        triggerHook: 0.7,
    })
        // .addIndicators()
        .setTween(tweenScannerGif)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});



