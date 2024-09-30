function mudarImg(Img){
    let body = document.body;

    switch(Img){
        case 'batman': body.style.backgroundImage = "url('batmam.jpg')"; break;
        case 'batmoto': body.style.backgroundImage = "url('batmoto.jpg')"; break;
        case 'ghotam': body.style.backgroundImage = "url('gotham.jpg')"; break;
        case 'morcego': body.style.backgroundImage = "url('morcego.jpg')"; break;
      
      
        default: body.style.backgroundImage = 'black';

    }
}