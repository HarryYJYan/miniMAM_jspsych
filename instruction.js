var jsPsych = initJsPsych({
    show_progress_bar: true,
    on_finish: function() {
      jsPsych.data.displayData();
    }
  });

  var preload = {
    type: jsPsychPreload,
    auto_preload: true
  };

  var trial_1 = {
    type: jsPsychInstructions,
    pages: ['<p>Welcome to the experiment.</p><p>This is the first set of instructions.</p><p>Click next to begin.</p>',
      '<p>This is the second page of instructions.</p>',
      '<p>This is the final page.</p>'],
    show_clickable_nav: true
  };

  jsPsych.run([trial_1])