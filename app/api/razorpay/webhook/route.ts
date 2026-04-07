import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

function verifySignature(payload: string, signature: string, secret: string) {
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { message: "Missing webhook secret." },
      { status: 500 },
    );
  }

  const signature = request.headers.get("x-razorpay-signature");
  if (!signature) {
    return NextResponse.json({ message: "Missing signature." }, { status: 400 });
  }

  const payload = await request.text();

  try {
    const valid = verifySignature(payload, signature, webhookSecret);
    if (!valid) {
      return NextResponse.json({ message: "Invalid signature." }, { status: 400 });
    }
  } catch {
    return NextResponse.json(
      { message: "Signature verification failed." },
      { status: 400 },
    );
  }

  // Integrate with your storage layer here and mark the matching order as paid.
  return NextResponse.json({ received: true }, { status: 200 });
}
