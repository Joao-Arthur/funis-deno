/**
 * # promises.last
 *
 * Returns the last promise to resolve/reject.
 *
 * > This function sets a *then* and *catch* callback for every passed promise.
 * > This way, the only promise you can *then* or *catch* is the one returned by this function.
 *
 * ## Example
 *
 * ```ts
 * await promises.last([
 *     promises.rejectTimeout('Socrates', 50),
 *     promises.resolveTimeout('Plato', 100),
 *     promises.resolveTimeout('Aristotle', 200),
 * ]) // 'Aristotle'
 * ```
 */
export function last<T>(promises: readonly Promise<T>[]): Promise<T> {
    return new Promise((resolve, reject) => {
        let resulted = 0;

        promises.forEach((promise) => {
            promise
                .then((value) => {
                    if (resulted === promises.length - 1) {
                        resolve(value);
                    } else {
                        resulted++;
                    }
                })
                .catch((error) => {
                    if (resulted === promises.length - 1) {
                        reject(error);
                    } else {
                        resulted++;
                    }
                });
        });
    });
}
