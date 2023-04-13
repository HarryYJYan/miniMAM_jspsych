var trial = {
        type: jsPsychSurveyLikert,
        questions: [
            {
                prompt: 'How much do you like this picture?',
                labels: ['Strongly dislike', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Strongly like'],
                required: true
            }
        ],
        data: {
            picture_id: 1 // replace with the ID of the picture you're showing
        }
    };

    // define the timeline