import React, { type ChangeEvent } from 'react';
import type { BusinessType } from '../../../../types';
import styles from './InputState.module.scss';

interface IInputState {
  typeBusiness: BusinessType
  getValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputState = (props: IInputState) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.state}>
        {props.typeBusiness}
      </div>
      <input
        className={styles.inputState}
        type='text'
        onChange={props.getValue}
      />
    </div>
  );
};