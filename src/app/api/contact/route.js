import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: "Minden mező kitöltése kötelező." },
        { status: 400 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <portfolio@sardi-balazs.hu>", // Ezt cseréld le a saját verifikált domainedre
      to: ["balazs.sardi@gmail.com"], // Ide jön a te saját email címed
      subject: `Új üzenet a portfóliódból - Feladó: ${name}`,
      reply_to: email, // Így közvetlenül a felhasználónak tudsz válaszolni
      html: `
            <h1>Új üzenet érkezett a portfólión keresztül!</h1>
            <h1>${subject}</h1>
            <p><strong>Név:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr />
            <p><strong>Üzenet:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Hiba az e-mail küldése során." },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Szerverhiba történt." },
      { status: 500 }
    );
  }
}
