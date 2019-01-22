$(function(){
  // $('#Presentation').show();
  // $('#Formations').hide();
  // $('#Experiences_professionnelles').hide();
  // $('#Projets').hide();
  // $('#Competences').hide();

  $('#navcontact').click(function(){
    // $('#contact2').show();
    $('#Presentation').hide();
    $('#Formations').hide();
    $('#Experiences_professionnelles').hide();
    $('#Projets').hide();
    $('#Competences').hide();
  });

    $('#navpresentation').click(function(){
    $('#contact').show();
    $('#Presentation').show();
    $('#Formations').hide();
    $('#Experiences_professionnelles').hide();
    $('#Projets').hide();
    $('#Competences').hide();
    // $('#contact2').hide();
  });

  $('#navformations').click(function(){
    $('#contact').show();
    $('#Presentation').hide();
    $('#Formations').show();
    $('#Experiences_professionnelles').hide();
    $('#Projets').hide();
    $('#Competences').hide();
    // $('#contact2').hide();
  });

  $('#navexp').click(function(){
    $('#contact').show();
    $('#Presentation').hide();
    $('#Formations').hide();
    $('#Experiences_professionnelles').show();
    $('#Projets').hide();
    $('#Competences').hide();
    // $('#contact2').hide();
  });

  $('#navprojets').click(function(){
    $('#contact').show();
    $('#Presentation').hide();
    $('#Formations').hide();
    $('#Experiences_professionnelles').hide();
    $('#Projets').show();
    $('#Competences').hide();
    // $('#contact2').hide();
  });

  $('#navcompetences').click(function(){
    $('#contact').show();
    $('#Presentation').hide();
    $('#Formations').hide();
    $('#Experiences_professionnelles').hide();
    $('#Projets').hide();
    $('#Competences').show();
    // $('#contact2').hide();
  });

});
