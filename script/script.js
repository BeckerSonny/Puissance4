jQuery.fn.popHead = function() {
    $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    $('head').append('<link rel="stylesheet" type="text/css" media="screen" href="style/style.css" />');
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    $('head').append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">');
};
$(this).popHead();

jQuery.fn.popHtml = function() {
    $("body").append('<div class="fond"></div>');
    $('.fond').append('<img class="img row justify-content-center offset-3 col-6" src="style/images/banner.png">');
    $('.fond').append('<div class="row justify-content-center" id="btn-param">');
    $('#btn-param').append('<button class="btn btn-outline-info col-3 nav_menu" id="classic">Partie classique</button>');
    $('#btn-param').append('<button class="btn btn-outline-info col-3 nav_menu" id="perso">Partie personnalisée</button>');
    $('.fond').append('<div class="row justify-content-center offset-3 col-7 party_options" id="party_perso">');
    $('#party_perso').append('<div class="w-100"></div>');
    $('#party_perso').append('<Label for="x" class="p_select col-7">Choisissez le nombre de colonnes : </Label>');
    $('#party_perso').append('<select name="x" id="x" class="custom-select col-2 select btn-outline-info"></select>');
    $('#party_perso').append('<div class="w-100"></div>');
    $('#party_perso').append('<Label for="y" class="p_select col-7 ">Choisissez le nombre de lignes : </Label>');
    $('#party_perso').append('<select name="y" id="y" class="custom-select col-2 select btn-outline-info"></select>');
    $('.fond').append('<div class="row justify-content-center offset-3 col-7 party_options" id="party_classique">');
    $('#party_classique').append('<div class="w-100"></div>');
    $('#party_classique').append('<p class="p_select col-6">Colonnes : </p>');
    $('#party_classique').append('<button  class="btn btn-outline-info btn_false">7</button>');
    $('#party_classique').append('<div class="w-100"></div>');
    $('#party_classique').append('<p class="p_select col-6">Lignes : </p>');
    $('#party_classique').append('<button  class="btn btn-outline-info btn_false">6</button>');
    $('.fond').append('<div class="ready_play row justify-content-center name_player"></div>');
    $('.name_player').append('<p>Choississez vos pseudo</p>');
    $('.name_player').append('<div class="w-100"></div>');
    $('.name_player').append('<label for="player1" class="p_select col-1">Joueur 1</label>');
    $('.name_player').append('<input type="text" name="player1" id="player1">');
    $('.name_player').append('<label for="color1" class="p_select col-1">Couleur :</label>');
    $('.name_player').append('<select name="color1" id="color1" class="custom-select col-2 select btn-outline-info color_select"></select>');
    $('.name_player').append('<div class="w-100"></div>');
    $('.name_player').append('<label for="player2" class="p_select col-1">Joueur 2</label>');
    $('.name_player').append('<input type="text" name="player2" id="player2">');
    $('.name_player').append('<label for="color2" class="p_select col-1">Couleur :</label>');
    $('.name_player').append('<select name="color2" id="color2" class="custom-select col-2 select btn-outline-info color_select"></select>');
    $('.name_player').append('<div class="w-100"></div>');
    $('.name_player').append('<button class="btn btn-outline-info play" id="btn_perso">Commencer</button>');
    $('.name_player').append('<button class="btn btn-outline-info play" id="btn_classique">Commencer</button>');
    $('#party_perso').append('<div class="w-100"></div>');
    $('.fond').append('<div class="container puissance"></div>');
};

jQuery.fn.colorSelect = function()
{
    
    $('.color_select').append('<option class="opt_color yellow" value="yellow">Jaune</option>');
    $('#color1').append('<option class="opt_color red" value="red">Rouge</option>');
    $('#color2').append('<option selected="selected" class="opt_color red" value="red">Rouge</option>');
    $('.color_select').append('<option class="opt_color green" value="green">Vert</option>');
    $('.color_select').append('<option class="opt_color blue" value="blue">Bleu</option>');
    $('.color_select').append('<option class="opt_color white" value="white">Blanc</option>');
    $('.color_select').append('<option class="opt_color black" value="black">Noir</option>');

    function hideColor () {
        $('.opt_color').show(0);
        $('#color2').children('.' + $('#color1').val()).hide(0);
        $('#color1').children('.' + $('#color2').val()).hide(0);
    }
    hideColor();
    $('.color_select').on("change", function () {
        hideColor();
    });

};

function create_option(element)
{
  for (var O = 4; O <= 14; O++) {
    element.append('<option value="' + O + '">' + O + '</option>');
  }
}

jQuery.fn.party_param = function()
{
    if ($(this)[0] == $('#perso')[0]) {

        if ($('.checkbox').length == 0) {
            $('#party_perso').append('<div class="checkbox"></div>');
            $('.checkbox').append('<input type="checkbox" id="return" class="return" name="return" value="return" />');
            $('.checkbox').append('<label for="return">Cochez pour pouvoir retirer le dernier jeton posé.</label>');
        } else {
            $('.checkbox').remove();
        }
 
        if ($('#y').children().length == 0) {
            create_option($('#y'));
            create_option($('#x'));
        }
        if ($('#party_perso').css('display') == "none") {
            $('.play').hide("fast");
            $('#party_classique').hide("fast");
            $('#party_perso').show("fast");
            $('.name_player').show("fast");
            $('#btn_perso').show('fast');
        } else {
            $('#party_perso').hide("fast");
            $('.name_player').hide("fast");
            $('.play').hide("fast");
        }
    } else {
        if ($('.checkbox').length !== 0) {
            $('.checkbox').remove();
        }
        if ($('#x').childNodes !== "undefined") {
            $('#x').children().remove();
            $('#y').children().remove();
        }
        if ($('#party_classique').css('display') == "none") {
            $('.play').hide("fast");
            $('#party_perso').hide("fast");
            $('#party_classique').show("fast");
            $('.name_player').show("fast");
            $('#btn_classique').show('fast');
        } else {
            $('#party_classique').hide("fast");
            $('.name_player').hide("fast");
            $('.play').hide("fast");
        }
    }
};

var div;
var player;
var nameUse;
var name1;
var name2;
var score1 = 0;
var score2 = 0;
var token;
var countClick;
var play = true;

jQuery.fn.early = function(options)
{
    countClick = 0;
    if ($('#player1').val() !== "") {
        name1 = $('#player1').val();
    } else {
        name1 = "Joueur 1";
    }
    if ($('#player2').val() !== "") {
        name2 = $('#player2').val();
    } else {
        name2 = "Joueur 2";
    }
    $('.puissance').append('<div class="row justify-content-center info_game"></div>');

    for (var y = 0; y < options.y; y++) {
        if (y === 0) {
            $('.puissance').append('<div class="row justify-content-center row_fall" id="row_fall"></div>');
        }
        $('.puissance').append('<div class="row justify-content-center row_play" id="row' + y +'"></div>');
        for (var x = 0; x < options.x; x++) {
            $('#row' + y).append('<div id="' + y + '-' + x + '" class="grid"></div>');
        }
    }
    $('.puissance').append('<button class="btn btn-outline-info quit" id="quit">Quitter</button>');
    $('.nav_menu').hide("fast");
    $('#party_perso').hide("fast");
    $('.name_player').hide("fast");
    $('.play').hide("fast");
    $('#quit').on("click", function(){
        $('.checkbox').remove();
        $(".puissance").children().remove();
        $('.nav_menu').show("fast");
    });
    player = 1;
    $(this).play();
};

function array_div_column(element)
{
  	var nb = 6;
    if ($('#y').val() !== null || $('#x').val() !== null) {
        nb = $('#y').val();
    }
    let id = element.getAttribute('id');
    idWork = id.split("-")[1];
    var column = [];
    for (var i = 0; i < nb; i++) {
        column[i]= i + '-' + idWork;
    }
    return column;
}

function locate_empty(element)
{
    var column = array_div_column(element);
    var j = column.length - 1;
        
    while (j >= 0) {
        if ($('#' + column[j]).children().length == 0) {
            return $('#' + column[j]);
        }
        j--;
    }
    return false;
}

function anim(vit, move) {
  $('#jeton_work').animate({
    "top" : move + 'px'
  }, vit);
}
function bounce(vit, move) {
  $('#jeton_work').animate({
    "top" : move + 'px'
  }, vit);
}

jQuery.fn.play = function()
{
    if (play) {
        if (player === 1) {
            token = "jeton1";
            nameUse = name1;
        } else {
            token = "jeton2";
            nameUse = name2;
        }
        $('.info_game').children().remove();
        $('.info_game').append('<div class="row justify-content-center scores"></div>');
        $('.info_game').append('<p class="score">' + name1 + ': ' + score1 + '</p>');
        $('.info_game').append('<p class="score">' + name2 + ': ' + score2 + '</p>');
        $('.info_game').append('<div class="w-100"></div>');
        $('.info_game').append('<div class="' + token + ' deco"></div>');
        $('.info_game').append('<p class="text_game"></p>');
        $('.text_game').text("Tour de " + nameUse);
        $('.info_game').append('<div class="' + token + ' deco"></div>');
        $('#row_fall').append('<div class="' + token + ' " id="jeton_work"></div>');
        $('.jeton1').css("background-color", $('#color1').val());
        $('.jeton2').css("background-color", $('#color2').val());
        $('.grid').hover(function(event){
            let tmp = jQuery(window).width() / 2;
            $('#jeton_work').css("left", event.pageX-tmp);
        });
        $('.grid').on("click", function(){
            div = locate_empty(this);
            if (div !== false) {
                countClick++;
                $('.grid').off();
                let pos_div = div.position();
                let pos_token = $('#jeton_work').position();
                let movetop = pos_div.top - pos_token.top + 10;
                let moveleft = (pos_div.left - pos_token.left) + parseInt($('#jeton_work').css("left").substr(0, $('#jeton_work').css("left").length - 2));
                $('#jeton_work').animate({
                    "left" : moveleft
                }, 10);
                anim(300, movetop);
                bounce(100, movetop - 50);
                anim(100, movetop);
                bounce(50, movetop - 25);
                anim(50, movetop);
                window.setTimeout(placeToken, 700);
                window.setTimeout(verifVictory, 725);
                window.setTimeout(playAgain, 750);
            }
        });
    }
};

function placeToken() {
    $('#jeton_work').remove();
    div.append('<div class="' + token + '"></div');
    $('.jeton1').css("background-color", $('#color1').val());
    $('.jeton2').css("background-color", $('#color2').val());
}

function verifVictory() {
    $(this).Victory(div);
}

function playAgain() {
    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
    let id = $(div).attr('id');
    if ($('#return').length !==0) {
        if ($('#return').get(0).checked === true) {
            $('.info_game').append('<div class="w-100"></div>');
            $('.info_game').append('<p>Continuer ou annuler la dernière action ?</p>');
            $('.info_game').append('<div class="w-100"></div>');
            $('.info_game').append('<button class="returnToken btn btn-outline-info col-3" id="continue">Continuer</button>');
            $('.info_game').append('<button class="returnToken btn btn-outline-info col-4" id="remove">Annuler la dernière action</button>');
            $('#continue').on('click', function () {
                $(this).play();
            });
            $('#remove').on('click', function () {
                $('#' + id).children().remove();
                countClick--;
                if (player === 1) {
                    player = 2;
                } else {
                    player = 1;
                }
                $(this).play();
            });
        } else {

            $(this).play();
        }
    } else {
        $(this).play();
    }
}

function changeDirection(direction) {
    if (direction == 'rightTop') {
        return "leftBottom";
    } else if (direction == 'leftBottom') {
        return "leftTop";
    } else if (direction == 'leftTop') {
        return "rightBottom";
    } else {
        return false;
    }
}

jQuery.fn.Victory = function(element)
{
    let id = $(element).attr('id');
    function showVictory() {
        if (player === 1) {
            score1++;
        } else {
            score2++;
        }
        $('.info_game').children().remove();
        $('.info_game').append('<p class="score">' + name1 + ': ' + score1 + '</p>');
        $('.info_game').append('<p class="score">' + name2 + ': ' + score2 + '</p>');
        $('.info_game').append('<div class="w-100"></div>');
        $('.info_game').append('<div class="row justify-content-center victory"></div>');
        $('.victory').append('<p>' + nameUse + ' a gagné !</p>');
        for (let i = 0; i < arrVictory.length; i++) {
           $('#' + arrVictory[i]).children().addClass('tokenWin');
        }
    }

    function showEgal() {
        $('.info_game').children().remove();
        $('.info_game').append('<div class="row justify-content-center victory"></div>');
        $('.victory').append('<p>Match nul !</p>');
    }

    function youWin(value, bool = true) {
        if (value === 3 && (bool === true || bool == "rightTop" || bool == 'leftTop')) {
            arrVictory.push($(div).attr('id'));
            play = false;
            showVictory();
            return true;
        } else if (value === 4) {
            play = false;
            showVictory();
            return true;
        }
        return false;
    }
    var arrVictory = [];
    function horizVerif(idActual = id ,value = 0, right = true) {
        let idAdd = idActual.split("-");
        direction = right;
        if (direction) {
            idAdd[1]++;
        } else {
            idAdd[1]--;
        }
        WorkId = idAdd.join("-");
        if ($('#' + WorkId).length !== 0) {
            if ($('#' + WorkId).children().length === 1 && $('#' + WorkId).children().hasClass('' + token + '')) {
                value++;
                arrVictory.push(WorkId); 
                victory = youWin(value, direction);
                if (!victory) {
                    horizVerif(WorkId, value, direction);
                }
            } else if (direction) {
                arrVictory = [];
                value = 0;
                horizVerif(WorkId, value, false);
            }
        } else if (direction) {
            arrVictory = [];
            value = 0;
            horizVerif(WorkId, value, false);
        }
    }

    function verticVerif(idActual = id, value = 0) {
        if (play) {
            let idAdd = idActual.split("-");
            idAdd[0]++;
            WorkId = idAdd.join("-");
            if ($('#' + WorkId).length !== 0) {
                if ($('#' + WorkId).children().length === 1 && $('#' + WorkId).children().hasClass('' + token + '')) {
                    value++;
                    arrVictory.push(WorkId);
                    victory = youWin(value);
                    if (!victory) {
                        verticVerif(WorkId, value);
                    }
                }
            }
        }
    }

var leftBool = true;
    function diagVerif(idActual = id ,value = 0, direction = "rightTop") {
        if (direction == "leftTop" && leftBool === true) {
            idActual = id;
            leftBool = false;
        }
        let idAdd = idActual.split("-");
        idAdd[0] = parseInt(idAdd[0]);
        idAdd[1] = parseInt(idAdd[1]);
        if (!direction) {
            return null;
        }
        let go = true;
        if (idAdd[0] == 0 && (direction == 'rightTop' || direction == 'leftTop')) {
            go = false;
        } else if (idAdd[1] == 0 && (direction == 'leftTop' || direction == 'leftBottom')) {
            go = false;
        }
        if (go === true) {
            if (direction == "rightTop") {
                idAdd[0]--;
                idAdd[1]++;
            } else if (direction == "rightBottom") {
                idAdd[0]++;
                idAdd[1]++;
            } else if (direction == "leftTop") {
                idAdd[0]--;
                idAdd[1]--;
            }  else if (direction == "leftBottom") {
                idAdd[0]++;
                idAdd[1]--;
            }
        }
        WorkId = idAdd.join("-");
        if ($('#' + WorkId).length !== 0 && go === true) {
            if ($('#' + WorkId).children().length === 1 && $('#' + WorkId).children().hasClass('' + token + '')) {
                value++;
                arrVictory.push(WorkId);
                victory = youWin(value, direction);
                if (!victory) {
                    diagVerif(WorkId, value, direction);
                }
            } else {
                value = 0;
                arrVictory = [];
                direction = changeDirection(direction);
                diagVerif(WorkId, value, direction);
            }
        } else {
            value = 0;
            arrVictory = [];
            if (!leftBool) {
                value++;
                arrVictory.push(WorkId);
            }else if (direction == 'rightTop' && !go) {
                value++;
                arrVictory.push(WorkId);
            }
            direction = changeDirection(direction);
            diagVerif(WorkId, value, direction);
        }
    }

    function fullVerif() {
        if ($('#y').val() != null && $('#x').val() != null) {
            if (countClick == $('#y').val() * $('#x').val()) {
                play = false;
                showEgal();
            }
        } else {
            if (countClick == 6 * 7) {
                play = false;
                showEgal();
            }
        }
    }

    arrVictory = [];
    horizVerif();
    arrVictory = [];
    verticVerif();
    arrVictory = [];
    diagVerif();
    arrVictory = [];
    if (play) {
        fullVerif();
    }

    leftBool = true;
};

$(document).ready(function(){
    $(this).popHtml();
    $(this).colorSelect();

    $('.party_options').hide(0);
    $('.name_player').hide(0);
    $('.play').hide(0);

    $('.play').on("click", function(){
        if (play.length !== 0) {
            play = true;
        }
        $(".puissance").children().remove();
        $('.party_options').hide(0);
      	var y;
      	var x;
        if ($(this)[0] == $('#btn_perso')[0]) {
            y = $('#y').val();
            x = $('#x').val();
        } else {
            y = 6;
            x = 7;
        }
        $(this).early ({
        "y": y,
        "x": x
        });
    });

    $('.nav_menu').on("click", function(){
        $(this).party_param();
    });
});