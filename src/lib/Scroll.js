function getScrollPosition() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return winScroll / height;
}

export {
    getScrollPosition
}