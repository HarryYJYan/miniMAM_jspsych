var jsPsych = initJsPsych({
    show_progress_bar: true,
    on_finish: function() {
      jsPsych.data.displayData();
    }
  });
  
var instruction = {
    type: jsPsychInstructions,
    pages: ['<p>Welcome to the experiment.</p><p>This is the first set of instructions.</p><p>Click next to begin.</p>',
      '<p>This is the second page of instructions.</p>',
      '<p>This is the final page.</p>'],
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

  
var browsercheck_instruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<p>The next trial will be the browser-check plugin.</p>
            <p>The minimum width is set to 1000px and the minimum height to 600px.</p>
            <p>Make your window too small now if you want to test the minimum size features.</p>`,
    choices: ['Continue']
}

var browser_check_trial = {
    type: jsPsychBrowserCheck,
    minimum_width: 1000,
    minimum_height: 600,
};

var results_trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
    var browser_check_data = jsPsych.data.get().last(1).values()[0];
    var html = `<div style="width:700px; text-align: left">
      <p>Browser check results</p>
      <p>Window size: ${browser_check_data.width}px x ${browser_check_data.height}px.</p>
      <p>Browser: ${browser_check_data.browser} version ${browser_check_data.browser_version}</p>
      <p>OS: ${browser_check_data.os}</p>
      <p>Mobile device: ${browser_check_data.mobile}</p>
      <p>Frame rate: ${browser_check_data.vsync_rate}</p>
      <p>WebAudio API support: ${browser_check_data.webaudio}</p>
      <p>Fullscreen API support: ${browser_check_data.fullscreen}</p>
      <p>Webcam support: ${browser_check_data.webcam}</p>
      <p>Microphone support: ${browser_check_data.microphone}</p>
    `
    return html;
  },
  choices: ['Done']
}

var fullscreen_trial_exit = {
  type: jsPsychFullscreen,
  fullscreen_mode: false
};


jsPsych.run([
    instruction, 
    fullscreen_trial, 
    preload,
    browsercheck_instruction,
    browser_check_trial,
    results_trial,
    fullscreen_trial_exit
]);

