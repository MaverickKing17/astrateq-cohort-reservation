import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API routes FIRST
app.post("/api/reserve", async (req, res) => {
  try {
    const { email, fullName, vehicle, score, classification, region, tierId, tierName, mode } = req.body;
    
    if (!email || !fullName) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const reservationId = 'AST-' + Math.floor(Math.random() * 90000 + 10000);

    const resendKey = process.env.RESEND_API_KEY;
    let emailSent = false;
    let emailError = null;

    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        // Note: Unless a custom domain is configured in Resend, we must send from onboarding@resend.dev
        // We can deliver safely to the user's email address
        await resend.emails.send({
          from: "Astrateq Gadgets <onboarding@resend.dev>",
          to: email,
          replyTo: "reservations@astrateqgadgets.com",
          subject: "Astrateq Founding Cohort Interest Recorded",
          html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Astrateq Founding Cohort Confirmation</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FBFF; margin: 0; padding: 40px 20px; color: #081A33;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #CFE0EF; overflow: hidden; box-shadow: 0 4px 12px rgba(8, 26, 51, 0.05);">
    
    <!-- Top Branding Accent Banner -->
    <div style="background: linear-gradient(135deg, #0B7CFF 0%, #13C8F7 100%); padding: 32px 40px; text-align: center;">
      <h1 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">Astrateq Gadgets</h1>
      <p style="color: rgba(255, 255, 255, 0.9); margin: 6px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Drive Safer. Drive Smarter.</p>
    </div>

    <!-- Content Area -->
    <div style="padding: 40px;">
      <p style="font-size: 16px; line-height: 1.6; color: #475A70; margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #475A70;">We have successfully recorded your early-access interest for the Astrateq Canadian Founding Cohort. Based on your pre-launch driver readiness diagnostics, your application has been prioritized.</p>

      <!-- Reservation Card Summary -->
      <div style="background-color: #F1FAFF; border: 1px solid #BFE7FA; border-radius: 12px; padding: 24px; margin: 30px 0;">
        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #00AEEF; margin: 0 0 16px 0; font-weight: 800;">Reservation Summary</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600; width: 45%;">Reservation ID:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700; font-family: monospace;">${reservationId}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Selected Cohort Path:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${tierName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Readiness Score:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #0B7CFF; font-weight: 800;">${score}% (${classification})</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Registered Vehicle:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${vehicle}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Region:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${region}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600; border-top: 1px solid #D7E7F5; padding-top: 12px; margin-top: 8px;">Payment Terms:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #16B981; font-weight: 800; border-top: 1px solid #D7E7F5; padding-top: 12px; margin-top: 8px;">No payment required today</td>
          </tr>
        </table>
      </div>

      <h3 style="font-size: 16px; font-weight: 700; color: #081A33; margin: 30px 0 10px 0;">What happens next?</h3>
      <ol style="padding-left: 20px; margin: 0; color: #475A70; font-size: 14px; line-height: 1.6;">
        <li style="margin-bottom: 12px;"><strong>Priority Compatibility Review:</strong> Our team will cross-reference your vehicle's specifications with our telemetry readiness parameters.</li>
        <li style="margin-bottom: 12px;"><strong>Private Rollout Updates:</strong> You will receive private product-influence surveys, localized driver intelligence insights, and validation checkpoints before public release.</li>
        <li style="margin-bottom: 12px;"><strong>Pricing Consideration:</strong> As part of the Canadian pre-launch cohort, your early preference preserves priority pricing allocation.</li>
      </ol>

      <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #CFE0EF; font-size: 12px; color: #7B8CA3; text-align: center; line-height: 1.5;">
        <p style="margin: 0;">This email serves as validation of your early-access interest only. No product purchase or formal agreement has been established at this stage.</p>
        <p style="margin: 8px 0 0 0;">Astrateq Gadgets · astrateqgadgets.com · Privacy-first driver intelligence for Canadian roads</p>
      </div>
    </div>
  </div>
</body>
</html>
          `,
        });
        emailSent = true;
      } catch (err: any) {
        console.error("Resend send error:", err);
        emailError = err.message || err;
      }
    } else {
      console.warn("RESEND_API_KEY environment variable is missing. Resend email was skipped.");
    }

    res.json({
      success: true,
      reservationId,
      emailSent,
      emailError,
      message: emailSent 
        ? "Reservation saved and confirmation email sent successfully." 
        : "Reservation saved successfully (email skipped)."
    });

  } catch (error: any) {
    console.error("Reservation Error:", error);
    res.status(500).json({ error: error.message || "Failed to process reservation." });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
