// When the DOM is ready, run this function$(document).ready(function() {  //#HEADER	var slideHeight = $(window).height();	$('#headere-top figure .item').css('height',slideHeight);	$(window).resize(function(){'use strict',		$('#headere-top figure .item').css('height',slideHeight);	});        //Scroll Menu	$(window).on('scroll', function(){		if( $(window).scrollTop()>600 ){			$('.header-top .header-fixed-wrapper').addClass('navbar-fixed-top animated fadeInDown');					} else {			$('.header-top .header-fixed-wrapper').removeClass('navbar-fixed-top animated fadeInDown');		}	});			 $(window).scroll(function(){                                      if ($(this).scrollTop() > 200) {                $('#menu').fadeIn(500);            } else {                $('#menu').fadeOut(500);            }        });		// Navigation Scroll	$(window).scroll(function(event) {		Scroll();	});	$('.navbar-collapse ul li a').on('click', function() {  		$('html, body').animate({scrollTop: $(this.hash).offset().top - 1}, 1000);		return false;	});	//Raymond copied and modified    $('.view-more-btn a').on('click', function() {        $('html, body').animate({scrollTop: $(this.hash).offset().top - 1}, 1000);        return false;    });		// User define function	function Scroll() {		var contentTop      =   [];		var contentBottom   =   [];		var winTop      =   $(window).scrollTop();		var rangeTop    =   200;		var rangeBottom =   500;		$('.navbar-collapse').find('.scroll a').each(function(){			contentTop.push( $( $(this).attr('href') ).offset().top);			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );		})		$.each( contentTop, function(i){			if ( winTop > contentTop[i] - rangeTop ){				$('.navbar-collapse li.scroll')				.removeClass('active')				.eq(i).addClass('active');						}		})	};    // affix  var width = $(window).width();  // var top = $('.tp-banner-container').length == 0 ? -1 : $('.section-one').offset().top - $('.navbar').height() * 2;  //  // $('.navbar').affix({  //  //   offset: {  //  //     top: top  //  //   , bottom: function () {  //  //       return (this.bottom = $('.footer').outerHeight(true))  //  //     }  //  //   }  //  // });  //  //  var owl = $("#owl-demo");      owl.owlCarousel({                itemsCustom : [          [0, 1],          [450, 1],          [600, 1],          [700, 1],          [1000, 1],          [1200, 1],          [1400, 1],          [1600, 1]        ],        navigation : true,		autoPlay : 3000,      });	  	  	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({          disableOn: 700,          type: 'iframe',          mainClass: 'mfp-fade',          removalDelay: 160,          preloader: false,          fixedContentPos: false        });	  //Start of Raymond's codes	  // Songs' source: https://www.jamendo.com/radios/Pop		var currentSong = 0;    	var song = document.createElement('audio');    	var playStatus = "stop";    	var timeLeft = 182; //durations of the first song		var timeLeftInterval = null;	//When clicking on play-pause button	    $(".play-pause-btn, .overlay-play-pause-btn").on('click', function(){	    	if (song.paused){                $(".play-pause-btn").removeClass("fa-play-circle-o");                $(".overlay-play-pause-btn").removeClass("fa-play-circle-o");                $(".play-pause-btn").addClass("fa-pause-circle-o");                $(".overlay-play-pause-btn").addClass("fa-pause-circle-o");			}else{                $(".play-pause-btn").removeClass("fa-pause-circle-o");                $(".overlay-play-pause-btn").removeClass("fa-pause-circle-o");                $(".play-pause-btn").addClass("fa-play-circle-o");                $(".overlay-play-pause-btn").addClass("fa-play-circle-o");			}            $(".song-item").removeClass("playing");         	$(".song-item").eq(currentSong).addClass("playing");            playSong();    	});	//when clicking on next button	$(".next-btn").on('click', function(){		if(currentSong < $('.song-item').length - 1 ){			currentSong ++;			$(".song-item").removeClass("playing");			$(".song-item").eq(currentSong).addClass("playing");            playThisSong(currentSong);        }	});	//When clicking back button    $(".back-btn").on('click', function(){        if(currentSong > 0 ){            currentSong-- ;            $(".song-item").removeClass("playing");            $(".song-item").eq(currentSong).addClass("playing");            playThisSong(currentSong);        }    });    //When click on each song		$('.song-item').on('click', function(){			var songIndex = $(".song-item").index(this);			if(song.paused){				$(".play-pause-btn").removeClass("fa-play-circle-o");				$(".play-pause-btn").addClass("fa-pause-circle-o");			}			$(this).siblings().removeClass("playing");			$(this).addClass("playing");			playThisSong(songIndex);		});		function playSong(){            if (playStatus == "stop") {                switch (currentSong) {                    case 0:                        song.src = 'songs/Torelli_and_the_Fuse_-_Origami.mp3';                        $('.song-title').html("Orgami");                        timeLeft = 182;                        break;                    case 1:                        song.src = 'songs/Brady_Harris_-_Welcome_Me_Back.mp3';                        $('.song-title').html("Welcome Me Back");                        timeLeft = 241;                        break;                    case 2:                        song.src = 'songs/Chasing_Eidolon_-_You_Can_t_Have_Everything.mp3';                        $('.song-title').html("You can't have everything");                        timeLeft = 227;                        break;                }                song.play();                $("#slider").css("display", "block"); //display volume adjustment slider                timeLeftManager(timeLeft);                playStatus = "playing";            } else if (playStatus == "playing"){                song.pause();                $("#slider").css("display", "none"); //hide volume adjustment slider                clearInterval(timeLeftInterval);                playStatus = "pause";            } else if (playStatus == "pause"){                song.play();                $("#slider").css("display", "block");  //display volume adjustment slider                playStatus = "playing";                timeLeft = Math.floor(song.duration) - Math.floor(song.currentTime);                console.log(timeLeft);                timeLeftManager(timeLeft)            }		}				function playThisSong(songIndex) {            currentSong = songIndex;            switch (currentSong) {                case 0:                    song.src = 'songs/Torelli_and_the_Fuse_-_Origami.mp3';                    $('.song-title').html("Orgami");                    timeLeft = 182;                    break;                case 1:                    song.src = 'songs/Brady_Harris_-_Welcome_Me_Back.mp3';                    $('.song-title').html("Welcome Me Back");                    timeLeft = 241;                    break;                case 2:                    song.src = 'songs/Chasing_Eidolon_-_You_Can_t_Have_Everything.mp3';                    $('.song-title').html("You can't have everything");                    timeLeft = 227;                    break;            }            song.play();            $("#slider").css("display", "block");  //display volume adjustment slider            if (timeLeftInterval != null){            	clearInterval(timeLeftInterval);			}            timeLeftManager(timeLeft);            playStatus = "playing"        }        function timeLeftManager(timeLeft){			timeLeftInterval = setInterval(function(){					if (timeLeft > 0) {                        timeLeft -= 1;                        //taken and modified from https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds                        var minutes = Math.floor(timeLeft/ 60);                        var seconds = timeLeft - minutes * 60;                        var progressValue = song.currentTime/ song.duration * 100;                         console.log(progressValue);                        $( "#progressbar").progressbar({                            value: progressValue                        });                        $('.min-left').html(minutes);                        $('.sec-left').html(seconds);                    } else {						clearInterval(timeLeftInterval);					}			}, 1000)		}    $( "#progressbar").progressbar({        value: 0    });		//Band members        var memberPics = ["images/team/anthony.jpg","images/team/anaia.jpg","images/team/Johnathan.jpg","images/team/julian.jpg"];        var memberNames = ["Anthony Casalena","Anaia Doe", "Johnathan Doe", "Julian Gulia"];        var memberDes = [            "Anthony is the main singer of the band. He had been a solo singer for 4 years before he joined the band. He loves beauty and is passionate about pop and inspiration music",            "Anaia is the main drummer who is also the leader of the band. Beside making beautiful and energetic sound with his lovely drum, he also produce film and video game soundtracks. ",            "Johnathan is the guitarist and his sound is the soul of the band's music. He has been playing guitar since he was 4 years old and has a very unique style of playing it. ",            "Julian is the dancer. She is the visual of the band. Her smooth and sophisticated movements not only mesmerize the audience but also inspires the rest of the bands to perform at their best form. "];        $(".team-member").on("click", function(){           $(".modal-backdrop").css("display", "block");           $(".modal-box").css("display", "block");           $(".modal-backdrop").on("click", function () {               $(".modal-backdrop").css("display", "none");               $(".modal-box").css("display", "none");           });           var memberIndex = $(".team-member").index(this);           var selectedMemberName = memberNames[memberIndex];           var selectedMemberDes = memberDes[memberIndex];           console.log(memberIndex);           $(".modal-member-name").html(selectedMemberName);           $(".modal-member-des").html(selectedMemberDes);           $(".modal-member-pic").attr("src", memberPics[memberIndex]);        });        var volumeSlider = $("#slider").roundSlider({            value: song.volume*100,            radius: 90,            width: 10,            handleSize: "+10",            sliderType: "min-range",            change: function(e){                song.volume = e.value/100;            }        });		//End of Raymond's code});