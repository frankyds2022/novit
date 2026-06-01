import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, correo, telefono, referral, proyecto } = body;

    // Server-side validation
    if (!nombre || !correo || !telefono || !referral || !proyecto) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      return NextResponse.json(
        { success: false, error: "El formato de correo no es válido." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY || 're_49BWGYHu_BZae5CjmNWaizTZavbadRseE';
    const sendToEmail = process.env.CONTACT_EMAIL || "delacruzsuclupefranky2@gmail.com";

    // Text & HTML Representation of the contact submission
    const emailSubject = `Nuevo mensaje de contacto: ${nombre} - Novit`;
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
        <h2 style="color: #09090b; font-size: 20px; border-bottom: 2px solid #00d0b8; padding-bottom: 10px; margin-top: 0;">Nuevo lead de contacto (novit.pe)</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #71717a; width: 150px;">Nombre:</td>
            <td style="padding: 8px 0; color: #09090b;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #71717a;">Correo:</td>
            <td style="padding: 8px 0; color: #09090b;"><a href="mailto:${correo}" style="color: #00d0b8; text-decoration: none;">${correo}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #71717a;">Teléfono:</td>
            <td style="padding: 8px 0; color: #09090b;">${telefono}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #71717a;">Solución Interesada:</td>
            <td style="padding: 8px 0; color: #09090b;">${referral}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #71717a; vertical-align: top;">Detalles de Consulta:</td>
            <td style="padding: 8px 0; color: #09090b; white-space: pre-wrap;">${proyecto}</td>
          </tr>
        </table>
        <div style="margin-top: 25px; font-size: 11px; color: #a1a1aa; text-align: center; border-top: 1px solid #e4e4e7; padding-top: 15px;">
          Este correo fue enviado de forma automática desde el formulario de contacto de Novit.pe.
        </div>
      </div>
    `;

    if (!resendApiKey) {
      // API Key is missing: Simulation Mode
      console.log("--------------------------------------------------");
      console.log("⚠️ RESEND_API_KEY no configurada. Simulación de Envío:");
      console.log(`De: contacto@novit.pe`);
      console.log(`Para: ${sendToEmail}`);
      console.log(`Asunto: ${emailSubject}`);
      console.log("--------------------------------------------------");

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Simulación de envío de correo exitosa. Configura RESEND_API_KEY para envíos reales.",
      });
    }

    // Call Resend API natively
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Novit Contacto <onboarding@resend.dev>",
        to: [sendToEmail],
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Error al enviar correo vía Resend:", resendData);
      return NextResponse.json(
        { success: false, error: resendData.message || "Error al enviar el correo a través de Resend." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Tu mensaje ha sido enviado con éxito.",
      data: resendData,
    });
  } catch (error: any) {
    console.error("Error en API Route de contacto:", error);
    return NextResponse.json(
      { success: false, error: "Ocurrió un error inesperado al procesar tu solicitud." },
      { status: 500 }
    );
  }
}
