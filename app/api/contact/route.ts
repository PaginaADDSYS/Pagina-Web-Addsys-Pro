import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, email, mensaje } = body;

    const data = await resend.emails.send({
      from: "ADDSYS Contacto <contacto@addsys.cl>",
      to: ["operaciones@addsys.cl"],
      subject: `Nueva solicitud web - ${nombre}`,
      html: `
        <h2>Nueva solicitud desde addsys.cl</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return Response.json({ success: true, data });

  } catch (error) {
    return Response.json({ success: false, error });
  }
}