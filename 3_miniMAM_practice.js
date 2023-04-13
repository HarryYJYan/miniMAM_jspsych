var practice_timeline = [];

function createArousalTrial(img) {
  var trial = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: 'How <b>calm or stimulated</b> did the image make you feel?',
        labels: ["Completely\ncalm\nrelaxed\nsluggish\ndull\nsleepy\nunaroused", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Stimulated\nexcited\nfrenized\njiffery\nawake\naroused"],
        required: true
      },
  ],
    scale_width: 800,
    preamble: '<img src="' + img + '"><br>',
  };
  return trial;
}

function createValenceTrial(img) {
  var trial = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: 'How <b>positive, happy, pleased</b> did the image make you feel?',
        labels: ["Not at all", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Extremely"],
        required: true
      },
      {
        prompt: 'How <b>negative, unhappy, annoyed</b> did the image make you feel?',
        labels: ["Not at all", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Extremely"],
        required: true
      },
    ],
    randomize_question_order: true,
    scale_width: 500,
    preamble: '<img src="' + img + '"><br>',
  };
  return trial;
}


var practice_instruction_1 = {
  type: jsPsychInstructions,
  pages: ['<p>In this survey, you are going to look at pictures.<br> You can view each picture as long as you like. <br> After looking at each picture, you will be asked to rate, on 3 scales, how you felt while you were looking at it.</p>',
  '<p>Note: <br> some of the images contain nudity and others contain depictions of graphic violence. Other images are of basic household items, nature, or pets.</p>',
  '<p>Push the continue button for a practice run. </p>'],
  show_clickable_nav: true
};


var practice_instruction_2 = {
  type: jsPsychInstructions,
  pages: ['<p>Good job! You have the first practice run!</p>',
  '<p>Push the continue button for the next practice run </p>'],
  show_clickable_nav: true
};

var practice_arousal_1 = createArousalTrial('./img/1931.JPG')
var practice_valence_1 = createValenceTrial('./img/1931.JPG')
var practice_arousal_2 = createArousalTrial('./img/5010.JPG')
var practice_valence_2 = createValenceTrial('./img/5010.JPG')

var practice_timeline = [
  practice_instruction_1,
  practice_arousal_1,
  practice_valence_1,
  practice_instruction_2,
  practice_arousal_2,
  practice_valence_2]


