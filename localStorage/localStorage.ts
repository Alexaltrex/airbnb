export const setPreloaderToLocalStorage = (preloader: string) => {
    localStorage.setItem('airbnb_preloader', preloader);
}

export const getPreloaderFromLocalStorage = (): string | null => {
    const preloader = localStorage.getItem('airbnb_preloader');
    return preloader ? preloader : null
}
