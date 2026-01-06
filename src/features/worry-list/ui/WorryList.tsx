import { useWorries } from "@/entities/worry";

export const WorryList = () => {
  const { data, isLoading } = useWorries();

  if (isLoading) return <div>로딩중</div>;
  if (!data || data.length === 0) return <div>걱정 없어요</div>;

  return (
    <ul>
      {data.map((worry) => (
        <li key={worry.id}>{worry.content}</li>
      ))}
    </ul>
  );
};
