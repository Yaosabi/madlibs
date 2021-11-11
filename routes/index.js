var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//POST form data
router.post('/story', function (req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
});

module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `There once was a ${formData.adjective1} boy who lived on ${formData.noun1} street. Everyone knew him because he would always ${formData.verb1}!`
}

function generateStory2(formData){
  return `There once was a ${formData.adjective1} creature that lived in a zoo. At night people say it would ${formData.verb1} with a ${formData.noun1}!`
}

function generateStory3(formData){
  return `There was a ${formData.adjective1} man who's favorite instrument was the ${formData.noun1}. He ${formData.pastTenseVerb1} it so hard he broke his ${formData.noun1}`
}