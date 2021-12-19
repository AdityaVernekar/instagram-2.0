import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions[0].avatar);
  }, []);
  return (
    <div className="flex space-x-3 bg-white p-6 mt-8 border-gray-300 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};

export default Stories;
