var currentVideo = "";

// Button Functionality
// Show Trivia Video
$("#project-list").on("click", "#trivia", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/trivia-img.jpg"' +
      'alt="trivia image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://www.github.com/Djpowell23/TriviaGame")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/TriviaGame/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Crystal Collector Video
$("#project-list").on("click", "#crystal", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/crystal-img.jpg"' +
      'alt="crystal image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/unit-4-game")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/unit-4-game/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});
// Show Hangman Game Video
$("#project-list").on("click", "#hangman", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/hangman-img.jpg"' +
      'alt="trivia image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/Word-Guess-Game")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/Word-Guess-Game/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});
// Show GIPHY Video
$("#project-list").on("click", "#giphy", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/giphy-img.jpg"' +
      'alt="trivia image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("hhttps://github.com/Djpowell23/GIFtastic")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/GIFtastic/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});
// Show Tunedea Video
$("#project-list").on("click", "#tunedea", function() {
  // Create variable with new video
  //   currentVideo = $(
  //     '<iframe width="560" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  //   );

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/tunedea-img.jpg"' +
      'alt="trivia image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/Tunedea")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/Tunedea/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Liri Node App Video
$("#project-list").on("click", "#liri", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/Nmr8PjLgT4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/liri-img.png"' +
      'alt="liri-image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/liri-node-app")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Bamazon App Video
$("#project-list").on("click", "#bamazon", function() {
  // Create variable with new video
  let currentVideo = $(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  );

  // Images to take video spot until I can record them
  //  $('#video-player').append(
  //      '<img class="placeholder" style="width:620px; height:400px;" ' +
  //      'src="assets/images/liri-img.png"' + 'alt="liri-image">' + '</img>'
  //  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/MySQL-NodeJS")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show FriendFinder App Video
$("#project-list").on("click", "#friendfinder", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://youtu.be/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/FriendFinder-img.jpg"' +
      'alt="FriendFinder-image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/FriendFinder-app")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://vast-coast-93774.herokuapp.com/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Burger App Image
$("#project-list").on("click", "#expressburger", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://youtu.be/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/expressburger.jpg"' +
      'alt="burger-image">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/burger")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://damp-lake-65910.herokuapp.com/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Postivism
$("#project-list").on("click", "#postivism", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://youtu.be/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/postivism.jpg"' +
      'alt="postivism-img">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/Project2")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr("onClick", 'window.open("https://postivism.herokuapp.com")');
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Clicking Bad
$("#project-list").on("click", "#clickingBad", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://youtu.be/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:620px; height:400px;" ' +
      'src="assets/images/clickingBad.jpg"' +
      'alt="clickingBad-img">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/clickingBad")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Create variable to store Link-To-Website Button
  var siteBtn = $("<button>");
  // Add classes to siteBtn
  siteBtn.addClass("detail-btn");
  // Add onclick event
  siteBtn.attr(
    "onClick",
    'window.open("https://djpowell23.github.io/clickingBad/")'
  );
  // Add text to button
  siteBtn.text("Link to Site");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Show Say Hay
$("#project-list").on("click", "#sayHay", function() {
  // Create variable with new video
  // currentVideo = $('<iframe width="560" height="315" src="https://youtu.be/v7Yat-rtLGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Images to take video spot until I can record them
  $("#video-player").append(
    '<img class="placeholder" style="width:300px; height:400px;" ' +
      'src="assets/images/sayHay.jpg"' +
      'alt="sayHay-img">' +
      "</img>"
  );

  // Create variable to store Link-To-Code Button
  var codeBtn = $("<button>");
  // Add classes to codeBtn
  codeBtn.addClass("detail-btn");
  // Add onclick event
  codeBtn.attr(
    "onClick",
    'window.open("https://github.com/Djpowell23/Project-3")'
  );
  // Add text to Button
  codeBtn.text("Link to Code");

  // Append Buttons to HTML
  $("#project-details").append(codeBtn);
  $("#project-details").append(siteBtn);
  // Append Video to video player id
  $("#video-player").append(currentVideo);
});

// Clear Video Player and Project Details when project buttons are clicked
$(".prj-btn").on("click", function() {
  $("#video-player").empty();
  $("#project-details").empty();
});
