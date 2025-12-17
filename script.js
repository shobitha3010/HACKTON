function checkJob() {
    const text = document.getElementById("jobText").value.toLowerCase();
    const result = document.getElementById("result");

    if (text.trim() === "") {
        result.style.background = "#444";
        result.innerHTML = "⚠ Please enter a job description.";
        return;
    }

    const fakeKeywords = [
        "pay registration fee",
        "no interview",
        "work from home and earn",
        "whatsapp only",
        "urgent hiring",
        "limited seats",
        "guaranteed job",
        "investment required",
        "no experience needed",
        "processing fee"
    ];

    let fakeScore = 0;

    fakeKeywords.forEach(keyword => {
        if (text.includes(keyword)) {
            fakeScore++;
        }
    });

    if (fakeScore >= 3) {
        result.style.background = "#7f1d1d";
        result.innerHTML = "🚫 WARNING: This job looks FAKE!";
    } else {
        result.style.background = "#14532d";
        result.innerHTML = "✅ This job looks SAFE.";
    }
}