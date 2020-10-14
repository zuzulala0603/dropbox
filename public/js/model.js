// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/kjDHwpgms/";

let model,
    webcam,
    labelContainer,
    maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();


    console.log("이닛이 완료?");
}

// run the webcam image through the image model
async function predict() {
    let userImg = document.getElementById("upload__user__img");
    let resultArray = []
    const prediction = await model.predict(userImg, false);
    for (let i = 0; i < maxPredictions; i++) {
        let percentage = prediction[i].probability.toFixed(2) * 100;
        let label = prediction[i].className
        if (percentage !== 0)
            resultArray.push({ "percentage": percentage, "label": label })
    }
    resultArray.sort(function (a, b) {
        return b.percentage - a.percentage

    });

    for (let j = 0; j < 6; j++) {
        if (resultArray[j] != undefined) {
            newResultHtml += `            <div id="result__list__item">
        <div id="result__list__item__label" class="result__list__item__${j}th"> ${resultArray[j].label}</div>
        <div id="result__list__item__percentageBox">
            <div id="result__list__item__percentageBox__bar" class="result__list__item__${j}th__percentageBox" style="width: ${resultArray[j].percentage}%; min-width:7%"></div>
        </div>
        <div id="result__list__item__percentageBox__percentage" class="result__list__item__${j}th">${resultArray[j].percentage}%</div>
    </div>`
        }
    }
}
