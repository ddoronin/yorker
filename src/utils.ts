const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export function formatTimeTicks(ticks:number): string {
    if (ticks < second) {
        return `${ticks}ms`;
    }
    if (ticks < minute) {
        return `${Math.floor(ticks / second)}s`;
    }
    if (ticks < hour) {
        return `${Math.floor(ticks / minute)}m`;
    }
    if (ticks < day) {
        return `${Math.floor(ticks / hour)}h`;
    }
    return `${Math.floor(ticks / day)}d`;
}
