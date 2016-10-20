(function() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || null;

    function check_asr_availability() {
        alert(SpeechRecognition);
    }

    var recognition = null;

    function start() {
        if (recognition == null) {}
            var recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;

            recognition.onstart = function() { console.log("onstart"); }
            recognition.onresult = function(event) { console.log("onresult"); }
            recognition.onerror = function(event) { console.log(event); }
            recognition.onend = function() { console.log("onend"); }

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
    window.recognize = start;
    window.recognize = stop;
})();