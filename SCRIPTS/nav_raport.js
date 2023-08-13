var tresc_slider = [
    'Ja po pływaniu i zjedzeniu śniadanka, gotowy na przejażdżkę rowerową.',
    'Piękne widoki jakie mieliśmy na trasie rowerowej. Niestety kosztem tych widoków była jazda góra - dół.',
    'Tutaj trasa, którą przejechaliśmy na rowerku, mój telefon zgłupiał na chwilę i nie policzył mi 10 kilometrów.',
    'Legalny wynik na liczniku i My tuż po powrocie z rowerowej przygody',
    'Wspaniałe widoki na zachód na Balicach podczas Naszego półmaratonu',
    'My, bardzo zmęczeni na którymś kilometrze spacerko-biegu. Jestem bardzo wdzięczny Justynie, że zechciała zrobić ze mną ten wyczyn :D.',
    'Równiótki półmaraton, ani metra więcej :P.'
]
$(document).ready(function(){
    $('#nav_raport > div > ul > li > a').on('click', function(){
        $('main > div').slideUp(500);
        $($(this).attr('href')).slideDown(500);
    });

    $('#wyczyn_left_btn').on('click', function(){
        var obr = (document.getElementById('wyczyn_img').src).slice(-5,-4);
        if(obr==0){
            document.getElementById('wyczyn_img').src = '../IMG/WYCZYN/'+6+'.jpg';
            document.getElementById('wyczyn_tresc_p').innerHTML = tresc_slider[6];
        }else{
            document.getElementById('wyczyn_img').src = '../IMG/WYCZYN/'+(obr-1)+'.jpg';
            document.getElementById('wyczyn_tresc_p').innerHTML = tresc_slider[(obr-1)];
        }
    });
    $('#wyczyn_right_btn').on('click', function(){
        var obr = (document.getElementById('wyczyn_img').src).slice(-5,-4);
        if(obr==6){
            document.getElementById('wyczyn_img').src = '../IMG/WYCZYN/'+0+'.jpg';
            document.getElementById('wyczyn_tresc_p').innerHTML = tresc_slider[0];
        }else{
            obr++;
            document.getElementById('wyczyn_img').src = '../IMG/WYCZYN/'+(obr)+'.jpg';
            document.getElementById('wyczyn_tresc_p').innerHTML = tresc_slider[(obr)];
        }
    });
});