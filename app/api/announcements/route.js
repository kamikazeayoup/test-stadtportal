import { NextResponse } from "next/server";

const ANNOUNCEMENTS = [
  { tag: "Wichtiger Hinweis", text: "Das Bürgeramt ist am 24.12. und 31.12. geschlossen." },
  { tag: "Bauarbeiten", text: "Die Rathausstraße ist noch bis zum 15. des Monats halbseitig gesperrt." },
  { tag: "Online-Service", text: "Der Personalausweis-Antrag ist jetzt komplett online möglich." },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return NextResponse.json({ announcements: ANNOUNCEMENTS });
}
