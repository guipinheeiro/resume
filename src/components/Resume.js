import React from 'react';
import Typography from './Typography';
import { useTranslation } from 'react-i18next';
import './Typography.css';

export default function Resume() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="resume">
      <Typography variant="h1">{t('name')}</Typography>
      <Typography variant="h2">{t('role')}</Typography>

      <Typography variant="h2">{t('contact_details')}</Typography>
      <ul>
        <Typography variant="li">{t('phone')}</Typography>
        <Typography variant="li">{t('email')}</Typography>
        <Typography variant="li">{t('linkedin')}</Typography>
      </ul>

      <Typography variant="h2">{t('skills')}</Typography>
      <ul>
        <Typography variant="li">{t('skill_1')}</Typography>
        <Typography variant="li">{t('skill_2')}</Typography>
        <Typography variant="li">{t('skill_3')}</Typography>
        <Typography variant="li">{t('skill_4')}</Typography>
      </ul>

      <Typography variant="h2">{t('languages')}</Typography>
      <Typography variant="p">{t('language_fluency')}</Typography>

      <Typography variant="h2">{t('profile')}</Typography>
      <Typography variant="p">{t('profile_description')}</Typography>

      <Typography variant="h2">{t('employment_history')}</Typography>
      <Typography variant="h3">{t('job_1')}</Typography>
      <Typography variant="p">{t('job_1_duration')}</Typography>
      <Typography variant="p">{t('job_1_description')}</Typography>
      <Typography variant="h3">{t('job_2')}</Typography>
      <Typography variant="p">{t('job_2_duration')}</Typography>
      <Typography variant="p">{t('job_2_description')}</Typography>

      <Typography variant="h2">{t('education')}</Typography>
      <Typography variant="h3">{t('edu_1')}</Typography>
      <Typography variant="p">{t('edu_1_duration')}</Typography>
      <Typography variant="h3">{t('edu_2')}</Typography>
      <Typography variant="p">{t('edu_2_duration')}</Typography>

      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('pt')}>Portuguese</button>
    </div>
  );
}
