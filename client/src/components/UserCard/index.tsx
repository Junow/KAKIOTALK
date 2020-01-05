import React, { FC } from 'react';
import * as S from './styles';

interface UserCardProp{
  /** user card 에 표시할 유저 네임 */
  userName: string;
  /** 프로필사진 - 이름 배치 방향 */
  direction?: 'hor' | 'ver';
  /** 클릭핸들러 */
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
}

/**
 * UserCard
 *
 * - 유저의 프로필 사진과 이름이 표시됩니다.
 * - 프로필 - 사진의 배치는
 * - `hor` - 수평배치 (default)
 * - `ver` - 수직배치
 */
const UserCard: FC<UserCardProp> = ({
  userName,
  direction = 'hor',
  onClick,
}) => (
    <S.Container
      direction={direction}
      onClick={onClick}
      >
      <S.UserImg>
        <S.Account/>
      </S.UserImg>
      {userName}
    </S.Container>
);

export default UserCard;