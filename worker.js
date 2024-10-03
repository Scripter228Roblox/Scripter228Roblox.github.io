self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Без детальної інформації.',
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png'
    };
    event.waitUntil(
        self.registration.showNotification('Пуш-сповіщення', options)
    );
});
