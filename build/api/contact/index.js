const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
    context.log('Contact form submission received');

    // Enable CORS
    context.res = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    try {
        const { name, email, company, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            context.res.status = 400;
            context.res.body = {
                success: false,
                error: 'Name, email, and message are required'
            };
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res.status = 400;
            context.res.body = {
                success: false,
                error: 'Invalid email address'
            };
            return;
        }

        // Configure email transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email content
        const mailOptions = {
            from: `"Warlox Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'chad@warlox.org',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>Submitted from warlox.org contact form</small></p>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
Submitted from warlox.org contact form
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        context.log('Email sent successfully');
        context.res.status = 200;
        context.res.body = {
            success: true,
            message: 'Your message has been sent successfully!'
        };

    } catch (error) {
        context.log.error('Error processing contact form:', error);
        context.log.error('Error details:', {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response
        });
        context.res.status = 500;
        context.res.body = {
            success: false,
            error: 'Failed to send message. Please try again later.',
            debug: process.env.NODE_ENV === 'development' ? error.message : undefined
        };
    }
};
