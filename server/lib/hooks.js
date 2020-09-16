import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}
export function useAllUser() {
  const { data, mutate } = useSWR('/api/users', fetcher);
  console.log(data);
  const users = data.users;
  return [users, { mutate }];
}

