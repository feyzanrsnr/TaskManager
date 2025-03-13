import React from 'react'
import * as S from './styles'
import {Main} from '../../components/main'
import {Sidebar} from '../../components/sidebar'
import {Topbar} from '../../components/topbar'


function MainLayout() {
  return (
    <S.MainLayout>
      <Sidebar />
      <Topbar />
      <Main />
    </S.MainLayout>
  )
}

export {MainLayout}