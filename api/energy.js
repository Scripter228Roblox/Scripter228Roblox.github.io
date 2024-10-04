// api/energy.js
export default function handler(req, res) {
    // Перевірка методу запиту
    if (req.method === 'GET') {
        const apiKey = req.query.apiKey; // Отримання API ключа з запиту
        if (apiKey !== 'api_v9h7175dkfg2piwuc8od') {
            return res.status(401).json({ error: 'Unauthorized' }); // Неправильний ключ
        }

        // Наприклад, повертаємо фіксоване значення енергії
        const energyValue = { energy: 50 }; // Ви можете отримувати значення енергії з бази даних або іншого джерела
        return res.status(200).json(energyValue); // Повертаємо значення енергії
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' }); // Неправильний метод запиту
    }
}
