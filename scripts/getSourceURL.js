export function getSourceURL(iconName, type) {
    return new URL(
        `../assets/${iconName}.${type}`,
        import.meta.url
    ).href;
}