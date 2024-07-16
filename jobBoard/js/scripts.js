document.addEventListener("DOMContentLoaded", function () {
    const postJobForm = document.getElementById("postJobForm");
    const applyJobForm = document.getElementById("applyJobForm");

    if (postJobForm) {
        postJobForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const jobTitle = document.getElementById("jobTitle").value;
            const companyName = document.getElementById("companyName").value;
            const jobLocation = document.getElementById("jobLocation").value;
            const jobDescription = document.getElementById("jobDescription").value;

            const job = {
                id: generateId(), // Generate a unique ID for the job
                title: jobTitle,
                company: companyName,
                location: jobLocation,
                description: jobDescription,
                date: new Date().toISOString()
            };

            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
            jobs.push(job);
            localStorage.setItem("jobs", JSON.stringify(jobs));

            window.location.href = "index.html"; // Redirect to index.html after posting job
        });
    }

    if (applyJobForm) {
        applyJobForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const applicantName = document.getElementById("applicantName").value;
            const applicantEmail = document.getElementById("applicantEmail").value;
            const applicantResume = document.getElementById("applicantResume").value;
            const jobId = new URLSearchParams(window.location.search).get("jobId");

            if (jobId) {
                const application = {
                    jobId: jobId,
                    name: applicantName,
                    email: applicantEmail,
                    resume: applicantResume,
                    date: new Date().toISOString()
                };

                let applications = JSON.parse(localStorage.getItem("applications")) || [];
                applications.push(application);
                localStorage.setItem("applications", JSON.stringify(applications));

                window.location.href = "index.html"; // Redirect to index.html after applying to a job
            } else {
                console.error("Job ID not found in URL parameters.");
            }
        });
    }

    if (window.location.pathname.endsWith("index.html")) {
        const jobList = document.querySelector(".list-group");
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        jobs.forEach((job, index) => {
            const jobItem = document.createElement("div");
            jobItem.classList.add("list-group-item", "mb-3");
            jobItem.innerHTML = `
                <h5>${job.title}</h5>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
                <a href="job_details.html?id=${job.id}" class="btn btn-primary">View Details</a>
            `;
            jobList.appendChild(jobItem);
        });
    }

    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9); // Generate a random ID
    }
});
