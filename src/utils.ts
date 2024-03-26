export const scrollToId = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    });
}