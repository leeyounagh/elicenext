import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Api = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        onBlur={() => {
          fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
            body: JSON.stringify({
              model: "text-davinci-003",
              prompt: `${inputValue}.`,
              temperature: 0.7,
              max_tokens: 256,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0,
            }),
          })
            .then((resp) => resp.json())
            .then((result) => {
              setData(result.choices[0].text);
              const voice = new SpeechSynthesisUtterance(data);
              speechSynthesis.speak(voice);
            });
        }}
      ></input>
      {data}
    </div>
  );
};

export default Api;
