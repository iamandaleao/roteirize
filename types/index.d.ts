export interface PostCardProps {
  to: string
  title: string
  description: string
  thumbnail: string
  tags: string[] | undefined
}

export interface MenuItem {
  name: string
  icon: string
  href: string
}
