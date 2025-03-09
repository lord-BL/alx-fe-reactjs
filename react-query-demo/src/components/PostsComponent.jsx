import { useQuery } from "@tanstack/react-query";
import React from "react";
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
function PostsComponent() {
  const { data, isError, isLoading } = useQuery({
    // ✅ Renamed error to isError
    queryKey: ["fetchPosts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>; // ✅ Renamed error to isError

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
