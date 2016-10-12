var company = {
  name: 'DoorDash',
  teamAspect: 'small start-up paced',
  productAspect: 'global reach',
  teamMO1: 'taking a scientific approach to constantly  improving the productivity of your app and your  service one order at a time',
  teamValue: 'iterative software development,   continuously making small improvements,',
  productGoal: 'the best end-goal the fastest',
  frameworks: 'React and Node/Express',
  otherTechnology: 'SQL database schemes and   implementations',
  workflow: 'test-driven development'/* || 'continuous integration'*/,
  productPride: 'large-scale, no downtime',
  gourmand: 'I recently developed Gourmand, a food tracking app that solved my personal problem of not being able to remember fine foods I’d tried. I implemented the React/Redux views, including employing Webpack to bundle our ES6, as well as architected the Mongo database with backend Node/Express API routes.',
  CI: `I recently worked with a small start-up Curacubby, to implement a continuous integration system for their developers. I used CircleCI to ensure that every pull request by every developer, including contractors, would be incorporated once it passed all the system tests.`
};


function makeLetter() {
  return `
  <i>1st paragraph:
  1st sentence: this is the KEY
  Don’t tell them something they already know
  Need a HOOK: connect yourself to the company product; how something you do relates to their product; can be technical or personal; mirror the job post for guidance; connect the skill you have to something the company values (use what they give you)
  2nd two sentences
  Expand on what you bring to the company.</i></br>
  </br>
  I can’t think of a better work scenario than the combination of being a part of a ${company.teamAspect} team like ${company.name}, but with the impact to work on a product with ${company.productAspect}. I appreciate ${company.name}’s devotion to ${company.teamMO1}; I believe in ${company.teamValue} to reach ${company.productGoal}. I thrive when I am constantly presented with new challenges, and it is clear to me this role at ${company.name} would provide this type of opportunity. </br>
  </br>
  <i>2nd paragraph:
  Focus on hard skills, key languages, relevant work history
  Focus on what’s really impressive
  You should be able to verbalize what’s important & why
  Doesn’t have to be long; could be two sentences!
  1 sentence abt something unique/targeted to the comp
  2nd sentence: use the company name.</i></br>
  </br>
  I am a full-stack engineer with strengths in JavaScript and modern frameworks such as ${company.frameworks}. I also am experienced with ${company.otherTechnology}. I am highly detail-oriented and appreciate ${company.teamMO2} approaches to software engineering like ${company.name} uses. As a former Product Manager, I understand well how ${company.workflow} workflows affect the overall product, and would be excited to be part of a team that values these methods as well, especially for such a ${company.productPride} application. </br>
  </br>
  <i>Last paragraph: 
  Short description of one specific recent project 
  something that’s relevant to the company
  What part of your project is relevant to the company
  Don’t have any relevant projects? 
  Do the most impressive. 
  LINK to the project! They should be able to click on something that makes you look good!
  Closing:
  don’t equivocate; convey that you’ve already been inducted into their cult; assume they want to interview you 
  Close with language they use on their website.</i></br>
  </br>
  ${company.gourmand} My combination of extensive knowledge of JavaScript and of software development ${company.workflow} workflows would make me able to jump right into the code-base at ${company.name} on day one.`;
};

function setValues(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = company[inputs[i].name];
  }
};

$(function() {
  setValues($('form')[0]);
  $('#letter').html(makeLetter());
});

function regenerateLetter(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    company[inputs[i].name] = inputs[i].value;
  }
  $('#letter').html(makeLetter());
};

$('form').on('submit', function(e) {
  e.preventDefault();
  regenerateLetter($('form')[0]);
});                                             
