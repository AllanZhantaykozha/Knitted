import React from 'react';
import axios from 'axios';

import { DetailClothes } from '../components/DetailClothes';
import { Navbar } from '../components/Navbar';
import { SkeletonDetail } from '../components/DetailClothes/SkeletonDetail';
import { Footer } from '../components/Footer';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const id = useParams();
  console.log(id.id);

  const [loading, setLoading] = React.useState(true);

  const [clothes, setClothes] = React.useState();

  React.useEffect(() => {
    setLoading(true);
    async function fetchClothes() {
      try {
        axios.get(`https://63a58fcef8f3f6d4abf9637a.mockapi.io/items/${id.id}`).then((res) => {
          setClothes(res.data);
          setLoading(false);
        });
      } catch (error) {
        alert('Ошибка при получении товара');
      }
    }

    fetchClothes();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <SkeletonDetail />
      ) : (
        <div>
          <DetailClothes {...clothes} />
          <Footer />
        </div>
      )}
    </div>
  );
};
