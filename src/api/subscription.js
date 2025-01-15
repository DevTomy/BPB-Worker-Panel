const API_URL = 'https://odinnet.pro/api/api/work/getFull';

export async function validateSubscription(uuid) {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch subscriptions');
        }
        
        const data = await response.json();
        
        // چک کردن وجود UUID در لیست
        return uuid in data;
        
    } catch (error) {
        console.error('Error validating subscription:', error);
        return false;
    }
}

export async function getSubscriptionName(uuid) {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch subscriptions');
        }
        
        const data = await response.json();
        
        // برگرداندن نام کاربر بر اساس UUID
        return data[uuid] || null;
        
    } catch (error) {
        console.error('Error getting subscription name:', error);
        return null;
    }
} 