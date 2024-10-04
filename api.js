// api.js

// Функція для генерації нового API ключа
function generateApiKey() {
    return 'API-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}
