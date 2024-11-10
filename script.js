function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPDF() {
    // Here you can add any additional actions you want to perform before opening the PDF
    console.log("CV Download button clicked!"); // Example action

    // Redirect to the PDF file
    location.href = './assets/resume.pdf';
}

  // Function to open image in a modal
function openImage(imageSrc) {
  const modal = document.createElement("div");
  modal.className = "image-modal";

  const img = document.createElement("img");
  img.src = imageSrc;

  // Close modal on click outside the image
  modal.onclick = () => document.body.removeChild(modal);

  modal.appendChild(img);
  document.body.appendChild(modal);
}

  // Function to open and play video in a modal

function openVideo(videoSrc) {
  const modal = document.createElement("div");
  modal.className = "video-modal";

  const video = document.createElement("video");
  video.src = videoSrc;
  video.controls = true;
  video.autoplay = true;

  // Close modal on click outside video
  modal.onclick = () => document.body.removeChild(modal);

  modal.appendChild(video);
  document.body.appendChild(modal);
}

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-password",
    },
  });

  const mailOptions = {
    from: email,
    to: "christianbositoponce@gmail.com",
    subject: "New Contact Form Submission",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send("Email sent: " + info.response);
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));

// Scroll function to go up or down
function scrollPage(direction) {
  if (direction === 'up') {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  } else if (direction === 'down') {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to the bottom
  }
}