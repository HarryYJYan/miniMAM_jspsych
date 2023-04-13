var jsPsych = initJsPsych({
  show_progress_bar: true,
  on_finish: function() {
    jsPsych.data.displayData();
  }
});

var instruction = {
  type: jsPsychInstructions,
  pages: ['<p>Welcome to the experiment.</p>'],
  show_clickable_nav: true
};


var fullscreen_trial = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
};



var preload = {
  type: jsPsychPreload,
  auto_preload: true
};



