function theBeatlesPlay(musicians, instruments) {
  var musiciansWithInstruments = [];
  for(var i = 0; i < musicians.length; i++) {
    musiciansWithInstruments.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return musiciansWithInstruments; 
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}