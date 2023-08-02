// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
export default async function handler(req, res) {
  const { to, html, subject, text } = JSON.parse(req.body);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prdtory@gmail.com",
      pass: "usazaloxtndpdpbn",
    },
  });
  var options = {
    from: `Dtory.in <prdtory@gmail.com>`,
    to,
    subject,
    html,
    text,
  };
  let response = await transporter.sendMail(options);
  if (response) {
    res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.status(400).json({ message: "Error sending email" });
  }
}
