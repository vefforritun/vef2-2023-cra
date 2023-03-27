import { useState, useEffect } from 'react';
import { generateApiUrl } from '../../utils/generateApiUrl';

const URL = process.env.REACT_APP_API_URL;

export function Department({ slug }) {
  // type State = 'empty' | 'data' | 'error' | 'loading'
  const [state, setState] = useState('loading');
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetchDepartment();
    }
    fetchData();
  }, []);

  async function fetchDepartment() {
    setState('loading');
    try {
      const response = await fetch(generateApiUrl(`/departments/${slug}`));
      if (!response.ok) {
        throw new Error('not ok');
      }
      const json = await response.json();
      setDepartment(json);
      setState('data');
    } catch (e) {
      setState('error');
      console.log(e);
    }
  }

  if (state === 'error') {
    return <p>Villa við að sækja deild</p>;
  }

  if (state === 'loading') {
    return <p>Sæki deild</p>;
  }

  return (
    <section>
      <h2>{department.title}</h2>
      <p>{department.description}</p>
    </section>
  );
}
