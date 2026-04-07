import { NextRequest, NextResponse } from "next/server";

interface RazorpayOrderRequest {
  amount: number;
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return NextResponse.json(
      { message: "Razorpay credentials are not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as RazorpayOrderRequest;
  if (!body.amount || body.amount < 100 || !body.receipt) {
    return NextResponse.json(
      { message: "Invalid order payload." },
      { status: 400 },
    );
  }

  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: body.amount,
      currency: body.currency || "INR",
      receipt: body.receipt,
      notes: body.notes || {},
    }),
    cache: "no-store",
  });

  const data = (await response.json()) as Record<string, unknown>;

  if (!response.ok) {
    const message =
      (data.error as { description?: string } | undefined)?.description ||
      "Failed to create Razorpay order.";
    return NextResponse.json({ message }, { status: response.status });
  }

  return NextResponse.json(data, { status: 200 });
}
