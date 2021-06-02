import styled from 'styled-components'

export const StyledAboutMe = styled.div`
  padding: 0 1rem;
  .wrapper {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    margin: 10rem auto 0 auto;
    justify-content: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
    }
  }

  p {
    max-width: 580px;
    font-size: 1.2rem;
  }
`

export const ProfilPicture = styled.div`
  width: 300px;
  height: 300px;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  display: block;
  border-radius: 50%;
  border: 6px solid #e16f64;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    margin-right: unset;
    margin-bottom: 2rem;
  }
`
