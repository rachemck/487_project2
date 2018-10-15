$(document).ready(function(){
  console.log('test');

  $('.single-item').slick({
    dots: true,
    adaptiveHeight: true,

  });


  $("#recommend").flip();
  $(".card").flip();
});

$('.ok-button').hide();

        $('.edit-button,.ok-button').on('click',function(){

        	$('.edit-button,.ok-button').toggle()
        });

        $('#quiz').quiz({
          //resultsScreen: '#results-screen',
          //counter: false,
          //homeButton: '#custom-home',
          counterFormat: 'Question %current of %total',
          questions: [
            {
              'q': 'What is a cord never?',
              'options': [
                'That annoying friend who never brings their phone charger',
                'Someone who has never paid for cable or satellite TV service',
                'An anti-leash dog owner who lets their dog roam free'
              ],
              'correctIndex': 1,
              'correctResponse': 'Good job, that was obvious.',
              'incorrectResponse': 'Did you even think about it?'
            },
            {
              'q': 'How many awards has Netflix been nominated for?',
              'options': [
                '430',
                '320',
                '245'
              ],
              'correctIndex': 0,
              'correctResponse': 'Correct! How did you remember that?',
              'incorrectResponse': 'Sorry, that was a tough one'
            },
            {
              'q': 'Streaming services like Netflix have become an affordable alternative to cable packages',
              'options': [
                'True',
                'False'
              ],
              'correctIndex': 0,
              'correctResponse': 'You\'re a genius! Just kidding, that was an easy question',
              'incorrectResponse': 'I am starting to worry that you haven\'t learned anything!'
            },
            {
              'q': 'Which of the following is a scientific reason why binge-watching is so addicting?',
              'options': [
                'I have no life',
                'Dopamine',
                'I have no friends'
              ],
              'correctIndex': 1,
              'correctResponse': 'Correct! Look at you go!',
              'incorrectResponse': 'Wrong! Maybe try making some friends though?'
            }
          ]
        });
