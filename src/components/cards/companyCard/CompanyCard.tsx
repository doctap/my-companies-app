import React, { useCallback } from 'react';
import type { ICompany } from '../../../api';
import { EditDeleteButtons } from '../../elements';
import { ImageCard } from '../imageCard/ImageCard';
import styles from './CompanyCard.module.scss';

interface ICompanyCard {
  typeNumber: string
}

export const CompanyCard = (props: ICompany & ICompanyCard) => {
  const editCompany = useCallback(
    () => 0, []);

  const deleteCompany = useCallback(
    () => 0, []);

  return (
    <div className={styles.companyCard}>

      <div className={styles.card}>
        <div className={styles.ImageCard}>
          <ImageCard src={props.logo} alt='logo' />
        </div>

        <div className={styles.text}>
          <div>{`${props.account_type.toUpperCase()} ${props.company_name}`}</div>
          <div>{`${props.typeNumber.toUpperCase()} ${props.company_tin}`}</div>
        </div>
      </div>

      <div className={styles.EditDeleteButtons}>
        <EditDeleteButtons
          color1='#005DA1'
          color2='#D20000'
          model1='edit_square'
          model2='delete'
          onClick1={editCompany}
          onClick2={deleteCompany}
        />
      </div>

    </div>
  );
};