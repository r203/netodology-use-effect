import { useEffect, useState } from 'react';

const Details = ({ info }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (info.id) {
      setIsLoading(true)
      let URL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      let fetchData = async () => {
        const response = await fetch(URL);
        if (!response.ok) {
        }

        const result = await response.json();
        setUserInfo(result);
        setIsLoading(false);
      }

      fetchData();
    }


  }, [info.id]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div>{userInfo.name}</div>
      <div><img src={userInfo.avatar} alt={userInfo.name} /></div>
    </>
  )
}

export default Details;