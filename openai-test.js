import OpenAI from "openai";

// 使用你的 API 密钥初始化 OpenAI 客户端
const openai = new OpenAI({ apiKey: 'sk-NED2CbmJMUB6TNfx01A9F48dC1A84b6aAb8dEfAb46953fCf' });

async function main() {
  try {
    // 发起聊天请求
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Hello, world!" } // 示例用户输入
      ],
      max_tokens: 150, // 设置响应的最大令牌数（可选）
    });

    // 打印响应
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// 调用 main 函数
main().catch(error => {
  console.error('Unhandled error:', error.message);
  if (error.response) {
    console.error('Response status:', error.response.status);
    console.error('Response data:', error.response.data);
  }
});
