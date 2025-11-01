const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).send("Prompt required");
    }

    console.log("➡️ Received code:", code);

    const response = await aiService(code);

    console.log("✅ AI Service response:", response);

    res.send(response);
  } catch (err) {
    console.error("❌ getReview error:", err);
    res.status(500).send("Server error");
  }
};
