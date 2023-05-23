const axios = require('axios')

const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: {
          name: 'Omkar Pandya',
          email: 'omkarpandya180202@gmail.com',
        },
        to: [
          {
            email
          },
        ],
        subject: 'Thanks for joining in!',
        textContent: `Welcome to the app, `+ name + `.  Let me know how you get along with the app.`
      },
      {
        headers: {
          'api-key': process.env.AXIOS_SENDINBLUE_API_KEY,
        },
      }
    )

    // console.log('Login Successful. Email sent to the registered email ID!!')
    // console.log('Response:', response.data)
  } catch (error) {
    // console.error('Error sending email:', error.response.data)
  }
}

const sendCancellationEmail = async (email, name) => {
    try {
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: {
            name: 'Omkar Pandya',
            email: 'omkarpandya180202@gmail.com',
          },
          to: [
            {
              email
            },
          ],
          subject: 'Sorry to see you go!',
          textContent: `Goodbye, `+ name + `.  Hope to see you back sometime soon.`
        },
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      )
  
      // console.log('Deletion Successful. Email sent to the registered email ID!!')
      // console.log('Response:', response.data)
    } catch (error) {
      // console.error('Error sending email:', error.response.data)
    }
}
  
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}