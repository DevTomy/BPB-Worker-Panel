import { validateSubscription } from '../api/subscription.js';

export async function authMiddleware(request) {
    // گرفتن UUID از URL
    const url = new URL(request.url);
    const uuid = url.searchParams.get('uuid');
    
    if (!uuid) {
        return new Response('Unauthorized: UUID is required', { status: 401 });
    }
    
    // اعتبارسنجی UUID
    const isValid = await validateSubscription(uuid);
    
    if (!isValid) {
        return new Response('Unauthorized: Invalid subscription', { status: 401 });
    }
    
    return null; // اجازه ادامه پردازش درخواست
} 