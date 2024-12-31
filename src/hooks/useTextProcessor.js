import axios from "axios";
import { useEffect } from "react";

const useTextProcessor = (userInput) => {

  // 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
  const API_KEY = "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"; // Replace with your Hugging Face API key
  const genreMap = {
    comedy: 35,
    horror: 27,
    romance: 10749,
    action: 28,
    drama: 18,
    thriller: 53,
  };

  const classifyGenre = async (userInput) => {
    try {
      // Send the text to Hugging Face API for classification
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/bert-base-uncased", // Model endpoint
        { inputs: userInput }, // User's input text
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`, // Include the API key for authentication
          },
        }
      );

      // Get the result from Hugging Face API
      const result = response.data[0]; // First result (assuming a single prediction)

      // The model returns a label with a confidence score
      const predictedLabel = result.label.toLowerCase(); // Convert label to lowercase for consistency
      const genreId = genreMap[predictedLabel]; // Map the predicted label to a movie genre ID

      if (!genreId) {
        throw new Error("Genre not recognized.");
      }

      return genreId; // Return the genre ID
    } catch (error) {
      console.error("Error classifying genre:", error);
      return null; // Return null if there's an error
    }
  };

  useEffect(() => {
    classifyGenre(userInput);
  }, []);
};

export default useTextProcessor;
