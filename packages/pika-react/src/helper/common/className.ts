export function classNames(...args: any[]): string {
    const classes: Array<string> = [];
    const hasOwn = {}.hasOwnProperty;

    for (let i = 0; i < args.length; i++) {
        const arg: any = args[i];
        if (!arg) continue;

        const argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            const inner = classNames(...(arg as string[]));
            if (inner) {
                classes.push(inner);
            }
        } else if (argType === 'object') {
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}
