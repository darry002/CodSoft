# CodSoft

# Job Board Website

## Overview
This project is a job board website where employers can post job openings and job seekers can search and apply for jobs. The website is built using HTML, CSS, and JavaScript and uses localStorage to manage job postings and applications.

## Features
- Employers can post job openings.
- Job seekers can view job listings.
- Job seekers can apply for job postings.
- Employers can delete job postings.
- Responsive design for mobile and desktop views.
- Styled with a modern, clean interface.

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
job-board/
│
├── css/
│ └── styles.css
│
├── js/
│ └── script.js
│
├── index.html
├── post-job.html
├── job-details.html
├── apply-job.html


## Setup and Installation
1. Clone the repository to your local machine:
2. Navigate to the project directory
3. Open `index.html` in your web browser to view the job board.

## Usage
### Posting a Job
1. Navigate to the "Post Job" page by clicking on the "Post Job" link in the navbar.
2. Fill out the form with job details (title, company name, location, and description).
3. Submit the form to add the job posting.

### Viewing Job Details
1. On the homepage (`index.html`), click on the "View Details" button of any job listing to see more details about the job.
2. On the job details page, job seekers can apply for the job by filling out the application form.
3. Employers can delete the job posting by clicking the "Delete Job" button.

### Applying for a Job
1. On the job details page, fill out the application form with your name, email, and resume details.
2. Submit the form to apply for the job.

## Development Notes
- The job postings and applications are stored in the browser's localStorage. This means data will persist across page reloads but will not be shared across different browsers or devices.
- Ensure to link the CSS file in your HTML files:

## Future Enhancements
- Implement user authentication for employers and job seekers.
- Add search functionality for job listings.
- Integrate with a backend server for persistent storage and retrieval of job postings and applications.
- Improve form validations and error handling.

## Contact
For any questions or suggestions, please contact darrien2203@gmail.com.


