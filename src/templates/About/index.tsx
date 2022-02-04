import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore
      nemo, cum alias, hic maiores architecto, doloremque accusantium
      consequatur eius at. Eveniet enim, voluptatum cumque expedita vel
      consectetur sit odio!
    </S.Body>
  </S.Content>
)

export default AboutTemplate
