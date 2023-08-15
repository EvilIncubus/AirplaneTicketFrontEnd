export class Page<T> {
    content: Array<T>;
    totalElements: number;
    currentPage: number;
    elementsPerPage: number;

    constructor(content: Array<T>, totalElements: number, currentPage: number, elementsPerPage: number) {
        this.content = content;
        this.totalElements = totalElements;
        this.currentPage = currentPage;
        this.elementsPerPage = elementsPerPage;
    }
}