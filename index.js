'use strict';


function displayPortfolio() {
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `
    <h2 class="white headline">Portfolio</h2>
    <hr class="hr1">
    <section class="card-container" role="portfolio">
    <div class="card">
    <a href="https://jgd625.github.io/quizapp/" target="blank">
    <img src="images/thumb-quiz.jpg" alt="quiz thumbnail" class="portfolio-thumbnail">
    </a>
    <h3>The Coffee Quiz</h3>
    <hr class="hr1">
    &nbsp;<i class="fab fa-html5 fa-lg teal"></i>&nbsp;<i class="fab fa-css3-alt fa-lg teal"></i>
    <i class="fab fa-js-square fa-lg teal"></i> <br />
    <p>A responsive app that tests a user on coffee lore. The first app I have designed.</p>
    <p class="center "><a href="https://jgd625.github.io/quizapp/" class="contact_link">DEMO</a> | <a href="https://github.com/JGD625/quizapp" class="contact_link">REPO</a></p>
    </div>
    <div class="card">
    <a href="https://jgd625.github.io/SpaceXAPI/index.html" target="blank">
    <img src="images/thumb-spaceX.jpg" alt="spaceX API thumbnail" class="portfolio-thumbnail">
    </a>
    <h3>SpaceX Launches</h3>
    <hr>
    &nbsp;<i class="fab fa-html5 fa-lg teal"></i>&nbsp;<i class="fab fa-css3-alt fa-lg teal"></i>
    <i class="fab fa-js-square fa-lg teal"></i><br />
    <p>Utilizes the SpaceX API to show details on launches, equipment, and the history of SpaceX.</p>
    <p class="center"><a href="https://jgd625.github.io/SpaceXAPI/index.htmlD" class="contact_link">DEMO</a> | <a href="https://github.com/JGD625/SpaceXAPI" class="contact_link">REPO</a></p>
    </div>
    </section>
    `;
}

function displayProfile(){
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `<h2 class="white headline">Hello!</h2>
    <hr class="hr1">
    <section id="profile" role="profile">
    <p>I am training in Full Stack web development with Thinkful. I enjoy watching ideas come to life, solving riddles, and studying languages. My favorite questions are “How?”, and “Why?”. I have a strong sense of design, and enjoy translating a concept into a working experience. I speak HTML, JavaScript, JQuery, CSS, native English and passable Japanese. I currently live in Atlanta.
    </p>
    <p>When I’m away from my desk, I enjoy creating art, reading, hiking, and playing video games. Not to show my age, but I love a classic side scroller. I have lived on two continents, two coasts, am always down for live music and local food. I love adventure.
    </p>
    <p>It’s a pleasure to meet you. My name is Julie.
    </p>

    </section>
    `;
}



function displayContact() {
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `
    <h2 class="white headline">Contact</h2>
    <hr class="hr1">
    <section id="contact" role"contact">
    <ul class="connect_list">
    <li><a href="https://www.linkedin.com/in/julie-butisbauch-ba8b0a63/" target="_blank"><i class="fab fa-linkedin fa-3x teal"></i></a></li>
    <li><a href="https://github.com/JGD625" target="_blank"><i class="fab fa-github fa-3x teal"></i></a></li>
    </ul>
    <br />
    <h2> I'd love to hear from you: <a href="mailto:jdbutisbauch@gmail.com?Subject=Nice%20to%20meet%20you" target="_top" class="contact_link"><i class="far fa-envelope fa-3x teal">  </i></a> </h2>
    </section>
    `;
}

function displayResume() {
    $('#js-content').empty();
    $( "#js-content" ).removeClass( "hidden" );
    $("#main-right").addClass("hidden");
    document.getElementById("js-content").innerHTML = 
    `
    <h2 class="white headline">Resume</h2>
    <hr class="hr1">
    <section id="resume-container" role="resume">
        <h3>SKILLS</h3>
            <ul>
            <li>Development: JavaScript, React, jQuery, HTML5, CSS3, Git, GitHub, NPM, RESTful APIs</li>
            <li>Related: Written & verbal communication, JLPT 2 Certified Japanese, Photoshop, Presentation Skills</li>
            <li>Proven record of problem solving, customer service, team work, and a strong understanding of design</li>
            </ul>
        <h3>EXPERIENCE</h3>
            <ul>
            <li>Thinkful Full-Stack Development (2019)</li>
            <li>Salon Gloss (2017-Present) Director of Education</li>
            <li>Fuma Salon on Melrose (2013- 2016) Stylist </li>
            <li>Neuma Beauty (2013-2016) National Design Team Artist & Educator</li>
            <li>Salon Platinum Black (2012-2013) Assistant Stylist</li>
            <li>Tsukasa Yamasaki (2009-2010)Educator</li>
            <li>Shiso-shi Board of Education (2006-2008)</li>
            </ul>
        <h3>EDUCATION</h3>
            <ul>
            <li>Aveda Institute Los Angeles (Completed 2011)</li>
            <li>Aveda Institute Atlanta (Completed 2011)</li>
            <li>Yoshida School of Language (Completed 2009)</li>
            <li>Kyoto University of Foreign Studies (2003-2004)</li>
            <li>University of Georgia (Graduation 2005)</li>
            </ul>
        <h3>ADDITIONAL TRAINING & CERTIFICATES</h3>
            <ul>
            <li>Japanese Language Proficiency Test Level 2</li>
            <li>Licensed Master Cosmetologist</li>
            <li>BEACON Award Winner</li>
            <li>Schwarzkopf Essential Cutting, Neuma Educator/NDT Certification</li>
            <li>Toni & Guy Advanced Hairdressing Academy Classics, HED Certified Stylist</li>
        
       
        
    </section>
    `;
}



