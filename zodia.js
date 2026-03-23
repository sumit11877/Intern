const button = document.getElementById("getHoroscope");
    const zodiacSelect = document.getElementById("zodiacSelect");

    const statusDiv = document.getElementById("status");
    const errorDiv = document.getElementById("error");
    const resultDiv = document.getElementById("result");

    const zodiacEl = document.getElementById("zodiac");
    const dateEl = document.getElementById("date");
    const horoscopeEl = document.getElementById("horoscope");

    button.addEventListener("click", async () => {
      const zodiac = zodiacSelect.value;

      statusDiv.textContent = "Loading...";
      errorDiv.textContent = "";
      resultDiv.style.display = "none";

      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${zodiac}`, {
          method: "GET",
          headers: {
            "X-Api-Key": "EjCXOk7yIUeLVTL1qekPdhm7vIFXkqHyq2ieM2v6"
          }
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        zodiacEl.textContent = data.zodiac;
        dateEl.textContent = data.date;
        horoscopeEl.textContent = data.horoscope;

        resultDiv.style.display = "block";

      } catch (err) {
        errorDiv.textContent = "Error: " + err.message;
      } finally {
        statusDiv.textContent = "";
      }
    });