function generateMarkdown(data) {
  const readMe =
    `# ${data.title}

## Description:
#### ${data.description}

## Table of Contents:

* [Summary](#Description)
* [How to install](#Installation)
* [Usage](#Usage)
* [Licensing Info](#Licensing)
* [Testing](#Testing)
* [Other/Miscellaneous](#Other/Miscellaneous)
* [Contributors](#Contributors)

### Installation:
- ${data.installation}

### Usage:
- ${data.usage}

### Licensing:
- ${data.license}

### Testing:
- ${data.tests}

### Other/Miscellaneous:
- ${data.other}

### Contributors:
![alt text](${data.avatar_url} "${data.username}")

#### Email Address: ${data.email}
- ${data.contributors}`

return readMe;
}

module.exports = generateMarkdown;
