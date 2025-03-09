import { useQuery } from "@tanstack/react-query";
import React from "react";
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
function PostsComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData"], // <== Must be inside an object
    queryFn: fetchData, // <== Must be inside an object
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Data</button>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default PostsComponent;
