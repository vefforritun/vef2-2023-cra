import { useState, useEffect } from 'react';

const URL = 'http://localhost:4000/departments/';

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
      // await sleep(2)
      const url = `${URL}${slug}`;
      console.log(url);
      const response = await fetch(url);
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
