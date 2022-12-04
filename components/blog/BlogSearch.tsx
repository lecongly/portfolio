import {AppContext} from 'context/AppContext';
import React, {useContext} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

interface Props {
    setSearchedArticles: (arg: string) => void;
}

const BlogSearch = ({setSearchedArticles}: Props) => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    return (
        <div
            className="relative mb-12 max-w-xl w-full "
            onMouseEnter={() => cursorEnter()}
            onMouseLeave={() => cursorLeave()}
        >
            <input
                type="text"
                onChange={(e) => setSearchedArticles(e.target.value)}
                placeholder="Search articles"
                className="relative w-full mx-auto px-4 py-2 text-gray-900  bg-white border border-gray-200 rounded-md dark:border-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-gray-100"
            />
            <AiOutlineSearch
                className="absolute w-5 h-5 text-gray-400 right-3 top-2/4 -translate-y-2/4 dark:text-gray-300"/>
        </div>
    );
};

export default BlogSearch;