import emailjs from "emailjs-com";
// 12/03/2023 install dependency=> npm install emailjs-com --save

export function forgotPasswordEmail(fname, femail, fpassword) {
  const templateParams = {
    name: fname,
    email: femail,
    password: fpassword,
  };
  console.log(templateParams);

  emailjs
    .send(
      "service_i1yokil",
      "template_namyf66",
      templateParams,
      "jxuAuq3psGJl62n3y"
    )
    .then(
      (response) => {
        console.log("Email sent!", response.status, response.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
}
