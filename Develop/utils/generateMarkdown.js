// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   const badge = license.badge
//   let bagdeString = '';
//   if (badge === 'MIT') {
//     bagdeString = `![Badge: MIT](https://img.shields.io/badge/license-MIT-green)`
//   };
//   if (badge === 'APACHE') {
//     bagdeString = `![Badge: APACHE](https://img.shields.io/badge/license-APACHE-orange)`
//   }
//   if (badge === 'GNU General Public') {
//     bagdeString = `![Badge: GNU General Public](https://img.shields.io/badge/license-GNU%20General%20Public-blue)`
//   }
//   if (badge === 'Boost Software') {
//     bagdeString = `![Badge: Boost Software](https://img.shields.io/badge/license-Boost%20Software-red)`
//   }
//   return badgeString
// };

function renderLicenseBadge(license){
  // if there is badge information run the following code
  if(license !== "None"){
    // take whatever the value of LICENSE is and place it in the ${license} feld to complete the return
    return `![Github license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `\n* [License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `## License`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # 
  ${data.title}

  ##Description
  ${data.description}
  ${renderLicenseLink(data.license)}

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ##Credit
  ${data.credits}

  ##Links
  ${data.links}

  ##License
  ${renderLicenseBadge(data.license)}

  ##Features
  ${data.features}

  ##How to Contribute
  ${data.contribute}

  ##Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
