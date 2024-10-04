// pages/api/energy.js
export default function handler(req, res) {
    const { apiKey } = req.query;

    // Перевірка дійсності API ключа (замініть на вашу логіку)
    if (apiKey === "api_vlx68rnibmqf4fohildd") {
        // Логіка обробки запиту
        res.status(200).json({ success: true, message: "API ключ дійсний!" });
    } else {
        res.status(401).json({ success: false, message: "Недійсний API ключ." });
    }
}
