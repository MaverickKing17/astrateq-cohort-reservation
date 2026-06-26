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
app.post("/api/submit-reservation", async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      vehicleProfile, 
      selectedTier, 
      paymentStatus, 
      validationMode, 
      readinessScore, 
      classification, 
      timestamp 
    } = req.body;
    
    if (!email || !fullName) {
      return res.status(400).json({ success: false, error: "Name and email are required." });
    }

    const reservationId = 'AST-' + Math.floor(Math.random() * 90000 + 10000);
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey || resendKey === "re_12345678") {
      console.warn("RESEND_API_KEY environment variable is missing.");
      return res.status(400).json({
        success: false,
        error: "Resend API configuration is missing. Please set up the RESEND_API_KEY environment variable in your settings."
      });
    }

    let emailSent = false;
    let emailError = null;

    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Astrateq Reservations <reservations@astrateqgadgets.com>",
        to: email,
        replyTo: "kingnarmer702@gmail.com",
        subject: "Your Astrateq Early-Access Interest Was Recorded",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Astrateq Early-Access Interest Was Recorded</title>
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
      
      <p style="font-size: 16px; line-height: 1.6; color: #475A70;">We have successfully recorded your early-access interest for the Astrateq Canadian pre-launch validation program. Your submission helps validate demand for software-led driver readiness intelligence and informs future compatibility, feature, and hardware direction.</p>

      <!-- Reservation Card Summary -->
      <div style="background-color: #F1FAFF; border: 1px solid #BFE7FA; border-radius: 12px; padding: 24px; margin: 30px 0;">
        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #00AEEF; margin: 0 0 16px 0; font-weight: 800;">Interest Record Summary</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600; width: 45%;">Record ID:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700; font-family: monospace;">${reservationId}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Selected Cohort Path:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${selectedTier}</td>
          </tr>
          ${readinessScore !== undefined ? `
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Readiness Score:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #0B7CFF; font-weight: 800;">${readinessScore}% ${classification ? `(${classification})` : ''}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Registered Vehicle:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${vehicleProfile}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Payment Status:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #16B981; font-weight: 800;">${paymentStatus || 'No payment required today'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #7B8CA3; font-weight: 600;">Validation Mode:</td>
            <td style="padding: 6px 0; font-size: 13px; color: #081A33; font-weight: 700;">${validationMode || 'Early-access interest only'}</td>
          </tr>
        </table>
      </div>

      <h3 style="font-size: 16px; font-weight: 700; color: #081A33; margin: 30px 0 10px 0;">About Our Pre-Launch Phase</h3>
      <ul style="padding-left: 20px; margin: 0; color: #475A70; font-size: 14px; line-height: 1.6;">
        <li style="margin-bottom: 12px;"><strong>Software-Led Direction:</strong> Astrateq Gadgets is validating a software-led driver readiness intelligence experience first before making future hardware rollout decisions.</li>
        <li style="margin-bottom: 12px;"><strong>Not a Final Purchase:</strong> This submission records early-access interest only. It is not a final product purchase, and there is no financial transaction established today.</li>
        <li style="margin-bottom: 12px;"><strong>Hardware Not Guaranteed:</strong> Future optional hardware concepts (including OBD-II adapters or camera units) depend on validation results and are not guaranteed to launch, be compatible, or have certified timelines.</li>
      </ul>

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
      return res.status(500).json({
        success: false,
        error: `Failed to send confirmation email via Resend: ${err.message || err}`
      });
    }

    res.json({
      success: true,
      reservationId,
      emailSent,
      message: "Early-access interest recorded and confirmation email sent successfully."
    });

  } catch (error: any) {
    console.error("Reservation Error:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to process early-access interest record." });
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
