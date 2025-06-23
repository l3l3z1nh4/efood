import { TagId } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagId>{children}</TagId>
export default Tag
