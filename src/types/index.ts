export interface NavLink{
    label: string
    href: string
}

export interface QuickLink{
    label: string
    href: string

}

export interface Project{
    title: string
    description: string
    image: string
    link: string
    date: string
    tags: string[],
    points: string[]
}
export interface Message{
    role: 'user' | 'assistant'
    content: string
}