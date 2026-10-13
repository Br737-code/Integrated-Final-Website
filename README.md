# PNG Events Hub — Integrated Website Project

Welcome to the **PNG Events Hub** repository, a collaborative web development project by Group 5 for IS229 Web Design — Assessment 4.

The project aims to create a community-focused website where users can discover cultural festivals, sporting competitions, educational workshops, music events, and other activities across Papua New Guinea.

**PNG Events Hub is currently in development.** Team members are working on their assigned webpages and features before integrating their work into a single website. This README will be updated as development progresses.

---

## 1. Project Overview

- **Project Title:** PNG Events Hub
- **Project Group:** Group 5
- **Unit/Course:** IS229 Web Design — Assessment 4 (Web Design Project)
- **Project Type:** Multi-page website
- **Current Status:** In Development
- **Live Website:** To be added when the website is ready for deployment.

### Project Purpose

The purpose of PNG Events Hub is to provide a central place for people to discover and explore events taking place across Papua New Guinea.

### Project Objectives

The project aims to:

- Present information about cultural, sporting, educational, and music events.
- Organise event information in a clear and accessible format.
- Showcase event photographs and community activities through an image gallery.
- Introduce the purpose of the platform and provide relevant information about it.
- Provide a contact or registration form for user enquiries.
- Develop a responsive website that works across desktop, tablet, and mobile devices.
- Apply HTML, CSS, JavaScript, accessibility, and web design principles learned in IS229.

These objectives describe the intended outcome of the project. Features will be implemented and reviewed as development continues.

---

## 2. Team Members and Responsibilities

The project is divided among six team members. Each member is assigned a webpage or a specific area of development to contribute to the overall website.

| Team Member | Assigned Page or Role    | HTML and CSS Responsibilities                                                               | Planned JavaScript Feature                    |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Member 1    | Home (`index.html`)      | Header, navigation, hero banner, featured events, and responsive navigation styling         | Mobile navigation toggle                      |
| Member 2    | Events (`events.html`)   | Event cards, CSS Grid layout, and category filter buttons                                   | Event category filtering                      |
| Member 3    | Gallery (`gallery.html`) | Responsive image grid, captions, image alternative text, and modal styling                  | Interactive image lightbox                    |
| Member 4    | About (`about.html`)     | Mission statement, target audience, organiser profiles, and FAQ styling                     | Interactive FAQ accordion                     |
| Member 5    | Contact (`contact.html`) | Contact or registration form, input labels, and form styling                                | Client-side form validation and user feedback |
| Member 6    | Search and Integration   | Keyword search interface, shared responsive styling, and integration of individual webpages | Keyword search filtering                      |

**Note:** Replace the member labels with the actual names of the team members. These responsibilities represent the planned division of work and should be updated if the group changes its assignments.

---

## 3. Repository File Structure

The project is being organised into separate HTML pages, a shared CSS stylesheet, a JavaScript file, and an image directory.

```text
Integrated-Final-Website/
│
├── index.html          # Home page
├── events.html         # Events directory
├── gallery.html        # Community image gallery
├── about.html          # About page and FAQs
├── contact.html        # Contact and registration page
│
├── css/
│   └── style.css       # Shared stylesheet
│
├── js/
│   └── script.js       # Shared JavaScript functionality
│
├── images/             # Images and visual assets
│
└── README.md           # Project documentation
```

The structure may change as the project develops. Additional files or folders can be added when required.

---

## 4. Technologies and Tools

The following technologies and tools are intended for use during the development process.

- **HTML5:** Used to structure webpages and their content.
- **CSS3:** Used to style webpages and create responsive layouts with Flexbox, CSS Grid, and media queries.
- **JavaScript:** Used to implement interactive features such as navigation toggles, event filtering, image lightboxes, and form validation.
- **Visual Studio Code:** Used to write and manage project files.
- **Git and GitHub:** Used for version control, repository management, and collaboration among team members.
- **GitHub Copilot:** Used as an AI-assisted tool for debugging and helping resolve integration issues.
- **GitHub Pages or another static hosting service:** A potential deployment option once the website is ready.

The tools and features listed above describe the project's development approach. Their implementation and use may evolve as the work progresses.

---

## 5. Shared HTML Starter Template

To maintain consistency across the website, team members should use the following HTML shell as the starting point for their assigned webpages.

Each member should replace the placeholder inside the `<main>` element with the content required for their page while keeping the shared header, navigation, stylesheet reference, and footer consistent.

The template is a starting point and will be adjusted as necessary during development.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta
      name="description"
      content="Discover events and community activities across Papua New Guinea with PNG Events Hub."
    />

    <title>PNG Events Hub</title>

    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- HEADER -->
    <header>
      <div class="container">
        <a href="index.html" class="logo"> PNG Events Hub </a>

        <nav aria-label="Main navigation">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <!-- Add page-specific content here -->
    </main>

    <!-- FOOTER -->
    <footer>
      <div class="container">
        <p>&copy; 2026 PNG Events Hub. All rights reserved.</p>
      </div>
    </footer>

    <!-- JAVASCRIPT -->
    <script src="js/script.js"></script>
  </body>
</html>
```

### Guidelines for Using the Template

1. Save the webpage using the appropriate filename assigned to you.
2. Add your page-specific content inside the `<main>` element.
3. Use the shared stylesheet at `css/style.css` for styling.
4. Add JavaScript functionality to `js/script.js` where appropriate, coordinating with the team to avoid conflicts.
5. Keep navigation links consistent across all pages.
6. Use relative paths for stylesheets, scripts, and images.
7. Communicate with other members before making changes to shared files.
8. Test your changes before merging or integrating them with the other webpages.

---

## 6. Planned Website Features

The following features are part of the current development plan. Their completion will depend on implementation, integration, and testing.

- **Home page:** Introduction to PNG Events Hub and selected or featured events.
- **Events page:** Event listings organised into cards, with category filtering.
- **Gallery page:** A responsive collection of event and community images, with an interactive lightbox.
- **About page:** Information about the project's purpose, target audience, and frequently asked questions.
- **Contact page:** A contact or registration form with input validation and feedback.
- **Search functionality:** Keyword-based searching to help users find relevant events.
- **Responsive design:** Layouts that adapt to desktop, tablet, and mobile screens.
- **Accessibility:** Semantic HTML, meaningful image alternative text, labelled form fields, and accessible navigation.

These features are planned components of the website and should not be considered completed until they have been implemented and checked.

---

## 7. Development and Collaboration

Because this is a group project, effective communication and coordination are important throughout development.

Team members are expected to:

- Work primarily on their assigned webpages or responsibilities.
- Keep the shared HTML structure and navigation consistent.
- Coordinate changes to shared CSS and JavaScript files.
- Use Git and GitHub to manage changes and collaborate where appropriate.
- Avoid overwriting another team member's work.
- Report integration problems and resolve conflicts collaboratively.
- Review the combined website as individual pages are integrated.

The website will be assembled progressively as team members develop and contribute their work.

---

## 8. Running the Project Locally

The website can be previewed locally during development as the required files become available.

1. Clone or download the repository from GitHub.
2. Open the project folder in Visual Studio Code.
3. Check that the relevant HTML files, CSS, JavaScript, and image assets are present.
4. Open `index.html` in a web browser or use the VS Code Live Server extension.
5. Refresh the browser after making changes to view the latest version.
6. Check the browser's developer tools for missing files, JavaScript errors, and other issues.

As development continues, some pages or interactive features may be incomplete or temporarily unavailable.

---

## 9. Testing and Integration

Testing will take place throughout development as individual webpages and shared features are implemented.

Areas to review include:

- Correct navigation between webpages.
- Consistent styling across the website.
- Proper loading of CSS, JavaScript, and image files.
- Correct behaviour of event filtering and keyword search.
- Appropriate form validation and user feedback.
- Responsive layouts across desktop, tablet, and mobile screen sizes.
- Semantic HTML and accessibility considerations.
- Broken links and browser console errors.
- Compatibility of individual features when integrated into the shared website.

The team will address identified issues as development progresses. Final testing will be carried out when the website is sufficiently complete.

---

## 10. Project Status and Future Updates

**Current Status: In Development**

PNG Events Hub is an ongoing group project. Team members are developing individual pages, implementing planned features, and integrating their work into a unified website.

As the project progresses, this README will be updated to reflect:

- Actual team member names and any changes in responsibilities.
- Features that have been implemented.
- Changes to the repository structure.
- Integration and testing progress.
- The deployment link, once available.

The project should only be described as complete after the planned work has been implemented, integrated, and reviewed.

---
