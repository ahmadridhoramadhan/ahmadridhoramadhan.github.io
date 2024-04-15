export default interface Project {
    id: number,
    url: string,
    name: string,
    description: string,
    image: string,
    category_ids: number[],
    date: string
}
