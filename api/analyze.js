export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, mediaType } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: image }
            },
            {
              type: 'text',
              text: 'この部屋の写真を分析してください。必ず以下のJSON形式のみで返してください。JSONの前後に文字を入れないでください。\n{"score":7,"summary":"服が床に散乱","problems":["床に衣類が多い","収納が不足","通路が塞がれている"],"steps":[{"time":"15分","action":"ゴミだけ捨てる"},{"time":"30分","action":"服をハンガーにかける"},{"time":"1時間","action":"床のものを収納に移す"}],"tip":"ハンガーは同じ向きに揃えると取り出しやすくなります"}'
            }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      
return res.status(500).json({ error: 'API error', detail: errText, status: response.status });
    const data = await response.json();
    const text = data.content.map(i => i.text || '').join('');
    
    // JSONを安全に抽出
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      return res.status(500).json({ error: 'JSON not found in response' });
    }
    
    const result = JSON.parse(match[0]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message , stack: err.stack });
  }
}
