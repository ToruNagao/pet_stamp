$(document).ready(function () {
    
    $('section#usecase p').addClass('fade-in');
    // $('p, ul#bubble-2').addClass('fade-in'); 
    // $('p.copy-right').removeClass('fade-in');
    $('section#usecase h4').addClass('fade-up'); 
    $('.heading').addClass('fade-up'); 
    // $('div.member').addClass('fade-up'); 
var controller = new ScrollMagic.Controller();
    
setTimeout(function () {
        $('#overlay').addClass('load');
        $('nav').addClass('load');
    }, 0);

    $('h2.heading-side::after').css('display', 'none');
    
    $('.fade-in').each(function(){
        var tween = TweenLite.from($(this), 0.3, {autoAlpha: 0, scale: 1, y: "+=0", ease:Linear.easeNone});
        var scene = new ScrollMagic.Scene({
            triggerHook: 0.8,
            triggerElement: this
        })
        .setTween(tween)
    
        .addTo(controller)
    })

    $('.fade-up').each(function(){
        var tween = TweenLite.from($(this), 0.3, {autoAlpha: 0, scale: 1, y: "+=50", ease:Linear.easeNone});
        var scene = new ScrollMagic.Scene({
            triggerHook: 0.8,
            triggerElement: this
            
        })
        .setTween(tween)
        .addTo(controller)
    })

    // var tlDiscoverMore = new TimelineMax().fromto('a.scroll-down-link', 4, {opacity: 0})
    var tlLineAfter = new TimelineLite();
    // tlLineAfter.from('h4.line-after',4, {width: 0});

    
    var tl = new TimelineLite();
    tl.to('.curtain-container .wrapper:nth-of-type(1)', 1, { height: 0 });
    tl.to('.curtain-container .wrapper:nth-of-type(2)', 1, { height: 0 });
    tl.to('.curtain-container .wrapper:nth-of-type(3)', 1, { height: 0 });
    // tl.to('.curtain-container .wrapper:nth-of-type(4)', 1, {height: 0});

    var appCurtainScene = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: '#product',
        duration: 2000
    })
        .setTween(tl)
        // .addIndicators()
        .setPin('#product')
        .addTo(controller);

    // var bounce = new TweenLite();
    // bounce.to("div#fixed-nav-container", 1, { ease: Bounce.easeOut, height: 100 });

    var appCurtainScene = new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: 'section#benefit',
        duration: 0,
        offset: -100
    })
        // .setTween(bounce)
        .setClassToggle("div#fixed-nav-container", "visible")
        .addTo(controller)

    var navBenefitsScece = new ScrollMagic.Scene({
        triggerElement: "section#benefit",
        triggerHook: 0,
        duration: 700

    })
        .setClassToggle("li#benefit", "active")
        // .addIndicators()
        .addTo(controller);

    var navAppScece = new ScrollMagic.Scene({
        triggerElement: "section#product",
        triggerHook: 0,
        duration: 5500
    })
        .setClassToggle("li#app", "active")
        // .addIndicators()
        .addTo(controller);


    var navServiceScece = new ScrollMagic.Scene({
        triggerElement: "section#comparison",
        triggerHook: 0,
        offset: -200,
        duration: 1800
    })
        .setClassToggle("li#comparison", "active")
        // .addIndicators()
        .addTo(controller);

    var navPremiumScece = new ScrollMagic.Scene({
        triggerElement: "section#perks",
        triggerHook: 0,
        offset: -100,
        duration: 600
    })
        .setClassToggle("li#premium", "active")
        // .addIndicators()
        .addTo(controller);

    var navServiceScece = new ScrollMagic.Scene({
        triggerElement: "section#team",
        triggerHook: 0,
        duration: 1600
    })
        .setClassToggle("li#team", "active")
        // .addIndicators()
        .addTo(controller);


    var navOptInScece = new ScrollMagic.Scene({
        triggerElement: "section#opt-in",
        triggerHook: 0,
        offset: -100,
        duration: 800
    })
        .setClassToggle("li#join-us", "active")
        // .addIndicators()
        .addTo(controller);



});