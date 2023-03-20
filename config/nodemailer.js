import nodemailer from "nodemailer";

const email = "meiyosolutionltd@gmail.com";
const password = "ceeuehkfnwoiiuba";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
