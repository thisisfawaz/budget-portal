export async function POST(req) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful Excel and Budgeting assistant for Local Government officers in Nigeria. Explain answers simply, step-by-step, with practical examples.",
          },
          ...messages,
        ],
        temperature: 0.4,
      }),
    });

    const data = await response.json();

    return Response.json({
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong with AI request" },
      { status: 500 }
    );
  }
}