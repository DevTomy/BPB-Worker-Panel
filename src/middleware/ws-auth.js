import { validateSubscription } from '../api/subscription.js';

export async function wsAuthMiddleware(request) {
    // گرفتن UUID از WebSocket handshake
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const uuid = pathParts[pathParts.length - 1];
    
    if (!uuid) {
        return new Response('Unauthorized: UUID is required', { status: 401 });
    }
    
    // اعتبارسنجی UUID با API اودین‌نت
    const isValid = await validateSubscription(uuid);
    
    if (!isValid) {
        return new Response('Unauthorized: Invalid subscription', { status: 401 });
    }
    
    return null;
} 