
export const safeStringify = (data) => {
    const seen = new WeakSet(); // Keep track of seen objects to handle circular references
    return JSON.stringify(data, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                // Circular reference found, handle it (you can replace with a custom value or omit)
                return "[Circular Reference]";
            }
            seen.add(value);
        }
        return value;
    });
};


export const safeParse = (jsonString) => {
    const circularReferencePlaceholder = "[Circular Reference]";
    const seenObjects = new Map(); // Keep track of seen placeholders
    function customReviver(key, value) {
        if (typeof value === "string" && value === circularReferencePlaceholder) {
            return seenObjects.get(key);
        }
        return value;
    }
    return JSON.parse(jsonString, customReviver);
}