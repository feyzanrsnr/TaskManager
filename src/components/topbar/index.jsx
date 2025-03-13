import React from 'react'
import * as S from './styles'
import { ProfileButton } from "../profile-button";

function Topbar() {
  return (
    <S.Topbar>
      <ProfileButton />
    </S.Topbar>
  )
}

export  {Topbar}