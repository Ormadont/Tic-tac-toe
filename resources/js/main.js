let nolik = true;
$('.kletka').click(function() {
  if ((this.className.search('clicked')) === -1) {
    if (nolik) {
      nolik = false;
      $(this).addClass('krestik');
      $(this).append('<p>X</p>');
    }
    else {
      nolik = true;
      $(this).addClass('nolik');
      $(this).append('<p>O</p>');
    }
  }
  $(this).addClass('clicked');
});

$('.reload').click(() => location.reload());
