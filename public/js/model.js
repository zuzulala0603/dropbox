      // More API functions here:
      // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

      // the link to your model provided by Teachable Machine export panel
      const URL = "https://teachablemachine.withgoogle.com/models/kjDHwpgms/";

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
        let resultArray =[]
        const prediction = await model.predict(userImg, false);
        for (let i = 0; i < maxPredictions; i++) {
          let percentage = prediction[i].probability.toFixed(2)*100;
          let label = prediction[i].className
          resultArray.push({"percentage":percentage, "label":label})
          }
          resultArray.sort(function (a, b) { 
            return b.percentage - a.percentage 
          });
         
        for(let j = 0 ; j< resultArray.length ; j++)
        {
          newResultHtml +=`    <div id="result__item" data-itemorder="${j}">
          <div id="result__item__label" data-labelorder="${j}">
            ${resultArray[j].label}
          </div>
  
          <div id="result__item__progress">
              <div id="result__item__progress__bar">
                <div id="result__item__progress__bar__percentage" data-barorder="${j}" style="width: ${resultArray[j].percentage}%; min-width:7%">
                </div>
              </div>
              <div id="result__item__progress__percentage" data-percentageorder="${j}">${resultArray[j].percentage}%</div>
          </div>

  
          <div id="result__item__hr"></div>
      </div>`
        }

      }