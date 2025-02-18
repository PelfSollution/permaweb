import React, { useEffect, ReactElement } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import Store from './Store'

import GroupsSidebar from './components/GroupsSidebar'

const DRAWER_WIDTH = 240
const HEADER_HEIGHT = 80
const FOOTER_HEIGHT = 60
const BACKGROUND = '3578E5'

function useLayout({ store }: { store: Store }) {
  const members = [1, 2, 3, 4, 5]

  useEffect(() => {
    store.groupsGetAll()
  }, [store])

  return {
    members
  }
}

export interface LayoutProps {
  store: Store
  children: ReactElement
}

const Layout = ({ store, children }: LayoutProps) => {
  const { members } = useLayout({
    store
  })

  return (
    <Section>
      <Header>
        <Title>
          <Img
            src="https://picsum.photos/seed/picsum/50/50"
            alt="Permaweb logo"
          />{' '}
          Permaweb
        </Title>
        <Bar>
          <Sub>Group name</Sub>
          <Info>
            <div>90</div>
            <Members maxCount={5}>
              {members.map((member, i) => {
                return (
                  <Img
                    src="https://picsum.photos/seed/picsum/30/30"
                    alt=""
                    key={i}
                  />
                )
              })}
            </Members>
            <div>Share</div>
            <div>Edit</div>
          </Info>
        </Bar>
      </Header>
      <Content>
        <GroupsSidebar />
        <Main>{children}</Main>
      </Content>
      <Footer>
        <Profile>
          <Img src="https://picsum.photos/seed/picsum/30/30" alt="avatar" />
          <div>Shokunin</div>
          <div>Edit</div>
        </Profile>
        <Copyright>© Permaweb</Copyright>
      </Footer>
    </Section>
  )
}

/* section */
const Section = styled.section`
  display: grid;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: ${DRAWER_WIDTH}px 1fr;
  height: ${HEADER_HEIGHT}px;
  background: ${BACKGROUND};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: ${DRAWER_WIDTH}px 1fr;
  overflow: auto;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: ${DRAWER_WIDTH}px 1fr;
  height: ${FOOTER_HEIGHT}px;
  background: ${BACKGROUND};
`

/* header */
const Title = styled.h1`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  padding: 0 20px;
`

const Bar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  padding: 0 10px;
`

const Sub = styled.h2`
  padding: 0;
  margin: 0;
`

const Info = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  align-items: center;
  margin-left: auto;
`

const Members = styled.div`
  display: grid;
  grid-template-columns: ${({ maxCount }: { maxCount: number }) =>
    `repeat(${maxCount}, auto)`};
  grid-gap: 5px;
`

/* content */

const Main = styled.main`
  height: 100%;
  overflow: auto;
  padding: 20px;
  background: #f0f0f0;
`

/* footer */
const Profile = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 0 10px;
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`

/* common */
const Img = styled.img`
  border-radius: 50%;
`

export default inject('store')(observer(props => <Layout {...props} />))
