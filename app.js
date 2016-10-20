(function() {
    var GSpeechRecognition = null;
    if ('SpeechRecognition' in window) {
        GSpeechRecognition = SpeechRecognition;
    } else if ('webkitSpeechRecognition' in window) {
        GSpeechRecognition = webkitSpeechRecognition;
    }

    function check_asr_availability() {
        alert(GSpeechRecognition);
    }

    var recognition = null;

    function start() {
        if (recognition == null) {
            recognition = new GSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;

            recognition.onstart = function() { console.log("onstart"); }

            var final_transcript = "";

            recognition.onresult = function(event) {
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    }
                }
            }
            recognition.onerror = function(event) { console.log(event); }
            recognition.onend = function() { alert(final_transcript); }

            recognition.start();
        }
    }

    function stop() {
        if (recognition != null) {
            recognition.stop();
            recognition = null;
        }
    }

    window.check_asr_availability = check_asr_availability;
    window.start = start;
    window.stop = stop;
})();