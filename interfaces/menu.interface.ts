export interface PageItem {
    alias: string;
    title: string,
    _id: string,
    categoriy: string;
}
export interface MenuItem {
    _id: {
        secondCategory: string;
    }
    pages: PageItem[];
}