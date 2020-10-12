      // More API functions here:
      // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

      // the link to your model provided by Teachable Machine export panel
      const URL = "https://teachablemachine.withgoogle.com/models/Wtend12ON/";

      let model, webcam, labelContainer, maxPredictions;

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
        const prediction = await model.predict(userImg, false);
        for (let i = 0; i < maxPredictions; i++) {
          let predictPercentage = prediction[i].probability.toFixed(2)*100;

          newResultHtml +=`    <div id="result__item" data-itemorder="${i}">
          <div id="result__item__label" data-labelorder="${i}">
            ${prediction[i].className}
          </div>
  
          <div id="result__item__progress">
              <div id="result__item__progress__bar">
                <div id="result__item__progress__bar__percentage" data-barorder="${i}" style="width:${predictPercentage}%">
                </div>
              </div>
              <div id="result__item__progress__percentage" data-percentageorder="${i}">${predictPercentage}%</div>
          </div>

  
          <div id="result__item__hr"></div>
      </div>`
        }
console.log(newResultHtml)
      }