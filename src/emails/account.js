const sgMail = require("@sendgrid/mail");

const sendgridAPIkey =
  "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";

sgMail.setApiKey(sendgridAPIkey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "aviralgangwar24@gmail.com",
    subject: "Welcome to Task Manager",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

module.exports = {
  sendWelcomeEmail
};
