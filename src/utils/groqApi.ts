import Groq from "groq-sdk";
import Config from "react-native-config";

const groq = new Groq({ apiKey: Config.GROQ_API_KEY });

export async function getResponse(
    prompt: string,
    responses: string[],
    prompts: string[],
    setResponses: (responses: string[]) => void,
    setPrompts: (prompts: string[]) => void,
) {
    console.log("getResponse called with prompt:", prompt);
    try {
        const newPrompts = [...prompts, prompt];
        setPrompts(newPrompts);
        console.log("Updated prompts:", newPrompts);

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Config.GROQ_API_KEY}`, // or Config.GROQ_API_KEY if using react-native-config
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                model: "llama-3.1-8b-instant",
            }),
        });

        const data = await response.json();
        console.log("Groq API response:", data);

        const responseText = data.choices?.[0]?.message?.content || "Sorry Please try again";
        const newResponses = [...responses, responseText];
        setResponses(newResponses);
        console.log("Updated responses:", newResponses);
    } catch (error) {
        console.error("Error in getResponse:", error);
    }
}