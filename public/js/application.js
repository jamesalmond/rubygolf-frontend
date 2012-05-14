function render_players(players){
  $('#golf tbody').html('');
  for(var player in players)
  {
    $('#golf tbody').append('<tr><td>'+players[player].my_name+'</td><td>'+players[player].passed.join(', ')+'</td>/<td>'+players[player].failed.join(', ')+'</td><td>'+players[player].character_count+'</td></tr>')
  }
}
