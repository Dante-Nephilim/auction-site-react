import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Item {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Items() {
  const [itemsList, setItemsList] = useState<Item[]>([]);
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    let date = new Date();
    setDate(date);
    fetchItems();
  }, []);
  function fetchItems() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((resp) => {
        setItemsList(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      {/* <div className="flex justify-center">
        <h1 className="text-4xl">Auction Items</h1>
      </div> */}
      <div className="grid grid-cols-4 gap-4">
        {itemsList &&
          itemsList.length !== 0 &&
          itemsList.map((item) => {
            return (
              <span
                key={`${date?.toDateString()}${item.title}`}
                className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dotted p-3 text-white"
              >
                <h2 className="text-xl">Title: {item.title}</h2>
                <p>id:{item.id}</p>
                <p>album:{item.albumId}</p>
                <img src={item.url} alt="itemImage" width="100" height="100" />
                <a
                  className="border-3 rounded-md bg-white p-2 text-black"
                  href=""
                >
                  View Product
                </a>
              </span>
            );
          })}
      </div>
    </div>
  );
}
