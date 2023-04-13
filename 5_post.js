
var post_trial_instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p>Thank you for your participation </p>
  <p>If you are ready to for the next step, please contact the researcher. </p>`,
  choices: ['Continue']
}

var fullscreen_trial_exit = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
  };
  
var post_timeline = [];
post_timeline.push(post_trial_instruction);
post_timeline.push(fullscreen_trial_exit);