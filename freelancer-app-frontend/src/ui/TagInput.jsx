import { useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";

export default function TagInput({ tags = [], setTags }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    const trimmed = inputValue.trim();

    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      <label htmlFor="" className="mb-1 block">
        افزودن تگ
      </label>
      <div className="h-30 overflow-y-scroll flex items-center flex-wrap gap-3 px-4 py-2 my-4 border border-gray-300 border-solid rounded-2xl">
        {tags.map((tag) => (
          <div key={tag} className="h-10 flex items-center p-2 rounded-2xl text-primary-900 bg-secondary-100">
            {tag}
            <span onClick={() => handleRemoveTag(tag)} className="mr-2 cursor-pointer">
              <IoIosClose className="w-6 h-6" />
            </span>
          </div>
        ))}
      </div>

      <div className="h-10 flex gap-x-2">
        <div className="h-full flex-5">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="جاوا اسکریپت"
            className="textField__input"
          />
        </div>

        <button
          type="button"
          onClick={handleAddTag}
          className="btn btn--primary flex items-center justify-center flex-1 p-0 border-none rounded-xl cursor-pointer"
        >
          <IoIosAdd className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
