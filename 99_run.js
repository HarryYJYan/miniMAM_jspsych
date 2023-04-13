var pre =[
    instruction,
    fullscreen_trial,
    browsercheck_instruction,
    browser_check_trial,
    results_trial, 
    preload
]
jsPsych.run(pre.concat(practice_timeline).concat(timeline).concat(post_timeline))
;

