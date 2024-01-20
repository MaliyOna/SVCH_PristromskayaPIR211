import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { GroupButton } from '../GroupButton/GroupButton';

export function ButtonsGroup(props) {
  return (
    <ButtonGroup variant="contained">
      <GroupButton text="Сохранить" function={() => props.save()}/>
      <GroupButton text="Отмена" function={() => props.close()}/>
      <GroupButton text="Удалить" function={() => props.delete()}/>
    </ButtonGroup>
  );
}