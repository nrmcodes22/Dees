export async function POST(req) {
  const body = await req.json();

  const response = await fetch(`https://api.notion.com/v1/pages`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        "First Name":  { rich_text: [{ text: { content: body.firstName } }] },
        "Last Name":   { rich_text: [{ text: { content: body.lastName } }] },
        "Email":       { email: body.email },
        "Phone":       { phone_number: `${body.countryCode}${body.phone}` },
        "Budget": { rich_text: [{ text: { content: body.budget } }] },
        "Website":     { url: body.website || null },
        "Brand Name":  { title: [{ text: { content: body.brandName } }] },
        "Timeframe":   { select: { name: body.timeframe } },
        "Services":    { multi_select: [{ name: body.services }] },
        "Find Me":     { select: { name: body.findMe } },
        "Description": { rich_text: [{ text: { content: body.description } }] },
        "Submitted At": { date: { start: new Date().toISOString() } },
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Notion API error:", JSON.stringify(errorData, null, 2));
    return new Response(JSON.stringify({ error: errorData }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}