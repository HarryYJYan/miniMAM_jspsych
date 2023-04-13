
var imgPaths = ['./img/9041.jpg', './img/7050.JPG', './img/6831.JPG', './img/9490.JPG', './img/5720.JPG', 
'./img/7900.JPG', './img/9290.JPG', './img/4670.jpg', './img/4659.JPG', './img/7150.JPG', './img/9140.JPG', 
'./img/7025.JPG', './img/7380.jpg', './img/5390.JPG', './img/5621.JPG', './img/1080.JPG', './img/2205.JPG', 
'./img/4660.jpg', './img/2750.jpg', './img/9360.JPG', './img/2800.JPG', './img/9410.jpg',  './img/8030.JPG',
'./img/5000.JPG', './img/3060.jpg', './img/9830.JPG',  './img/4695.jpg', './img/5628.jpg', './img/1710.jpg', 
'./img/2580.JPG', './img/1945.JPG', './img/2320.jpg', './img/5260.jpg', './img/2682.JPG', './img/8185.JPG', 
'./img/2480.JPG', './img/7060.JPG', './img/2440.JPG', './img/6020.jpg', './img/7100.JPG', './img/6550.jpg']
 //'./img/5010.jpg', './img/1931.jpg', 
  
// shuffle the image list
jsPsych.randomization.shuffle(imgPaths);


var trial_instruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<p>This is the end of practice. </p>
    <p>If you are ready to start the main study, please click 'continue'. </p>
    <p>If you have any questions, please contact the researchers.</p>`,
    choices: ['Continue']
  }

var timeline = [];
timeline.push(trial_instruction);

for (const img of imgPaths) {
  var arousal_trial = createArousalTrial(img);
  arousal_trial.trial_id = "arousal_" + img.split("/").pop().split(".")[0];
  var valence_trial = createValenceTrial(img);
  valence_trial.trial_id = "valence_" + img.split("/").pop().split(".")[0];
  timeline.push(arousal_trial);
  timeline.push(valence_trial);
}
