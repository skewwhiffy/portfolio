# Portfolio

## Zero to hero

This is a standard SPA in React. To start on a dev machine, run
```bash
npm ci
npm start
```

To run all tests
```bash
npm test
```

(This was tested with node version 14.15.1, the LTS release at the time of writing.)

## Functionality

This is the solution to an assignment with the following acceptance criteria:
```text
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

Note, portfolio entries and CV are faked (because I don't have an up-to-date CV, and I probably don't have six projects that I wrote myself that I can point to, certainly not with a frontend anyway: and in any case, I haven't deployed anything which I wrote on my own).

The contact form doesn't submit anywhere: instead, it just dumps the JSON blob of the message payload to the console, which can be viewed in a browser's developer tools.