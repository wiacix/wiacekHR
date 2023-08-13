var img_tab_0 = ['prywatne_0.jpg', 'prywatne_1.jpg', 'prywatne_2.jpg'];
var img_tab_1 = ['harcerstwo_0.jpg', 'harcerstwo_1.jpg', 'harcerstwo_2.jpg', 'harcerstwo_3.jpg', 'harcerstwo_4.jpg'];
var img_tab_2 = ['hobby_0.jpg', 'hobby_1.jpg', 'hobby_2.jpg', 'hobby_3.jpg'];

function slider(num, tab){
    var aktualne = (document.getElementById('slider_'+num).src).slice(-5,-4);
        if(aktualne>=(tab.length-1)) document.getElementById('slider_'+num).src = '../IMG/SLIDER/'+tab[0];
        else document.getElementById('slider_'+num).src = '../IMG/SLIDER/'+tab[++aktualne];
}

setInterval(slider, 3000, 0, img_tab_0);
setInterval(slider, 3000, 1, img_tab_1);
setInterval(slider, 3000, 2, img_tab_2);