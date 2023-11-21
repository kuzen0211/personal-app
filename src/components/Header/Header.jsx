import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
  const [fact, setFact] = useState('');

  const random = parseInt(Math.random() * 1000);

  useEffect(() => {
    fetch(`http://numbersapi.com/${random}/trivia`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        setFact(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return <p className={styles.header}>{fact || 'Loading...'}</p>;
};
