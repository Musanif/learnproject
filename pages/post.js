import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container mt-8">
      <input
        className="p-2 w-72 border-2 border-black mb-8"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <div className="grid grid-cols-4 gap-5">
        {post
          .filter((post) => {
            if (post === "") {
              return post;
            } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
              return post;
            }
          })
          .map((post) => {
            return (
              <a href={`/posts/${post.id}`}>
                <Card
                  key={post.id}
                  id={post.id}
                  name={post.name}
                  username={post.username}
                  email={post.email}
                  street={post.address.street}
                  suite={post.address.suite}
                />
              </a>
            );
          })}
      </div>
    </div>
  );
}

const Card = ({ id, name, username, email, street, suite }) => {
  return (
    <div className="bg-black text-white p-5 rounded-lg">
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{street}</p>
      <p>{suite}</p>
    </div>
  );
};
