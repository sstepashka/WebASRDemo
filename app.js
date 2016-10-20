(function() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || null;

    function check_asr_availability() {
        alert(SpeechRecognition);
    }

    function recognize() {
        var recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = function() { console.log("onstart"); }
        recognition.onresult = function(event) { console.log("onresult"); }
        recognition.onerror = function(event) { console.log(event); }
        recognition.onend = function() { console.log("onend"); }

        // alert(recognition);

        recognition.start();
    }

    window.check_asr_availability = check_asr_availability;
    window.recognize = recognize;
})();