import sgMail from "@sendgrid/mail";

// Set API key
sgMail.setApiKey(process.env.API_SENDGRID);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    console.log(
      "SendGrid Key:",
      process.env.API_SENDGRID ? "LOADED" : "MISSING"
    );

    // Send email
    await sgMail.send({
      to: "abhilashaduwal@gmail.com",
      from: "abhilashaduwal@gmail.com",
      replyTo: email,
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Message:</b> ${msg}</li>
        </ul>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully",
    });
  } catch (error) {
    console.error(
      "SendGrid Error:",
      error.response?.body || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};

export default sendEmailController;
