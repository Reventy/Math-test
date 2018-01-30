$(document).ready(function() {

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function setSvg(className, a, b, first){
        x1 = a * 39 + 36;
        x2 = b * 39 + 36;
        y1 = y2 = 132;
        x3 = (x2 - x1)/2 + x1;
        y3 = (first) ? 0 : 50;
        string = 'M'+x1+','+y1+'Q'+x3+','+y3+' '+x2+','+y2;

        document.querySelector(className).setAttribute('d', string);

        if (first) {
            document.querySelector('.argAEnter').style.left = x3 - 23 + 'px';
            $('.argAEnter').fadeIn('slow');
        } else {
            document.querySelector('.argBEnter').style.left = x3 - 23 + 'px';
            $('.argBEnter').fadeIn('slow');
        }
        $(className).fadeIn('slow');
    }

    var A = randomInteger(6,9);
    var AB = randomInteger(11,14);
    var B = AB-A;

    $('.argA').text(A);
    $('.argB').text(B);

    $('.argAEnterInput').val('');
    $('.argAEnterInput').val('');
    $('.answerEnter').val('');

    $('.answerEnter').fadeOut(0);

    setSvg('.arc1', 0, A, true);

    $('.argAEnterInput').keydown(function(){
        setTimeout(function() {
            if (A == $('.argAEnterInput').val()) {
                $('.argA').removeClass('bad');
                $('.argAEnterInput').removeClass('bad');
                $('.argAEnterInput').fadeOut(0);
                $('.argAEnter').text(A);

                setSvg('.arc2', A, AB, false);
            } else {
                $('.argA').addClass('bad');
                $('.argAEnterInput').addClass('bad');
            }
        }, 0);
    });

    $('.argBEnterInput').keydown(function(){
        setTimeout(function() {
            if (B == $('.argBEnterInput').val()) {
                $('.argB').removeClass('bad');
                $('.argBEnterInput').removeClass('bad');
                $('.argBEnterInput').fadeOut(0);
                $('.argBEnter').text(B);

                $('.answer').text('');
                $('.answerEnter').fadeIn('slow');
            } else {
                $('.argB').addClass('bad');
                $('.argBEnterInput').addClass('bad');
            }
        }, 0);
    });

    $('.answerEnter').keydown(function(){
        setTimeout(function() {
            if (AB == $('.answerEnter').val()) {
                $('.answerEnter').removeClass('bad');
                $('.answerEnter').fadeOut(0);
                $('.answer').text(AB);
            } else {
                $('.answerEnter').addClass('bad');
            }
        }, 0);
    });
});