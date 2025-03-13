import React from 'react'
import * as S from './styles'
import { Outlet} from "react-router";

function Main() {

  return (
    <S.Main> 
    <Outlet />
    </S.Main>
  )
}

export {Main}