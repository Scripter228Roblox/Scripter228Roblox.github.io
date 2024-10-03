let counter = 0; // Лічильник
let startTime = Date.now(); // Час запуску секундоміра

module.exports = (req, res) => {
  if (req.method === 'GET') {
    // Обробка GET-запиту для отримання поточного значення лічильника та часу
    res.status(200).json({ counter, startTime });
  } else if (req.method === 'POST') {
    // Обробка POST-запиту для оновлення значення лічильника
    const { newCounter } = req.body;

    if (newCounter >= 0 && newCounter <= 100) {
      counter = newCounter;
      startTime = Date.now(); // Оновлюємо час
      res.status(200).send('Лічильник оновлено');
    } else {
      res.status(400).send('Невірне значення лічильника');
    }
  } else {
    res.status(405).send('Метод не дозволений');
  }
};