export function getSourceURL(iconName, path) {
    return new URL(
        `/${path}/${iconName}.svg`,
        import.meta.url
    ).href;
}