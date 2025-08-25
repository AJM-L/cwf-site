import { writable } from 'svelte/store';

// Initialize stores with localStorage values if available
const getStoredCount = () => {
    if (typeof window !== 'undefined') {
        return parseInt(localStorage.getItem('count') || '0');
    }
    return 0;
};

const getStoredStopClicks = () => {
    if (typeof window !== 'undefined') {
        return parseInt(localStorage.getItem('stopClicks') || '0');
    }
    return 0;
};

export const count = writable(getStoredCount());
export const stopClicks = writable(getStoredStopClicks());

// Subscribe to store changes and save to localStorage
if (typeof window !== 'undefined') {
    count.subscribe(value => {
        localStorage.setItem('count', value.toString());
    });
    
    stopClicks.subscribe(value => {
        localStorage.setItem('stopClicks', value.toString());
    });
} 